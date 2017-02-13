import { Injectable } from '@angular/core';
import { Appender } from './appender';

@Injectable()
export class GreetingCalculator {

  constructor(private appender: Appender) { }

  greeting() {
    return this.appender.appendStrings(['Hello,', 'Glorious', 'World']);
  }
}
