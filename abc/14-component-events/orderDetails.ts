import { Component, Input } from '@angular/core';

import { IOrder } from './apiTypes';

@Component({
  selector: 'order-details',
  templateUrl: 'orderDetails.html',
})
export class OrderDetails {
  @Input() selectedOrderDetails: IOrder;
}
