import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { EmployeeLoader, IEmployee } from './employeeLoader';

@Component({
  selector: 'employee-list',
  templateUrl: './employeeList.html'
})
export class EmployeeListComponent {
  list$: Observable<IEmployee[]>;

  constructor(loader: EmployeeLoader) {
    this.list$ = loader.getList();
  }
}
