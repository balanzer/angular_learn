import { Injectable } from '@angular/core';

// This is the simplest way to implement a shared data service, but it doesn't
// provide a good way to manage or react to changes in the data.

// Reminder from a few steps ago - @Injectable() is not technically required
// here, but is recommended by the style guide.

@Injectable()
export class SharedData {
  userInput = '';
}
