import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import { Welcome } from './welcome';
import { Contacts } from './contact-manager/contacts.component';
import { contactRoutes, CONTACT_ROUTED_COMPONENTS } from './contact-manager/contact.routes';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: Welcome },
  {
    path: 'contacts',
    component: Contacts,
    children: contactRoutes
  }
];

const config: ExtraOptions = {
  useHash: true,
  enableTracing: false // Turn this on to for console.logging of route events
};

export const APP_ROUTER_MODULE = RouterModule.forRoot(routes, config);
export const ROUTED_COMPONENTS = [Welcome, Contacts, ...CONTACT_ROUTED_COMPONENTS];
