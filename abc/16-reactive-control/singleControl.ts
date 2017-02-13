import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './singleControl.html'
})
export class SingleControlComponent {
  myFormControl: FormControl;

  constructor() {
    this.myFormControl = new FormControl('', Validators.required);
  }

  setValue() {
    this.myFormControl.setValue('Set from code');
  }
}
