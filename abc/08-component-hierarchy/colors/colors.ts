import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h4>Deeper example of component nesting</h4>
    <red-card></red-card>
    <green-card></green-card>
  `
})
export class ColorsComponent { }
