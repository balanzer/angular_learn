import { Injectable } from '@angular/core';

// This class is the "last in the chain" of things being injected, so
// technically (and strangely, given the naming) it does not require the
// @Injectable() decorator. However, the style guide recommends, and we recommend,
// that you always have this decorator to all of your services that you might
// inject or in which you might need injection.

// Common mistake: omitting the "()".

@Injectable()
export class Appender {
  appendStrings(list: string[]) {
    return list.join(' ');
  }
}
