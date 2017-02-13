import { Helper } from './utils';

class Main {
  private h: Helper;

  constructor() {
    this.h = new Helper();
  }

  run(): number {
    console.log(this.h.helpMe());
    console.log(this.h.pickColor());
    return 3;
  }
}

new Main().run();

function OldSchoolClass() {
  this.customValue = 5;
}

let instance = new OldSchoolClass();

console.log(instance.customValue);
