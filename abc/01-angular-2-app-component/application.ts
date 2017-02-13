import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1>My First TypeScript Angular App</h1>'
})
class FirstComponent { }

@NgModule({
  declarations: [FirstComponent],
  imports: [BrowserModule],
  bootstrap: [FirstComponent]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
