import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/observable/forkJoin';

import { jsonRequestHeaders } from './httpUtils';

@Injectable()
export class StarshipApi {
  constructor(private http: Http) {
  }

  starships(): Observable<any[]> {
    const url = 'http://swapi.co/api/starships/';
    return this.http.get(url, jsonRequestHeaders)
      // parse response as JSON
      .map(response => response.json())
      // extract results field
      .map(shipWrapper => shipWrapper.results)
      .flatMap(ships => {
        const shipObservables = ships.map(ship => {
          console.log('GETting film data for ' + ship.name);
          return this.http.get(ship.films[0], jsonRequestHeaders)
            .map(response => response.json())
            .map((film) => {
              ship.filmName = film.title;
              return ship;
            });
        });

        // forkJoin is somewhat like Promise.all();
        // array of Observables -> Observable of an array
        return Observable.forkJoin(shipObservables);
      });
  }
}
