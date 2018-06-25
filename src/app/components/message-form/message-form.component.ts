import { Component, OnInit, Input, NgModule } from '@angular/core';
import { Message } from '@app/models';
import { DialogflowService } from '@app/services';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})


export class MessageFormComponent implements OnInit {

  @Input('message')
  private message : Message;

  @Input('messages')
  private messages : Message[];


  serverData: JSON;
  http: any;
  

  constructor(private httpClient: HttpClient) { 
    // httpClient: HttpClient
  }

  ngOnInit() {
  }

  sayHi(){
    // this.httpClient;
    // toSend: JSON;
    const data = this.httpClient.post ('http://127.0.0.1:5004/message', {
      msg: 'bye'
    })
    .subscribe(
      res => {
        const rec = res as JSON
        console.log(rec);
      },
      err => {
        console.log(err)
      }
    )
      // .subscribe(data => {
      // this.serverData = data as JSON;
      // console.log("I have entered say hi and I am going to display what I received.")
      console.log(data);
    // })
  }

  
  

  public sendMessage(): void {
    this.message.timestamp = new Date();
    this.messages.push(this.message);

    var e1 = document.getElementById('sendmsg')
    console.log("e1", e1)

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    

    let body = new FormData();
    body.append('msg', this.message.content)
    console.log(body.get('msg'))

    
    const data = this.httpClient.post ('http://127.0.0.1:5004/message', body, {withCredentials: true})
    .subscribe(
      res => {
        const rec = res as JSON
        console.log(rec, rec['topic']);
        for( let entry of rec['text']){
          this.messages.push(
            new Message(entry, 'assets/images/bot.png', new Date   )
          );
        }
        
      },
      err => {
        console.log(err)
      }
    )





    
    

    this.message = new Message('', 'assets/images/user.png');
  }

}
