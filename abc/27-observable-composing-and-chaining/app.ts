import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { RedditComponent }  from './reddit';

@NgModule({
  declarations: [RedditComponent],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule
  ],
  bootstrap: [RedditComponent]
})
export class AppModule { }
