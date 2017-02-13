import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BuiltInComponent } from './builtin';

// BrowserModule includes a kit of "built in" browser-ready features.
// It avoids the need to import specific features: *ngIf, *ngFor

@NgModule({
  declarations: [BuiltInComponent],
  imports: [BrowserModule],
  bootstrap: [BuiltInComponent]
})
export class AppModule { }
