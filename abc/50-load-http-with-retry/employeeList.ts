import { Component, Input, Output, EventEmitter } from '@angular/core';

import { IEmployee } from './employee';

@Component({
  selector: 'employee-list',
  templateUrl: './employeeList.html'
})
export class EmployeeListComponent {
  @Input() employees: IEmployee[];
  @Output() selectedEmployee = new EventEmitter<number>();
}
