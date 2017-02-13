import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ManagerComponent } from './manager';
import { OrderList } from './orderList';
import { OrderDetails } from './orderDetails';
import { OrderHeader, OrderItems } from './headerAndItems';

@NgModule({
  declarations: [
    ManagerComponent,
    OrderList,
    OrderDetails,
    OrderHeader,
    OrderItems
  ],
  imports: [BrowserModule],
  bootstrap: [ManagerComponent]
})
export class AppModule { }
