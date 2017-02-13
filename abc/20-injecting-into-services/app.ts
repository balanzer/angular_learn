import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GreeterComponent } from './greeter';
import { GreetingCalculator } from './greetingCalculator';
import { Appender } from './appender';

@NgModule({
  declarations: [
    GreeterComponent
  ],
  providers: [
    GreetingCalculator,
    Appender
  ],
  imports: [BrowserModule],
  bootstrap: [GreeterComponent]
})
export class AppModule { }
