import { Component } from '@angular/core';

import {CarStateService} from '../car-state.service';

@Component({
  selector: 'car-order',
  moduleId: __moduleName,
  templateUrl: './car-order.component.html',
  styleUrls: ['./car-order.component.css'],
  providers: [CarStateService]
})
export class CarOrderComponent { }
