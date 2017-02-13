import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {CarStateService} from '../car-state.service';

@Component({
  selector: 'axle-selector',
  moduleId: __moduleName,
  templateUrl: './axle-selector.component.html'
})
export class AxleSelectorComponent {

  n$: Observable<number>;

  constructor(private carStateService: CarStateService) {
    this.n$ = this.carStateService.state$.map(carState => carState.nAxles);
  }

  more() {
    this.carStateService.changeAxles(1);
  }

  less() {
    this.carStateService.changeAxles(-1);
  }
}
