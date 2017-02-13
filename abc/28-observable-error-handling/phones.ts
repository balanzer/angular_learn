import { Component, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';

const API_URL = '/api';

@Injectable()
export class PhoneService {
  constructor(private http: Http) { }

  getPhones(url = '/phones') {
    return this.http.get(API_URL + url)
      .map((res: Response) => res.json())
      .catch(err => {
        console.error('handling error within getPhones()', err);
        const fakeData = [{ name: 'no phones could be loaded' }];
        return Observable.of(fakeData);
      });
  }

  poll1() {
    return Observable.interval(2000)
      .map(n => n % 2 ? '/phonesZZZ' : '/phones')
      .switchMap(dataUrl => this.http.get(API_URL + dataUrl))
      .map((res: Response) => res.json())
      .catch((err) => {
        console.error('handling error within poll1()', err);
        const fakeData = [{ name: 'no phones could be loaded' }];
        return Observable.of(fakeData);
      })
      .do((data: any) => {
        console.log('Data arrived', data);
      });
  }

  poll2() {
    return Observable.interval(2000)
      .map(n => n % 2 ? '/phonesZZZ' : '/phones')
      .switchMap(dataUrl => this.getPhones(dataUrl))
      .do((data: any) => {
        console.log('Data arrived', data);
      });
  }
}

@Component({
  selector: 'my-app',
  template: `
    <h3>Phones</h3>
    <ul>
      <li *ngFor="let p of phones | async">
        {{p.name}}
      </li>
    </ul>
  `,
  providers: [PhoneService]
})
export class PhonesComponent {
  phones: Observable<any[]>;

  constructor(ps: PhoneService) {
    // this.phones = ps.getPhones();
    // this.phones = ps.poll1();
    this.phones = ps.poll2();
  }
}
