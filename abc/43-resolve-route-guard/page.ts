import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
    <footer>
      <hr>
      <p>footer goes here.</p>
    </footer>
  `
})
export class PageComponent { }
