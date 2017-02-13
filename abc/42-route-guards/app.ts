import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { AreYouSureGuardService } from './are-you-sure-guard.service';

import { PageComponent } from './page';
import { HomeComponent } from './home';
import { NameComponent } from './name';
import { AdminComponent } from './admin';
import { ForbiddenComponent } from './forbidden';
import { BigFormComponent } from './big-form';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'hello', component: NameComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'bigform',
    component: BigFormComponent,
    canDeactivate: [ AreYouSureGuardService ]
  }
];

@NgModule({
  declarations: [
    PageComponent,
    HomeComponent,
    NameComponent,
    AdminComponent,
    ForbiddenComponent,
    BigFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [
    AuthService,
    AuthGuardService,
    AreYouSureGuardService
  ],
  bootstrap: [PageComponent]
})
export class AppModule { }
