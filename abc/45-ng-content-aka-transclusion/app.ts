import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, WrapperComponent } from './wrapper';

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
