import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/share';

import { EmployeeLoader, IEmployee } from './employeeLoader';

@Component({
  selector: 'employee-detail',
  templateUrl: './employeeDetail.html'
})
export class EmployeeDetailComponent {
  employee$: Observable<IEmployee>;

  constructor(route: ActivatedRoute, loader: EmployeeLoader) {
    this.employee$ = route.params
      .map(params => params['employeeId'])
      .switchMap(id => loader.getDetails(id)).share();
  }
}
