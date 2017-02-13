import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/share';

import { EmployeeLoader } from './employeeLoader';
import { IEmployee } from './employee';
import { StatusStrings, ILoadResultStatus, loadWithRetry } from './loader/loadWithRetry';
import { faulty } from './loader/faulty';

@Component({
  selector: 'my-app',
  templateUrl: './page.html',
  providers: [EmployeeLoader]
})
export class PageComponent {
  private selectedEmployeeId = new Subject<number>();
  private employees: Observable<IEmployee[]>;
  private selectedEmployee: Observable<IEmployee>;
  private status: Observable<string>;
  private showEmployeeDetails: Observable<boolean>;

  constructor(employeeLoader: EmployeeLoader) {
    this.employees = employeeLoader.getList();

    const loadResults = loadWithRetry(
      this.selectedEmployeeId,
      id => employeeLoader.getDetails(id)
        .let(faulty<IEmployee>())   // add this to simulate bad connection
    ).share();

    this.status = loadResults
      .do(result => console.log('RECEIVED', result, 'at', new Date()))
      .map(result => StatusStrings[result.status]);

    this.showEmployeeDetails = loadResults
      .map(result => result.status === ILoadResultStatus.Success);

    this.selectedEmployee = loadResults
      .filter(result => result.status === ILoadResultStatus.Success)
      .map(result => result.data);
  }
}
