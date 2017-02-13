import { Component, Input } from '@angular/core';

import { IEmployee } from './employeeLoader';

@Component({
  selector: 'employee-display',
  templateUrl: './employeeDisplay.html'
})
export class EmployeeDisplayComponent {
  @Input() employee: IEmployee;
}
