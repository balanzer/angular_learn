import { Component, Input } from '@angular/core';

import { IEmployee } from './employee';

@Component({
  selector: 'employee-detail-view',
  templateUrl: './employeeDetailView.html'
})
export class EmployeeDetailComponent {
  @Input() employee: IEmployee;
}
