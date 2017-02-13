import { Component } from '@angular/core';

@Component({
  selector: 'red-card',
  template: `
    <div class="card red" style="padding: 10px;">
      <h4>I am a red card</h4>
      <div style="display: flex">
        <green-card></green-card>
        <green-card></green-card>
        <blue-card></blue-card>
      </div>
    </div>
  `
})
export class RedCardComponent { }
