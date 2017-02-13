import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { CarStateService } from '../car-state.service';

@Component({
  selector: 'validity-display',
  moduleId: __moduleName,
  templateUrl: './validity-display.component.html',
  styleUrls: ['./validity-display.component.css']
})
export class ValidityDisplayComponent {

  ok$: Observable<boolean>;
  message$: Observable<string>;

  constructor(carStateService: CarStateService) {
    this.ok$ = carStateService.state$.map(
      carState => carState.ok
    );
    this.message$ = carStateService.state$.map(
      carState => carState.message ? carState.message : 'ok!'
    );
  }

}
