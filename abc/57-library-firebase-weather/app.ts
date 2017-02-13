import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WeatherScreen } from './weatherScreen';
import { WeatherPanel } from './weatherPanel';
import { SecondsToDatePipe } from './secondsToDatePipe';

@NgModule({
  declarations: [WeatherScreen, WeatherPanel, SecondsToDatePipe],
  imports: [BrowserModule],
  bootstrap: [WeatherScreen]
})
export class AppModule { }
