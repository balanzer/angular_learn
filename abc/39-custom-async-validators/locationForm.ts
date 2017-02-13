import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { simpleAsyncValidator, westernZipValidatorFactory, slowAsyncValidator } from './asyncValidators';

@Component({
  selector: 'my-app',
  templateUrl: 'locationForm.html'
})
export class LocationFormComponent {
  inputFormGroup: FormGroup;

  constructor(http: Http, fb: FormBuilder) {
    this.inputFormGroup = fb.group({
      input: ['', Validators.nullValidator, simpleAsyncValidator],
      zip: [
        '',
        [
          Validators.minLength(5),
          Validators.maxLength(5),
          Validators.required
        ],
        [
          slowAsyncValidator,
          westernZipValidatorFactory(http)
        ]
      ]
    });
  }

  logTheForm(): void {
    console.log('form: ', this.inputFormGroup);
  }
}
