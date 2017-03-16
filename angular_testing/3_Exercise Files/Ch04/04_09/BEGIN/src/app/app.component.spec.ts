import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { XyzUserListComponent }  from './user-list/user-list.component';

import { XyzErrorHandlerService } from './shared/error-handler.service';

import { APP_BASE_HREF } from '@angular/common';

describe('AppComponent', () => {
    let component: ComponentFixture<AppComponent>;
    let element: DebugElement;
    let html: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ BrowserModule, FormsModule, HttpModule, routing ],
            declarations: [ AppComponent, XyzUserListComponent ],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' }
            ]
        })

        component = TestBed.createComponent(AppComponent);
    })

    it('should have a title', () => {
        let title = 'Users Online Now';

        component.detectChanges();
        element = component.debugElement.query(By.css('h2'));
        html = element.nativeElement;

        expect(html.innerText).toBe(title);
    })
})
