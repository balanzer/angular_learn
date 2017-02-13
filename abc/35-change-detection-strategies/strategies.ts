import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { ItemDataService } from './item-data/item-data-service';

@Component({
  selector: 'my-app',
  providers: [ItemDataService],
  templateUrl: './strategies.html'
})
export class StrategiesComponent {
  configFormGroup: FormGroup;

  constructor(private ids: ItemDataService, fb: FormBuilder) {
    this.configFormGroup = fb.group({
      data: ['mutable'],
      strategy: ['default']
    });
  }
}
