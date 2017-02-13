// This component lets the user turn the activity stream on and off.
// It is off by default, so that the software does not generate a long
// stream of activity in Firebase merely from being reloaded.

import { Component, OnDestroy } from '@angular/core';

import { Generator } from './activityGenerator';

@Component({
  selector: 'activity-generator',
  templateUrl: './activityPanel.html'
})
export class ActivityPanel implements OnDestroy {
  n: number = 0;
  handle: any;
  enabled: boolean;

  constructor() {
    let g = new Generator();
    this.handle = setInterval(() => {
      if (this.enabled) {
        g.next();
        this.n++;
      }
    }, 100);
  }

  ngOnDestroy() {
    clearInterval(this.handle);
  }
}
