import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { StrategiesComponent } from './strategies';
import { OnPushStrategyComponent } from './display/onpush-strategy';
import { DefaultStrategyComponent } from './display/default-strategy';
import { ItemDetailComponent } from './display/item-detail';

@NgModule({
  declarations: [
    StrategiesComponent,
    DefaultStrategyComponent,
    OnPushStrategyComponent,
    ItemDetailComponent
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  bootstrap: [StrategiesComponent]
})

export class AppModule { }
