import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { StarshipApi } from './starshipApi';

// Import all Rx operators at once;
// Convenient for development, not optimal for production.
import 'rxjs/Rx';

@Component({
  selector: 'my-app',
  providers: [StarshipApi],
  templateUrl: 'starshipList.html'
})
export class StarshipListComponent {
  starships$: Observable<any[]>;

  constructor(api: StarshipApi) {
    this.starships$ = api.starships();
  }
}
