import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { PhonesComponent }  from './phones';

@NgModule({
  declarations: [PhonesComponent],
  imports: [BrowserModule, HttpModule],
  bootstrap: [PhonesComponent]
})
export class AppModule { }
