import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

const API_URL = '/api';

@Injectable()
export class Workers {
  constructor(private http: Http) { }

  workerList() {
    const delayUntil: Date = new Date(Date.now() + 1600);
    return this.http.get(API_URL + '/employees')
      .map((res: Response) => res.json())
      .delay(delayUntil);
  }
}
