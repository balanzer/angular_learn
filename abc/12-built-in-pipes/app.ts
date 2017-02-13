import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PipeDemoComponent } from './pipeDemo';

@NgModule({
  declarations: [
    PipeDemoComponent
  ],
  imports: [BrowserModule],
  bootstrap: [PipeDemoComponent]
})
export class AppModule { }
