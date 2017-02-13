import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

import { BlueCardComponent } from './blue';
import { GreenCardComponent } from './green';

@NgModule({
  declarations: [
    BlueCardComponent,
    GreenCardComponent
  ],
  exports: [
    BlueCardComponent,
    GreenCardComponent
  ],
  imports: [CommonModule]
})
export class SharedModule { }
