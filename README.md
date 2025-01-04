# [get-the-solution.net](https://get-the-solution.net/)

## Prerequisites

- nodejs
- `npm install`

## Build and deploy website

1. create a feature branch with your changes
2. create a pull request to be merged into main
3. the cli will convert all markdown files to html files and generate the website
4. after the pull request is merged, the website will be deployed automatically

## Development

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.2 and was updated meanwhile to angular 19.0.5.

### Build angular app in browser and server mode

1. Run `ng build --configuration production --aot` (builds browser and server)

### Run angular app in browser (and server) mode

1. Run `ng run get-the-solution-app:build:production` to build the project. The build artifacts will be stored in the `dist/` directory. 

2. Switch to `cd dist\get-the-solution-app\browser\`
3. Use `http-server` to serve the files. Install it with `npm install -g http-server`

### Convert markdown files to html files (for local development and testing)

Using pandoc in Linux:

 cd src/assets/database; for i in *.md; do pandoc "$i" -o "${i%.*}".html; done


### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
