import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TitleDisplayComponent }  from './titleDisplay';

@NgModule({
  declarations: [TitleDisplayComponent],
  imports: [BrowserModule],
  bootstrap: [TitleDisplayComponent]
})
export class AppModule { }
