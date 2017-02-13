import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, Event } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
    <footer>
      <hr>
      <p>footer goes here.</p>
    </footer>
  `,
  providers: [Title]
})
export class PageComponent {
  constructor(router: Router, title: Title) {
    router.events.subscribe((event: Event) =>
      console.log('router event!', event));
  }
}
