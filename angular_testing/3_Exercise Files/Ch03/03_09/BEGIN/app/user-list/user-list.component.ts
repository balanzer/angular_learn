import { Component, OnInit } from '@angular/core';
import { XyzWebStorageService } from '../shared/web-storage.service';

import { XyzFilterByService } from '../shared/filter-by.service';
import { XyzUserListService } from './user-list.service';

@Component({
  selector: 'xyz-user-list',
  providers: [ XyzFilterByService, XyzUserListService, XyzWebStorageService ],
  templateUrl: 'app/user-list/user-list.component.html'
})
export class XyzUserListComponent implements OnInit {
  filter: string;
  users: User[];
  settings: {
    _id: string;
    _rev: string;
    rev: string;
    filter: string;
  }

  constructor(
    private xyzUserListService: XyzUserListService,
    private xyzFilterByService: XyzFilterByService,
    private xyzWebStorageService: XyzWebStorageService
  ) { }

  ngOnInit() {
    this.xyzWebStorageService.getRemote().subscribe(response => {
      this.settings = response.json();
      // console.log(this.settings);
      this.filter = this.settings.filter;

      this.xyzUserListService.get().then(users => {
        this.users = this.xyzFilterByService.get({ data: users, filter: this.filter });
      });
    })

  }

  onFilter(filter) {
    this.filter = filter;
    this.xyzUserListService.get().then(users => {
      this.users = this.xyzFilterByService.get({ data: users, filter: filter });
    })
  }

  onClear() {
    this.xyzUserListService.get().then(users => this.users = users);
    this.filter = '';
  }
}
