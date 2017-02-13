import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

// This code uses our third-party Angular 2 / Firebase adapter:
// https://github.com/OasisDigital/angular2-firebase
// ... because it was written before the official library for that purpose.

import { observableFirebaseObject, observableFirebaseArray } from 'angular2-firebase';

// Typescript error is a consequence of a tooling issue.
import Firebase from 'firebase';

@Component({
  selector: 'weather-panel',
  templateUrl: './weatherPanel.html'
})
export class WeatherPanel implements OnInit, OnDestroy {
  @Input() city: string;

  hourly$: Observable<any[]>;
  currently: any;

  private subscription: Subscription;

  ngOnInit() {
    //  This can't be called in the constructor because the properties
    // from the parent template are not yet populated.

    const weatherURL = 'https://publicdata-weather.firebaseio.com/';
    let city = new Firebase(weatherURL).child(this.city);

    // More automatic way to move data to the template:
    this.hourly$ = observableFirebaseArray(
      city.child('hourly/data').limitToLast(10));

    // Less automatic way to move data to the templat:
    this.subscription = observableFirebaseObject(city.child('currently'))
      .subscribe(c => this.currently = c);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
