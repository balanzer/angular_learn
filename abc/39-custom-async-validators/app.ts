import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { LocationFormComponent }  from './locationForm';

@NgModule({
  declarations: [LocationFormComponent],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule
  ],
  bootstrap: [LocationFormComponent]
})
export class AppModule { }
