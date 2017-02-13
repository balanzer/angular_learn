import { Component } from '@angular/core';

@Component({
  selector: 'purple-card',
  template: `
    <div class="card purple" style="padding: 10px;">
      <h4>I am a purple card</h4>
      <div style="display: flex">
        <green-card></green-card>
        <blue-card></blue-card>
      </div>
    </div>
  `
})
export class PurpleCardComponent { }
