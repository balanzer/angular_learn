import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.html'
})
export class NavBar {
  // Navbars sometimes need access to the Router instance
  // router: Router;
  // this._router.navigate( ['Detail', { id: some.id }] );

  location: Location;

  constructor(location: Location) {
    this.location = location;
  }

  getLinkStyle(path: any) {
    return this.location.path() === path;
  }
}
