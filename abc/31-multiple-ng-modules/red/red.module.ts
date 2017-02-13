import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

import { RedCardComponent } from './red';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    RedCardComponent
  ],
  exports: [RedCardComponent],
  imports: [SharedModule, CommonModule]
})
export class RedModule { }
