import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PeopleComponent } from './people.component';

const routes: Routes = [
  { path: '', component: PeopleComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PeopleComponent]
})
export class PeopleModule { }
