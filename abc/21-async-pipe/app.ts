import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { ShipsComponent }  from './ships';

@NgModule({
  declarations: [ShipsComponent],
  imports: [BrowserModule, HttpModule],
  bootstrap: [ShipsComponent]
})
export class AppModule { }
