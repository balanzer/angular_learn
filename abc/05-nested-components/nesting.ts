import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h4>Example application showing component nesting</h4>
    <blue-card></blue-card>
    <green-card></green-card>
  `
})
export class NestingComponent { }
