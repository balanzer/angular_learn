import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AnakinComponent }  from './anakin';

@NgModule({
  declarations: [AnakinComponent],
  imports: [
    BrowserModule,
    HttpModule
  ],
  bootstrap: [AnakinComponent]
})
export class AppModule { }
