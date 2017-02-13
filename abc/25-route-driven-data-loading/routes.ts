import { RouterModule, Routes } from '@angular/router';

import { EmployeeListComponent } from './employeeList';
import { EmployeeDetailComponent } from './employeeDetail';

const appRoutes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employee/:employeeId', component: EmployeeDetailComponent }
];

export const ROUTER_MODULE = RouterModule.forRoot(appRoutes, { useHash: true });
