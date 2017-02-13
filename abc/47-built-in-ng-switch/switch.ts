import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './switch.html'
})
export class SwitchComponent {
  n: number = 0;
  food: string = 'apple';

  increment(event: MouseEvent) {
    this.n++;
  }

  results() {
    if (this.n > 1 && this.n < 5) {
      return this.n;
    }
  }
}
