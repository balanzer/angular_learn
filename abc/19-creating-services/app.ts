import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GreeterComponent } from './greeter';

@NgModule({
  declarations: [GreeterComponent],
  imports: [BrowserModule],
  bootstrap: [GreeterComponent]
})
export class AppModule { }
