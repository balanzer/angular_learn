import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from './page';
import { ColorsComponent } from './colors/colors';
import { BlueCardComponent } from './colors/blue';
import { GreenCardComponent } from './colors/green';
import { RedCardComponent } from './colors/red';

import { EmailComponent } from './email/email';
import { FolderItemComponent } from './email/folder-item';
import { FolderListComponent } from './email/folder-list';
import { MessageBodyComponent } from './email/message-body';
import { MessageDisplayComponent } from './email/message-display';
import { MessageHeaderComponent } from './email/message-header';

const appRoutes: Routes = [
  { path: '', redirectTo: 'colors', pathMatch: 'full' },
  { path: 'colors', component: ColorsComponent },
  { path: 'hello', component: EmailComponent }
];

@NgModule({
  declarations: [
    PageComponent,
    ColorsComponent,
    BlueCardComponent,
    GreenCardComponent,
    RedCardComponent,
    EmailComponent,
    FolderItemComponent,
    FolderListComponent,
    MessageBodyComponent,
    MessageDisplayComponent,
    MessageHeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  bootstrap: [PageComponent]
})
export class AppModule { }
