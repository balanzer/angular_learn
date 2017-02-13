import { RouterModule, Routes } from '@angular/router';

import { Welcome } from './welcome';
import { Companies } from './companies.component';
import { CompanyListRetriever } from './data';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: Welcome },
  {
    path: 'companies',
    component: Companies,
    resolve: { companies: CompanyListRetriever }
  }
];

export let APP_ROUTER_MODULE = RouterModule.forRoot(routes, { useHash: true });

// As of 2.0.0, this was a reasonable way to provide services needed for resolve,
// but best practices have yet to emerge.
APP_ROUTER_MODULE.providers.push(CompanyListRetriever);

export const ROUTED_COMPONENTS = [Welcome, Companies];
