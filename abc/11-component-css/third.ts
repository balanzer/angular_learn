import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-third',
  template: `
    <div class="card">Third Component</div>
  `,
  styleUrls: ['./third.css'],
  // encapsulation: ViewEncapsulation.None
  // encapsulation: ViewEncapsulation.Native // Look in global.css at shadow selector
})
export class ThirdComponent {

}
