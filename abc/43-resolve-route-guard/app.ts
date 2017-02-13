import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { NavBar } from './nav.component';
import { PageComponent } from './page';
import { APP_ROUTER_MODULE, ROUTED_COMPONENTS } from './routes';

@NgModule({
  declarations: [
    NavBar,
    PageComponent,
    ...ROUTED_COMPONENTS
  ],
  imports: [
    BrowserModule,
    HttpModule,
    APP_ROUTER_MODULE
  ],
  bootstrap: [PageComponent]
})
export class AppModule { }
