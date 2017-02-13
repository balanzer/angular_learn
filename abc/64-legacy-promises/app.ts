import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { StarshipListComponent } from './starshipList';

@NgModule({
  declarations: [StarshipListComponent],
  imports: [BrowserModule, HttpModule],
  bootstrap: [StarshipListComponent]
})
export class AppModule { }
