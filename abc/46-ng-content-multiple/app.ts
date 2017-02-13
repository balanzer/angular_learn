import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MessagesComponent } from './messages';
import { GreenWrapperComponent } from './green-wrapper.component';
import { BlueWrapperComponent, BlueWrapperComponentTags } from './blue-wrapper.component';


@NgModule({
  declarations: [
    MessagesComponent,
    GreenWrapperComponent,
    BlueWrapperComponent,
    BlueWrapperComponentTags
  ],
  imports: [BrowserModule],
  bootstrap: [MessagesComponent]
})
export class AppModule { }
