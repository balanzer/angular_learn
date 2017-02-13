import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './weatherScreen.html'
})
export class WeatherScreen {
  cities: string[] = ['sanfrancisco', 'austin', 'boston']
}
