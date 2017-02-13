import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

import { PurpleCardComponent } from './purple';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PurpleCardComponent
  ],
  exports: [PurpleCardComponent],         // export COMPONENTS, directives, pipes
  imports: [SharedModule, CommonModule]   // import MODULES
})
export class PurpleModule { }
