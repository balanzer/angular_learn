import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NestingComponent } from './nesting';
import { BlueCardComponent } from './blue';
import { GreenCardComponent } from './green';

@NgModule({
  declarations: [
    NestingComponent,
    BlueCardComponent,
    GreenCardComponent
  ],
  imports: [BrowserModule],
  bootstrap: [NestingComponent]
})
export class AppModule { }
