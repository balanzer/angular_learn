import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideStore } from '@ngrx/store';

import { ExampleComponent } from './example';
import { CounterDisplay } from './counter-display';
import { berryCounter, appleCounter } from './state';

@NgModule({
  declarations: [
    ExampleComponent,
    CounterDisplay
  ],
  imports: [BrowserModule, FormsModule],
  bootstrap: [ExampleComponent],
  providers: [provideStore({ berryCounter, appleCounter })]
})
export class AppModule { }
