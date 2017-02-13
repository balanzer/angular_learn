import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StylesComponent } from './styles';
import { FirstComponent } from './first';
import { SecondComponent } from './second';
import { ThirdComponent } from './third';

@NgModule({
  declarations: [
    StylesComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent
  ],
  imports: [BrowserModule],
  bootstrap: [StylesComponent]
})
export class AppModule { }
