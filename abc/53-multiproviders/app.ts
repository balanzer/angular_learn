import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FirstService, SecondService } from './services';
import { ExampleComponent } from './example';

@NgModule({
  declarations: [ExampleComponent],
  imports: [BrowserModule],
  providers: [
    { provide: 'foo', useClass: FirstService, multi: true },
    { provide: 'foo', useClass: SecondService, multi: true }
  ],
  bootstrap: [ExampleComponent]
})
export class AppModule { }
