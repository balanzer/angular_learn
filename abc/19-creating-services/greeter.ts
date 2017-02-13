import { Component } from '@angular/core';

import { GreetingCalculator } from './greetingCalculator';

@Component({
  selector: 'my-app',
  templateUrl: './greeter.html',
  providers: [GreetingCalculator]
})
export class GreeterComponent {
  greeting: string;

  constructor(gc: GreetingCalculator) {
    this.greeting = gc.greeting();
  }
}
