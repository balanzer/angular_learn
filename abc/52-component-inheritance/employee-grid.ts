import { Component } from '@angular/core';
import { EmployeeComponent } from './employee';

@Component({
  selector: 'app-employee-grid',
  templateUrl: './employee-grid.html'
})
export class EmployeeGridComponent extends EmployeeComponent { }
