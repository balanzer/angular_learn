import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { PageComponent } from './page';
import { EmployeeListComponent } from './employeeList';
import { EmployeeDetailComponent } from './employeeDetail';
import { ROUTER_MODULE } from './routes';

@NgModule({
  declarations: [
    PageComponent,
    EmployeeListComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ROUTER_MODULE
  ],
  bootstrap: [PageComponent]
})
export class AppModule { }
