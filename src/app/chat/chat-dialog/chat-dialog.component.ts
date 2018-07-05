import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../chat.service';
import { ApiService } from '../../shared/api.service';
import { Observable } from 'rxjs/Observable';  
import {Util} from '../../shared/utils';
import 'rxjs/add/operator/scan';
import { MaterialModule } from '../../shared/material.module';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {
  topics: any[] = [];
  topicsMeta: any = {};
  showTopics: boolean;
  dataLoaded = false;
  selectedTopicIndex = 0;

  messages: Observable<Message[]> ;
  backgroud: "background-color: red";
  formValue: string;
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;
  red_mat_class: string = "redtype mat-chip mat-primary";
  green_mat_class: string = "greentype mat-chip mat-primary";
  orange_mat_class: string = "orangetype mat-chip mat-primary";
  grey_mat_class: string = "greytype mat-chip mat-primary";
  fruits = [
    { name: 'Lemon' },
    { name: 'Lime' },
    { name: 'Apple' },
  ];
  separatorKeysCodes = [ENTER, COMMA];

  constructor(private chat: ChatService, private api: ApiService, private httpClient: HttpClient) { }

  ngOnInit() {
   //this.chat.talk("who are you")
    this.messages = this.chat.conversation.asObservable().scan((acc, val) => acc.concat(val));
    this.retrieveTopics();
    // const msg = "send id"
    const msg = "id 3029"
    const userMessage = new Message(msg, 'user','text');
    
    this.chat.update(userMessage);
    this.chat._client.textRequest(msg)
    .then(res =>{
      const speech = res.result.fulfillment.speech;
      const action = res.result.action;;
      var botMessage = new Message(speech, 'bot', 'text')
          console.log(botMessage);
          this.chat.update(botMessage);
    })
   // this.sayHi();
  }
sendMessage(){
  this.chat.converse(this.formValue);
  //this.sayHi();
  this.formValue = '';
}
retrieveTopics() {
  this.dataLoaded = false;
  const options = {show_loader: false};
  this.api.get('perceive', options).subscribe(data => {
      this.topics = data.list;
      console.log("topics->"+this.topics);
      this.topicsMeta = data.pagination;
      if (this.topics.length > 0) {
          this.showTopics = true;
      } else {
          this.showTopics = false;
      }
      console.log("showTopics->"+this.showTopics);
      for (let i = 0; i < this.topics.length; i++) {
         this.topics[i].metaData = Util.metaData(this.topics[i].translations);
         console.log("metaData->"+this.topics[i].metaData);
      }
      this.dataLoaded = true;
  });
}
changeSelected(e) {
  console.log(e);
  const userMessage = new Message("Clicked", 'user','text');  
  this.chat.update(userMessage);
}
topicClick(topic: any) {
  
  var topicTitleMessage = new Message("<b>Title</b>: "+topic.metaData.title, "user",'text');  
  this.chat.update(topicTitleMessage);

  var priority = topic.topic_user_correlation.priority;
  var botMessage = "";
  if('HIGH'===topic.topic_user_correlation.priority){
    botMessage =botMessage + "<div class='subtitle-red subtitle'><b>Oops! you are late, finish questions now to restart the timer.</b></div>";
  }
  else if('MEDIUM'===topic.topic_user_correlation.priority){
    botMessage = botMessage +"<div class='subtitle-yellow subtitle'><b>you are slowing down:( Take questions quickly before they turn red!</b></div>";
  }
  else if(topic.topic_user_correlation.backlog_count>0 && topic.topic_user_correlation.priority!=='HIGH'  && topic.topic_user_correlation.priority!=='MEDIUM'){
    botMessage = botMessage + "<div class='subtitle-green subtitle'><b>Questions are ready! Take them now to maximise points.</b></div>"

    //botMessage = botMessage +"<span class='subtitle-green subtitle'><b>Questions are ready! Take them now to maximise points.</b></div>";
  }
  else if(topic.topic_user_correlation.backlog_count===0){
    botMessage = botMessage +"<div class='subtitle-grey subtitle'><b>You are on time! Please wait for the next set of questions.</b></div>";
  }
  botMessage = botMessage + "<br/>" + "<b>Topic Description</b>: "+ topic.metaData.description;  
  var topicDescMessage = new Message(botMessage, "bot",'text');    
  this.chat.update(topicDescMessage);
}
sayHi(){
  // this.httpClient;
  // toSend: JSON;
  var header = new HttpHeaders().set('Content-Type', 'application/vnd.api+json');
  //header.append();
  const data = this.httpClient.get('http://127.0.0.1:8000/productsjson', { withCredentials: true }
)
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
}
