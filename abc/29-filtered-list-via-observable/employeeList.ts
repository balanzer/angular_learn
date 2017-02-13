import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as _ from 'lodash';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';

import { EmployeeLoader } from './employeeLoader';
import { IEmployee } from './employee';

@Component({
  selector: 'my-app',
  templateUrl: './employeeList.html'
})
export class EmployeeListComponent {
  queryGroup: FormGroup;
  list: Observable<IEmployee[]>;
  selectedId = new Subject<number>();
  selected: Observable<IEmployee>;

  constructor(loader: EmployeeLoader, fb: FormBuilder) {
    this.queryGroup = fb.group({
      nameFilter: [''],
      sort: ['last_name']
    });
    const queryValues = this.queryGroup.valueChanges
      .startWith(this.queryGroup.value);
    this.list = Observable.combineLatest(
      loader.getList(),
      queryValues,
      filterAndSortEmployees
    );

    this.selected = this.selectedId
      .switchMap(id => loader.getDetails(id));

    // Show that order is always respected
    // this.selected = this.selectedId
    //   .do(id => console.log('requesting', id))
    //   .switchMap(id => loader.getDetails(id)
    //     .delay(3000 * Math.random())
    //   .do(emp => console.log('arrived', emp.id)));
  }
}

function filterAndSortEmployees(employeeList: IEmployee[], query: any) {
  const nameSearch = query.nameFilter.toLowerCase();
  const filteredList = employeeList.filter(employee =>
    (employee.first_name + ' ' + employee.last_name)
      .toLowerCase().includes(nameSearch));
  return _.sortBy(filteredList, query.sort);
}
