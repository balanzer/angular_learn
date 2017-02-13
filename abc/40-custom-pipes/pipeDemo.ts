import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './pipeDemo.html'
})
export class PipeDemoComponent {
  myDate = new Date();
  someNumber: number = 12;
  items: string[] = ['abc', '123', 'xyzabcdef', 'abc123', '8756'];
  cars = [
    { brand: 'Toyota', year: 2014, color: 'Red' },
    { brand: 'Toyota', year: 2011, color: 'Green' },
    { brand: 'Ford', year: 2005, color: 'Black' },
    { brand: 'Ford', year: 2009, color: 'White' },
    { brand: 'Ford', year: 2013, color: 'Yellow' },
  ];
}
