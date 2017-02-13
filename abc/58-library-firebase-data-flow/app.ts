import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ActivityPanel } from './activityPanel';
import { PersonList } from './personList';
import { OnePerson } from './onePerson';
import { ExampleComponent } from './example';

@NgModule({
  declarations: [ExampleComponent, ActivityPanel, PersonList, OnePerson],
  imports: [BrowserModule],
  bootstrap: [ExampleComponent]
})
export class AppModule { }
