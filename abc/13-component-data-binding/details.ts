import { Component, Input } from '@angular/core';

import { IOrder } from './apiTypes';

@Component({
  selector: 'order-details',
  templateUrl: './details.html'
})
export class OrderDetails {
  @Input('selectedOrderDetails') sod: IOrder;
}
