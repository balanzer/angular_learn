# Angular CLI

https://cli.angular.io/

https://github.com/angular/angular-cli

The official Angular CLI is the best choice to use as you are getting
started with Angular development. We also have other examples here
(some of them not updated since the angular beta series) that show
that other tooling choices are possible.

The CLI is covered in depth during the main body of the class, but
here are extra pieces that may be useful for advanced students.

## Lazy Loading

After generating this example programmi using CLI beta.16, we added a couple of
routes and set up lazy loading of these routes.

To see this run as if in production, use ```ng build``` and observe the
additional bundles.

## AOT

As of early October 2016, CLI beta.16 has the very beginnings of support for
ahead of time template compilation. You can experiment:

```
ng build --prod --AOT
```

It does not quite work correctly yet; there are some extra files and various
other problems.

However, you can see the smaller bundle size start to take shape, as well as the
simplicity from the application point of view for using this.

-----------------------------------------------------------------------------

# ExampleApp

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.16.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
