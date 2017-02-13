// This example shows the particular variation of routing syntax
// needed to work with the CLI lazy loading support. The syntax can be
// slightly different if you are using a different tooling approach.

import { Routes, RouterModule, ExtraOptions, PreloadAllModules } from '@angular/router';

// Note there is no import of the NameComponent or reference to './nameComponent'.

import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'hello', loadChildren: './name.module#NameModule' }
];

const config: ExtraOptions = {
  useHash: true,
  enableTracing: false // Turn this on to for console.logging of route events
  // ,preloadingStrategy: PreloadAllModules
};

export const APP_ROUTER_MODULE = RouterModule.forRoot(routes, config);
export const ROUTED_COMPONENTS = [HomeComponent];

// Behind the scenes, Angular converts the above syntax to something like
// this:

// loadChildren: () =>
// System.import('./name.module').then(({NameModule}) => NameModule)
