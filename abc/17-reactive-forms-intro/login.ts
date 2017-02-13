import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './login.html'
})
export class LoginComponent {
  loginFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginFormGroup = this.fb.group({
      login: ['', Validators.required],
      password: ['', [Validators.minLength(3), Validators.required]],
      optional: ['angular bootcamp']
    });
  }

  onLogin(): void {
    console.log('Form Submitted', this.loginFormGroup.value);
  }

  logTheForm(): void {
    console.log('form: ', this.loginFormGroup);
  }
}
