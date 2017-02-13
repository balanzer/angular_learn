import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  template: `
    <div class="card">First Component</div>
    <style>
      .card {
        border: blue 2px solid;
      }
    </style>
  `
})
export class FirstComponent {

}
