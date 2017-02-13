import {FormControl, FormGroup} from '@angular/forms';

// We hope Angular exports an IValidationResult type in a future release

interface IValidationResult {
  [key: string]: any;
}

export function trivialValidator(control: FormControl): IValidationResult {
  if (control.value === '12345') {
    return undefined;
  } else {
    return {
      trivial: true
    };
  }
}

export function fiveValidator(control: FormControl): IValidationResult {
  if (control.value !== '5') {
    return {
      verifyFive: true
    };
  }
}

export function matchingPasswordValidator(group: FormGroup): IValidationResult {
  let first = group.controls['password'];
  let second = group.controls['confirmPassword'];
  if (first.value !== second.value) {
    return {
      mismatched: true
    };
  }
};

export function matchingFieldValidator(firstKey: string, secondKey: string, errorName: string) {
  return function (group: FormGroup): IValidationResult {
    let first = group.controls[firstKey];
    let second = group.controls[secondKey];
    if (first.value !== second.value) {
      return {
        [errorName]: true
      };
    }
  };
}
