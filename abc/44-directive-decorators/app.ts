import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DirectivesComponent } from './directives';
import { Blink } from './blink';
import { Bounce } from './bounce';
import { Drag } from './drag';

@NgModule({
  declarations: [
    DirectivesComponent,
    Blink,
    Bounce,
    Drag
  ],
  imports: [BrowserModule],
  bootstrap: [DirectivesComponent]
})
export class AppModule { }
