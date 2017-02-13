import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PageComponent } from './page';
import { NavBar } from './navbar';
import { APP_ROUTER_MODULE, ROUTED_COMPONENTS } from './routes';

@NgModule({
  declarations: [
    PageComponent,
    NavBar,
    ...ROUTED_COMPONENTS
  ],
  imports: [
    BrowserModule,
    APP_ROUTER_MODULE
  ],
  bootstrap: [PageComponent]
})
export class AppModule { }
