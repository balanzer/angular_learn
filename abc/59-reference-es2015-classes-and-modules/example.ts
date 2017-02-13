// This file is named main.ts for compatibility with our TypeScript
// based class kit; in a real application using only JavaScript ES2015
// features but not TypeScript, it would be named main.js.

import { Helper } from './utils';

class Main {

  constructor() {
    this.h = new Helper();
  }

  run() {
    console.log(this.h.helpMe());

    const someString = `This is a
    multi line
    string`;


    if (true) {
      var isDone = false;
      let notAvailableOutside = true;
    }

    console.log(isDone);

  }
}

new Main().run();
