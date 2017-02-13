import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { LocationComponent }  from './location';

@NgModule({
  declarations: [LocationComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  bootstrap: [LocationComponent]
})
export class AppModule { }
