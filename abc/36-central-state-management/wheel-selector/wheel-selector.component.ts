import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { CarStateService, WHEEL_TYPES } from '../car-state.service';

interface ITypeQty {
  wt: string;
  q: number;
}

@Component({
  selector: 'wheel-selector',
  moduleId: __moduleName,
  templateUrl: './wheel-selector.component.html'
})
export class WheelSelectorComponent {

  typesAndQtys$: Observable<ITypeQty[]>;

  constructor(private carStateService: CarStateService) {
    // If you need to combine synchronous and asynchronous data
    // in the template, do it in the typescript
    this.typesAndQtys$ = this.carStateService.state$.map(carState =>
      carState.wheelQtys.map((q, index) => ({ wt: WHEEL_TYPES[index], q })));
  }

  more(i: number) {
    this.carStateService.changeWheelQty(i, 1);
  }

  less(i: number) {
    this.carStateService.changeWheelQty(i, -1);
  }

}
