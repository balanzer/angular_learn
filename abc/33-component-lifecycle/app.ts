import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { ManagerComponent } from './manager.component';
import { WorkerComponent } from './worker.component';

@NgModule({
  declarations: [
    ManagerComponent,
    WorkerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  bootstrap: [ManagerComponent]
})
export class AppModule { }
