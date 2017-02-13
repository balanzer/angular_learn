import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent }  from './login';

@NgModule({
  declarations: [LoginComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  bootstrap: [LoginComponent]
})
export class AppModule { }
