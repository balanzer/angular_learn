import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { EmployeeListComponent }  from './employeeList';
import { EmployeeDetailComponent }  from './employeeDetailView';
import { EmployeeLoader } from './employeeLoader';

@NgModule({
  declarations: [EmployeeListComponent, EmployeeDetailComponent],
  imports: [BrowserModule, ReactiveFormsModule, HttpModule],
  bootstrap: [EmployeeListComponent],
  providers: [EmployeeLoader]
})
export class AppModule { }
