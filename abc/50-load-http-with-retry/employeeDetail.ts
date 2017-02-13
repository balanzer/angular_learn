import { Component, Input } from '@angular/core';

import { IEmployee } from './employee';

@Component({
  selector: 'employee-detail',
  templateUrl: './employeeDetail.html'
})
export class EmployeeDetailComponent {
  @Input() employee: IEmployee;
}
