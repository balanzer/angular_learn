import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from './page';
import { HomeComponent } from './home';
import { NameComponent } from './name';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'hello/:who', component: NameComponent }
];

@NgModule({
  declarations: [
    PageComponent,
    HomeComponent,
    NameComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  bootstrap: [PageComponent]
})
export class AppModule { }
