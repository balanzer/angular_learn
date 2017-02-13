import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PageComponent } from './page';
import { EmployeeComponent } from './employee';
import { EmployeeListComponent } from './employee-list';
import { EmployeeGridComponent } from './employee-grid';

@NgModule({
  declarations: [PageComponent, EmployeeComponent, EmployeeListComponent, EmployeeGridComponent],
  imports: [BrowserModule],
  bootstrap: [PageComponent]
})
export class AppModule { }
