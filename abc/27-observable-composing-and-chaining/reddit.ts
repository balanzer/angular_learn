import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

import { RedditImageSearch, IRedditItem } from './redditImageSearch';

@Component({
  selector: 'my-app',
  templateUrl: './reddit.html',
  providers: [RedditImageSearch]
})
export class RedditComponent {
  criteriaForm: FormGroup;
  results: Observable<IRedditItem[]>;

  constructor(ris: RedditImageSearch, fb: FormBuilder) {
    this.criteriaForm = fb.group({
      subReddit: ['aww'],
      search: ['']
    });
    const debouncedSearchTarget = this.criteriaForm.valueChanges
      .do(x => console.log('change', x))
      .debounceTime(500)
      .do(x => console.log('after debounce', x));
    this.results = debouncedSearchTarget.switchMap(
      val => ris.search(val.subReddit, val.search));
  }
}
