import { Routes } from '@angular/router';

import { People } from './people.component';
import { Companies } from './companies.component';

export const contactRoutes: Routes = [
  { path: '', redirectTo: 'people', pathMatch: 'full' },
  { path: 'people', component: People },
  { path: 'companies', component: Companies }
];

export const CONTACT_ROUTED_COMPONENTS = [People, Companies];
