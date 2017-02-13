import { Component } from '@angular/core';

@Component({
  selector: 'blue-card',
  template: `
    <div class="card blue">
      <h4>I am a blue card ({{x}})</h4>
    </div>
  `
})
export class BlueCardComponent {
  x = Math.random();
}
