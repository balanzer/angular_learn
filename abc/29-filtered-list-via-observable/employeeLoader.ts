import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { IEmployee } from './employee';

const API_URL = '/api';

@Injectable()
export class EmployeeLoader {
  constructor(private http: Http) { }

  getList(): Observable<IEmployee[]> {
    return this.http.get(API_URL + '/employees')
      .map(unwrapData);
  }

  getDetails(employeeId: number): Observable<IEmployee> {
    return this.http.get(`${API_URL}/employees/${employeeId}`)
      .map(unwrapData);
  }
}

function unwrapData(res: Response) {
  return res.json();
}