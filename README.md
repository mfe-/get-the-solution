# [get-the-solution.net](https://get-the-solution.net/)

## Prerequisites

- nodejs
- `npm install`
- copy assets folder from `docs` to `src`

## Build for github with

1. Convert *.md files with pandoc
2. `ng build --output-path=docs  --base-href "https://get-the-solution.net/" --configuration production --aot`
3. push to github

## Convert markdown files to html files

Using pandoc in Linux:

 cd src/assets/database; for i in *.md; do pandoc "$i" -o "${i%.*}".html; done

 ng build --output-path=docs --prod --base-href "https://get-the-solution.net/"

## Development server

### compute angular app on browser
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### compute angular app on server

Run `npm run dev:ssr`

Debug `npx --node-options=--inspect-brk ng run get-the-solution-app:serve-ssr` server side. You need to attach to the instance.


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## GetTheSolutionApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.2.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
