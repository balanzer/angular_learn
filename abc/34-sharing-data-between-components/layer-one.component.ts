import { Component } from '@angular/core';

@Component({
  selector: 'layer-one',
  template: `
    <div class='card'>
      <div class='card-content'>
        <div class='card-title'>Layer 1 Component: </div>
        <layer-two></layer-two>
      </div>
    </div>`
})
export class LayerOne { }
