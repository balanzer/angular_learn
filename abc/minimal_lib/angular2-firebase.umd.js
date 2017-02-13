(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs/Observable'), require('@angular/core'), require('rxjs/add/operator/map')) :
    typeof define === 'function' && define.amd ? define(['exports', 'rxjs/Observable', '@angular/core', 'rxjs/add/operator/map'], factory) :
    (factory((global.angular2firebase = global.angular2firebase || {}),global.rxjs_Observable,global._angular_core,global.rxjs_add_operator_map));
}(this, (function (exports,rxjs_Observable,_angular_core,rxjs_add_operator_map) { 'use strict';

// Angular 2 Toolkit - Firebase Observables
// Copyright 2015-2016 Oasis Digital - http://oasisdigital.com
//     written by Kyle Cordes - http://kylecordes.com
// started November 2015
// This is a first draft at two different translations of a Firebase query
// to an Observable. One is suitable for "leaf" objects, these are watched
// as a unit and replaced with each update. The other is suitable for Firebase
// "arrays", it understands the conventions use their to make an observable
// that yields an array with each change.
// TODO understand TypeScript generics more fully, seek advice from a guru.
// TODO Further polish this, publish as a reusable library.
// TODO determine if the safe copies are compatible with performant Angular 2.
// TODO How do I type this without adding another dependency on @reactivex/rxjs?
// import { Subscriber } from '@reactivex/rxjs/dist/cjs/Rx';
function observableFirebaseObject(ref) {
    return rxjs_Observable.Observable.create(function (observer) {
        function value(snapshot) {
            observer.next(snapshot.val());
        }
        ref.on('value', value);
        return function () {
            ref.off('value', value);
        };
    });
}
function findInArray(list, predicate) {
    for (var i = 0; i < list.length; i++) {
        const value = list[i];
        if (predicate.call(this, value, i, list)) {
            return value;
        }
    }
}
function observableFirebaseArray(ref) {
    return rxjs_Observable.Observable.create(function (observer) {
        // Looking for how to type this well.
        let arr = [];
        const keyFieldName = "$$fbKey";
        function child_added(snapshot, prevChildKey) {
            let child = snapshot.val();
            child[keyFieldName] = snapshot.key();
            let prevEntry = findInArray(arr, (y) => y[keyFieldName] === prevChildKey);
            arr.splice(arr.indexOf(prevEntry) + 1, 0, child);
            observer.next(arr.slice()); // Safe copy
        }
        function child_changed(snapshot) {
            let key = snapshot.key();
            let child = snapshot.val();
            // TODO replace object rather than mutate it?
            let x = findInArray(arr, (y) => y[keyFieldName] === key);
            if (x) {
                for (var k in child)
                    x[k] = child[k];
            }
            observer.next(arr.slice()); // Safe copy
        }
        function child_removed(snapshot) {
            let key = snapshot.key();
            let child = snapshot.val();
            let x = findInArray(arr, (y) => y[keyFieldName] === key);
            if (x) {
                arr.splice(arr.indexOf(x), 1);
            }
            observer.next(arr.slice()); // Safe copy
        }
        function child_moved(snapshot, prevChildKey) {
            let key = snapshot.key();
            let child = snapshot.val();
            child[keyFieldName] = key;
            // Remove from old slot
            let x = findInArray(arr, (y) => y[keyFieldName] === key);
            if (x) {
                arr.splice(arr.indexOf(x), 1);
            }
            // Add in new slot
            let prevEntry = findInArray(arr, (y) => y[keyFieldName] === prevChildKey);
            if (prevEntry) {
                arr.splice(arr.indexOf(prevEntry) + 1, 0, child);
            }
            else {
                arr.splice(0, 0, child);
            }
            observer.next(arr.slice()); // Safe copy
        }
        // Start out empty, until data arrives
        observer.next(arr.slice()); // Safe copy
        ref.on('child_added', child_added);
        ref.on('child_changed', child_changed);
        ref.on('child_removed', child_removed);
        ref.on('child_moved', child_moved);
        return function () {
            ref.off('child_added', child_added);
            ref.off('child_changed', child_changed);
            ref.off('child_removed', child_removed);
            ref.off('child_moved', child_moved);
        };
    });
}

// Angular 2 Toolkit - Firebase Observable Pipes
// Copyright 2015-2016 Oasis Digital - http://oasisdigital.com
//     written by Kyle Cordes - http://kylecordes.com
// started November 2015
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.FirebaseToObservableObjectPipe = class FirebaseToObservableObjectPipe {
    transform(input, args = []) {
        if (input) {
            return observableFirebaseObject(input);
        }
    }
};
exports.FirebaseToObservableObjectPipe = __decorate([
    _angular_core.Pipe({
        name: 'firebaseToObservableObject'
    }),
    __metadata("design:paramtypes", [])
], exports.FirebaseToObservableObjectPipe);
exports.FirebaseToObservableArrayPipe = class FirebaseToObservableArrayPipe {
    transform(input, args = []) {
        if (input) {
            return observableFirebaseArray(input);
        }
    }
};
exports.FirebaseToObservableArrayPipe = __decorate([
    _angular_core.Pipe({
        name: 'firebaseToObservableArray'
    }),
    __metadata("design:paramtypes", [])
], exports.FirebaseToObservableArrayPipe);
exports.ArrayifyObservablePipe = class ArrayifyObservablePipe {
    transform(input, args = []) {
        if (input) {
            return input.map(x => [x]);
        }
    }
};
exports.ArrayifyObservablePipe = __decorate([
    _angular_core.Pipe({
        name: 'arrayifyObservable'
    }),
    __metadata("design:paramtypes", [])
], exports.ArrayifyObservablePipe);

// Angular 2 Toolkit - ngWhen
// Copyright 2015-2016 Oasis Digital - http://oasisdigital.com
//     written by Kyle Cordes - http://kylecordes.com
// started November 2015
var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
class NgWhenPayload {
    constructor($implicit) {
        this.$implicit = $implicit;
    }
}
/**
 * TODO document this like NgIf and NgFor,
 * The following is some text from the docs for those things, here for reference.
 *
 * Removes or recreates a portion of the DOM tree based on an {expression}.
 *
 * If the expression assigned to `ng-if` evaluates to a false value then the element
 * is removed from the DOM, otherwise a clone of the element is reinserted into the DOM.
 *
 * ### Example ([live demo](http://plnkr.co/edit/fe0kgemFBtmQOY31b4tw?p=preview)):
 *
 * ```
 * <div *ng-if="errorCount > 0" class="error">
 *   <!-- Error message displayed when the errorCount property on the current context is greater
 * than 0. -->
 *   {{errorCount}} errors detected
 * </div>
 * ```
 *
 *##Syntax
 *
 * - `<div *ng-if="condition">...</div>`
 * - `<div template="ng-if condition">...</div>`
 * - `<template [ng-if]="condition"><div>...</div></template>`

 * The `NgWhen` directive instantiates a template once per item from an iterable. The context for
 * each instantiated template inherits from the outer context with the given loop variable set
 * to the current item from the iterable.
 *
 * # Change Propagation
 *
 * When the contents of the iterator changes, `NgWhen` makes the corresponding changes to the DOM:
 *
 * * When the item becomes non-null, an instance of the template is added to the DOM.
 * * When the item becomes null, its template instance is removed from the DOM.
 *
 * # Syntax
 *
 * - `<li *ng-for="#item of items; #i = index">...</li>`
 * - `<li template="ng-for #item of items; #i = index">...</li>`
 * - `<template ng-for #item [ng-for-of]="items" #i="index"><li>...</li></template>`
 *
 * ### Example
 *
 * See a [live demo](TODO) for a more detailed
 * example.
 */
function isPresent(obj) {
    return obj !== undefined && obj !== null;
}
function presentNotFalse(x) {
    return isPresent(x) && x !== false;
}
exports.NgWhen = class NgWhen {
    constructor(_viewContainer, _templateRef, _cdr) {
        this._viewContainer = _viewContainer;
        this._templateRef = _templateRef;
        this._cdr = _cdr;
        /** @internal */
        this._prevCondition = null;
        // TODO remove _prevCondition, the viewRef is enough.
        this._viewRef = null;
    }
    set ngWhenIs(newCondition) {
        if (presentNotFalse(newCondition) && !presentNotFalse(this._prevCondition)) {
            this._viewRef = this._viewContainer.createEmbeddedView(this._templateRef);
            this._viewRef.context.$implicit = newCondition;
        }
        else if (!presentNotFalse(newCondition) && presentNotFalse(this._prevCondition)) {
            this._viewContainer.clear();
            this._viewRef = null;
        }
        this._prevCondition = newCondition;
        if (presentNotFalse(newCondition)) {
            this._viewRef.context.$implicit = newCondition;
        }
    }
    set ngWhenTemplate(value) {
        if (isPresent(value)) {
            this._templateRef = value;
        }
    }
};
exports.NgWhen = __decorate$1([
    _angular_core.Directive({ selector: '[ngWhen][ngWhenIs]', inputs: ['ngWhenIs', 'ngWhenTemplate'] }),
    __metadata$1("design:paramtypes", [_angular_core.ViewContainerRef, _angular_core.TemplateRef,
        _angular_core.ChangeDetectorRef])
], exports.NgWhen);

exports.observableFirebaseObject = observableFirebaseObject;
exports.observableFirebaseArray = observableFirebaseArray;
exports.NgWhenPayload = NgWhenPayload;

Object.defineProperty(exports, '__esModule', { value: true });

})));
