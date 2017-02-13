import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PipeDemoComponent } from './pipeDemo';
import { ToCapsPipe, ContainsXPipe, CheckmarkPipe, FieldRangePipe } from './pipes';

@NgModule({
  declarations: [
    PipeDemoComponent,
    ToCapsPipe,
    ContainsXPipe,
    CheckmarkPipe,
    FieldRangePipe
  ],
  imports: [BrowserModule],
  bootstrap: [PipeDemoComponent]
})
export class AppModule { }
