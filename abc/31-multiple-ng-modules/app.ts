import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RedModule } from './red/red.module';
import { PurpleModule } from './purple/purple.module';
import { NestingComponent }  from './nesting';

@NgModule({
  declarations: [
    NestingComponent
  ],
  imports: [RedModule, PurpleModule, BrowserModule],
  bootstrap: [NestingComponent]
})
export class AppModule { }
