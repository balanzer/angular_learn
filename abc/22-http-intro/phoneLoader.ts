import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const API_URL = '/api';

// Or, connect directly to the API server (not on C9)
// const API_URL = 'http://localhost:8085';

@Injectable()
export class PhoneLoader {
  constructor(private http: Http) { }

  load() {
    return this.http.get(API_URL + '/phones');
  }
}
