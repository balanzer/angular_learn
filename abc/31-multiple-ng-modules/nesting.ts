import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h4>Example application with multiple modules</h4>
    <red-card></red-card>
    <purple-card></purple-card>
  `
})
export class NestingComponent { }
