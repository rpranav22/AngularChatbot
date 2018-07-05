import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatModule } from './chat/chat.module';
import { ApiService } from './shared/api.service';
import { SpinnerService } from './spinner/spinner.service';
import {Util} from './shared/utils';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { MaterialModule } from './shared/material.module';
import { AppRoutingModule } from './app.routing';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ChatModule,
    HttpClientModule,
    ToasterModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [ApiService, SpinnerService],
  bootstrap: [AppComponent]
})



export class AppModule { }
