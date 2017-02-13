import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { observableFirebaseArray } from 'angular2-firebase';

import 'rxjs/add/operator/debounceTime';

// Typescript error is a consequence of a tooling issue.
import Firebase from 'firebase';

import { fbName } from './fbConfig';

@Component({
  selector: 'person-list',
  template: `
  <h1>Person List</h1>
  <ul>
    <li *ngFor="let p of people | async">
    {{p["$$fbKey"]}} / {{p.name}} / {{p.score}}
    </li>
  </ul>
  `
})
export class PersonList {
  people: Observable<any[]>;

  constructor() {
    this.people = observableFirebaseArray(
      new Firebase(fbName)
        .child('stuff')
        .child('cat1')
        .orderByChild('name')
        .limitToFirst(6)
    ).debounceTime(100);
  }
}
