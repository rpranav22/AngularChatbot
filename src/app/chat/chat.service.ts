import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { ApiAiClient } from 'api-ai-javascript';  
import { Observable } from 'rxjs/Observable';  
import { BehaviorSubject } from 'rxjs/BehaviorSubject';  
import { HttpClient} from '@angular/common/http';
export class Message {  
 
  constructor(public content: string, public sentBy: string, public messageType: string) {

   }  

}

@Injectable()
export class ChatService {
  readonly token = environment.dialogflow.angularBot;  
  readonly _client = new ApiAiClient({ accessToken: this.token });  
  
  conversation = new BehaviorSubject<Message[]>([]);  
  constructor(private httpClient: HttpClient) { }  
  // Sends and receives messages via DialogFlow  
  talk(msg: string) {  
    
    const userMessage = new Message(msg, 'user','text');  
    this.update(userMessage);  
    return this._client.textRequest(msg)  
      .then(res => {  
        console.log(res);
        const speech = res.result.fulfillment.speech;  
        console.log(speech);
        const botMessage = new Message(speech, 'bot','text');  
        this.update(botMessage);  
      });  
  }  
  // Adds message to source  
  update(msg: Message) {  
    console.log(msg);
    this.conversation.next([msg]);  
    
  }  
  converse(msg: string){
    
    

    let body = new FormData();
    body.append('msg', msg)
    

    const userMessage = new Message(msg, 'user','text');
    
    this.update(userMessage); 

    const data = this.httpClient.post ('https://ls-chatbot.herokuapp.com/spellcheck', body, {withCredentials: true})
    .subscribe(
      res => {
        console.log(body.get('msg'))
        const rec = res as JSON
        console.log(rec['query'], "spellcheck: ", rec['spellcheck'])
        console.log(rec, rec['topic']);

        if(rec['spellcheck'] == false){
          var botMessage = new Message(rec['text'], 'bot', 'text')
          console.log(botMessage);
          this.update(botMessage);
        }
        else{
          return this._client.textRequest(rec['query'])
        .then(res => {
          const speech = res.result.fulfillment.speech;
          const action = res.result.action;
          var botMessage = new Message("", "", "");
          // if("input.topic" === (action.toLowerCase())){
          //   botMessage = new Message("Select topic from below list,", "bot","topic");
          // }
          // else{
          //   botMessage = new Message(speech, 'bot','text');  
          // }
          botMessage = new Message(speech, 'bot', 'text')
          console.log(botMessage);
          this.update(botMessage);
        })
        }
      
        
      },
      err => {
        console.log(err)
      }
    )
    
  }
}
