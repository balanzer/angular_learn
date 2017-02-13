// This component displays a single entry from Firebase on the screen.

import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// Typescript error is a consequence of a tooling issue.
import Firebase from 'firebase';

import { fbName } from './fbConfig';
import { observableFirebaseObject } from 'angular2-firebase';

@Component({
  selector: 'one-person',
  template: `
  <div>
    <b>Person {{id}}:</b>
    <p>{{ person$ | async | json }}</p>
    <p>{{ (person$ | async)?.name}}</p>
  </div>
  `
})
export class OnePerson implements OnInit {
  @Input() id: string;
  person$: Observable<any>;

  ngOnInit() {
    // This can't be called in the constructor because the properties
    // from the parent template are not yet populated.
    this.person$ = observableFirebaseObject(new Firebase(fbName)
      .child('stuff')
      .child('cat1')
      .child(this.id));
  }
}
