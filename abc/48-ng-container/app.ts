import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { GroupingComponent } from './grouping';

@NgModule({
  declarations: [GroupingComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  bootstrap: [GroupingComponent]
})
export class AppModule { }
