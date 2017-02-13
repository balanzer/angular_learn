import { Component } from '@angular/core';
import { EmployeeComponent } from './employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.html'
})
export class EmployeeListComponent extends EmployeeComponent {
  heading = 'Employee List';
}
