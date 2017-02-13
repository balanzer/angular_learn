import { Component } from '@angular/core';

@Component({
  selector: 'green-card',
  template: `
    <div class="card green" style="padding: 10px">
      <h4>I am a green card</h4>
      <blue-card></blue-card>
    </div>
  `
})
export class GreenCardComponent { }
