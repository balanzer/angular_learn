import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

// Do NOT import these:
// import { CarsComponent } from './cars/cars.component';
// import { PeopleComponent } from './people/people.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'cars', loadChildren: 'app/cars/cars.module#CarsModule' },
  { path: 'people', loadChildren: 'app/people/people.module#PeopleModule' }
];

export const ROUTER_MODULE = RouterModule.forRoot(appRoutes, { useHash: true });
