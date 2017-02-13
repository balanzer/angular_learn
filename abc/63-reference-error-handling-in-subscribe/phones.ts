import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';

const API_URL = '/api';

@Component({
  selector: 'my-app',
  template: `
    <h3>Phones</h3>
    <ul>
      <li *ngFor="let p of phones">
        {{p.name}}
      </li>
    </ul>
  `
})
export class PhonesComponent {
  phones: any[];

  constructor(http: Http) {
    this.getAndSubscribe(http);
  }

  getAndSubscribe(http: Http) {
    // Try changing this URL, for example add "ZZZ" at the end
    const dataUrl = API_URL + '/phones';
    http.get(dataUrl)
      .map((res: Response) => res.json())
      .retry(3)  // Try commenting this out.
      .catch((err) => {
        console.error('handling error', err);
        const fakeData = [{ name: 'no phones could be loaded' }];
        return Observable.of(fakeData);
      })
      .subscribe((data: any) => {
        console.log('Data arrived', data);
        this.phones = data;
      }, (err: any) => console.log('handling additional errors'));
  }
}
