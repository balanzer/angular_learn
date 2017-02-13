import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsComponent } from './events';

@NgModule({
  declarations: [EventsComponent],
  imports: [BrowserModule],
  bootstrap: [EventsComponent]
})
export class AppModule { }
