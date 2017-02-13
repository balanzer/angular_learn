import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ManagerComponent } from './manager';
import { OrderList } from './list';
import { OrderDetails } from './details';
import { OrderHeader } from './header';
import { OrderItems } from './items';

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
