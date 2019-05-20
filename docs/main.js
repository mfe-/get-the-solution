(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home.component */ "./src/app/components/home.component.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/blog/blog.component */ "./src/app/components/blog/blog.component.ts");
/* harmony import */ var _components_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/contact.component */ "./src/app/components/contact.component.ts");
/* harmony import */ var _components_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/page-not-found.component */ "./src/app/components/page-not-found.component.ts");








// https://mfe-.github.io/get-the-solution/?p=/blog/Add%20Token%20Authorization%20to%20AngularJS%20and%20WebApi
var routes = [
    // { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _components_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'projects', component: _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"] },
    { path: 'contact', component: _components_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"] },
    { path: 'blog', component: _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_5__["BlogComponent"] },
    { path: 'blog/:title', component: _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_5__["BlogComponent"] },
    { path: ':year/:month/:day/:title', component: _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_5__["BlogComponent"] },
    { path: ':p', component: _components_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"] },
    { path: '**', component: _components_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    //mit router events feststellen was url ist zwischnespeichern und weiterleiten
    // https://ngrefs.com/en/latest/router/events
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { enableTracing: false })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
        //mit router events feststellen was url ist zwischnespeichern und weiterleiten
        // https://ngrefs.com/en/latest/router/events
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/app.component */ "./src/app/components/app.component.ts");
/* harmony import */ var _components_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header.component */ "./src/app/components/header.component.ts");
/* harmony import */ var _components_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home.component */ "./src/app/components/home.component.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/blog/blog.component */ "./src/app/components/blog/blog.component.ts");
/* harmony import */ var _components_blog_blogEntry_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/blog/blogEntry.component */ "./src/app/components/blog/blogEntry.component.ts");
/* harmony import */ var _components_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/contact.component */ "./src/app/components/contact.component.ts");
/* harmony import */ var _components_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/footer.component */ "./src/app/components/footer.component.ts");
/* harmony import */ var _service_blogservice__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./service/blogservice */ "./src/app/service/blogservice.ts");
/* harmony import */ var _components_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/page-not-found.component */ "./src/app/components/page-not-found.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _components_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _components_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsComponent"],
                _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_9__["BlogComponent"],
                _components_blog_blogEntry_component__WEBPACK_IMPORTED_MODULE_10__["BlogEntryComponent"],
                _components_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
                _components_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _components_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__["PageNotFoundComponent"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [
                { provide: 'IBlogService', useClass: _service_blogservice__WEBPACK_IMPORTED_MODULE_13__["BlogService"] }
            ],
            bootstrap: [_components_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/app.component.html":
/*!***********************************************!*\
  !*** ./src/app/components/app.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<my-header></my-header>\r\n<main class=\"center\">\r\n    <!--thematic grouping of content -->\r\n    <section>\r\n        <router-outlet></router-outlet>\r\n    </section>\r\n    <app-footer></app-footer>\r\n</main>"

/***/ }),

/***/ "./src/app/components/app.component.ts":
/*!*********************************************!*\
  !*** ./src/app/components/app.component.ts ***!
  \*********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/components/app.component.html"),
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/components/blog/blog.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/blog/blog.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/blog/blog.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/blog/blog.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div *ngFor=\"let blogEntry of BlogEntry\" [attr.data-blogEntry-blogEntryId]=\"blogEntry.BlogEntryId\">\r\n    <app-blogentry [blogEntryValue]=\"blogEntry\"></app-blogentry>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/blog/blog.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/blog/blog.component.ts ***!
  \***************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var BlogComponent = /** @class */ (function () {
    function BlogComponent(blogService, route) {
        this.blogService = blogService;
        this.route = route;
    }
    BlogComponent.prototype.ngOnInit = function () {
        var year = this.route.snapshot.paramMap.get("year");
        var month = this.route.snapshot.paramMap.get("month");
        var day = this.route.snapshot.paramMap.get("day");
        if (year != null && month != null && day != null) {
            this.blogService.GetBlogEntries(false).subscribe(this.ApplyBlogEntry.bind(this));
        }
        else {
            this.blogService.GetBlogEntries(true).subscribe(this.ApplyBlogEntry.bind(this));
        }
    };
    BlogComponent.prototype.ApplyBlogEntry = function (blogEntries) {
        var title = this.route.snapshot.paramMap.get("title");
        var year = this.route.snapshot.paramMap.get("year");
        var month = this.route.snapshot.paramMap.get("month");
        var day = this.route.snapshot.paramMap.get("day");
        this.BlogEntry = blogEntries;
        if (title != null || (year != null && month != null && day != null)) {
            var blogentry = null;
            if ((year != null && month != null && day != null)) {
                blogentry = this.blogService.GetBlogEntry(+year, +month, +day, title, blogEntries);
            }
            else {
                blogentry = this.blogService.GetBlogEntry(0, 0, 0, title, blogEntries);
            }
            if (blogentry != undefined) {
                this.BlogEntry = [blogentry];
            }
        }
    };
    BlogComponent.prototype.ngOnDestroy = function () {
    };
    BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/components/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/components/blog/blog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('IBlogService')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/components/blog/blogEntry.component.html":
/*!**********************************************************!*\
  !*** ./src/app/components/blog/blogEntry.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article>\r\n    <h2>\r\n        <a routerLink=\"{{blogEntryValue.Title}}\">{{blogEntryValue.Title}}</a>\r\n    </h2>\r\n    <p class=\"info\"></p>\r\n    <address class=\"author\">By <a rel=\"author\" [attr.href]=\"blogEntryValue.Author\">{{blogEntryValue.Author}}</a></address>\r\n    on\r\n    <time pubdate=\"\" [attr.datetime]=\"blogEntryValue.Release | date: 'yyyy-MM-dd'\" [attr.title]=\"blogEntryValue.Release | date: 'yyyy-MM-dd'\">\r\n        {{blogEntryValue.Release | date }}\r\n    </time>\r\n    <span class=\"regards\">Regards:\r\n        <a *ngFor=\"let tag of blogEntryValue.Regards\" href=\"category/{{tag}}\">{{tag}}; </a>\r\n    </span>\r\n    <p [innerHtml]=\"blogEntryValue.Content\">\r\n    </p>\r\n</article>\r\n"

/***/ }),

/***/ "./src/app/components/blog/blogEntry.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/blog/blogEntry.component.ts ***!
  \********************************************************/
/*! exports provided: BlogEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogEntryComponent", function() { return BlogEntryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_model_BlogEntry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/BlogEntry */ "./src/app/model/BlogEntry.ts");



var BlogEntryComponent = /** @class */ (function () {
    function BlogEntryComponent(blogService) {
        this.blogService = blogService;
    }
    BlogEntryComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_model_BlogEntry__WEBPACK_IMPORTED_MODULE_2__["BlogEntry"])
    ], BlogEntryComponent.prototype, "blogEntryValue", void 0);
    BlogEntryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blogentry',
            template: __webpack_require__(/*! ./blogEntry.component.html */ "./src/app/components/blog/blogEntry.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('IBlogService')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], BlogEntryComponent);
    return BlogEntryComponent;
}());



/***/ }),

/***/ "./src/app/components/contact.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/contact.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article>\r\n    <h2><a routerLink=\"/contact\"> Contact</a></h2>\r\n    <p></p>\r\n    <h2>General contact</h2>\r\n    <p>support at get stroke the stroke solution dot net</p>\r\n    <h2>Team</h2>\r\n    <p><br>\r\n        Simon Fetzel – <a>simon [dot] fetzel [at] get-the-solution [dot] net<br>\r\n        </a>fields of interest: PHP, C#, C, Javascript, Typescript, Virtualization</p>\r\n    <p></p>\r\n    <hr>\r\n</article>"

/***/ }),

/***/ "./src/app/components/contact.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/contact.component.ts ***!
  \*************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/footer.component.html":
/*!**************************************************!*\
  !*** ./src/app/components/footer.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <footer>\r\n        (C) Since 2008-2019 | Privacy & cookies | Terms of use | Trademarks\r\n    </footer>\r\n</div>"

/***/ }),

/***/ "./src/app/components/footer.component.ts":
/*!************************************************!*\
  !*** ./src/app/components/footer.component.ts ***!
  \************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    ;
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header.component.html":
/*!**************************************************!*\
  !*** ./src/app/components/header.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!--defines header of document or section-->\r\n <header class=\"uppercase center\">\r\n    <h1>{{ title }}</h1>\r\n</header>\r\n<!--defines navigation region of page or section-->\r\n<nav>\r\n    <ul>\r\n        <li><a routerLink=\"home\">Home</a></li>\r\n        <li><a routerLink=\"projects\">Projects</a></li>\r\n        <li><a routerLink=\"blog\">Blog</a></li>\r\n        <li><a routerLink=\"contact\">Contact</a></li>\r\n    </ul>\r\n</nav>\r\n<hr>"

/***/ }),

/***/ "./src/app/components/header.component.ts":
/*!************************************************!*\
  !*** ./src/app/components/header.component.ts ***!
  \************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.title = 'get-the-solution';
    }
    ;
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'my-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home.component.html":
/*!************************************************!*\
  !*** ./src/app/components/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article>\r\n  <h2><a routerLink=\"/home\"> Home</a></h2>\r\n  <p></p>\r\n  <p>Wir beschäftigen uns mit Software- und Webentwicklung in den Sprachen C#, PHP und Typescript. Seit 2016 sind auch\r\n    erste <a routerLink=\"/projects\">Apps</a> in Entwicklung.\r\n    Artikel und kurze Blogeinträge veröffentlichen wir <a routerLink=\"/blog\">hier</a>.</p>\r\n  <p>Die alte Seite ist unter <a href=\"http://archiv.get-the-solution.net\" target=\"_blank\" >archiv.get-the-solution.net</a>\r\n    erreichbar.</p>\r\n  <p></p>\r\n  <hr>\r\n</article>"

/***/ }),

/***/ "./src/app/components/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/components/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/page-not-found.component.html":
/*!**********************************************************!*\
  !*** ./src/app/components/page-not-found.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Please click on the link to proceed.</p>\n<p>\n  <a routerLink=\"{{Link}}\">{{Link}}</a>\n</p>"

/***/ }),

/***/ "./src/app/components/page-not-found.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/page-not-found.component.ts ***!
  \********************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent(route, router, blogService) {
        this.route = route;
        this.router = router;
        this.blogService = blogService;
        this.REGEXLINK = "index-blog-[0-9]+-[0-9]+-([0-9]+)-.+";
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('p');
        var autoforward = true;
        if (id == null) {
            this.Link = "/home";
        }
        else {
            //check if the link was from the predecessor website get-the-solution.net v1
            var regeex = new RegExp(this.REGEXLINK);
            if (regeex.test(id)) {
                var regexmatch = regeex.exec(id);
                if (regexmatch.length > 1) {
                    //we found the id
                    var blogid_1 = +regexmatch[1];
                    autoforward = false;
                    this.blogService.GetBlogEntries(false).subscribe(function (b) {
                        var blogentry = b.find(function (blog) { return blog.BlogEntryId == blogid_1; });
                        if (blogentry != null) {
                            _this.Link = "/blog/" + blogentry.Title;
                            _this.router.navigate([_this.Link]);
                        }
                    });
                }
            }
            this.Link = "/" + this.route.snapshot.paramMap.get('p');
        }
        if (autoforward) {
            this.router.navigate([this.Link]);
        }
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/components/page-not-found.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('IBlogService')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], Object])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/projects/projects.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/projects/projects.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/projects/projects.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/projects/projects.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article>\r\n  <h2><a routerLink=\"/projects\">Projects</a></h2>\r\n  <p></p>\r\n  <h2>&nbsp;Apps</h2>\r\n  <p>\r\n    <!--specifies complete, self-contained content -->\r\n  </p>\r\n  <ul>\r\n    <li><a href=\"https://www.microsoft.com/en-us/store/p/resize-image/9p87m9tknkvl\">Image Resizer</a></li>\r\n    <li><a href=\"https://www.microsoft.com/en-us/store/p/coffee-clock/9nblggh442p4\">Coffee Clock</a></li>\r\n    <li><a href=\"https://www.microsoft.com/en-us/store/p/file-renamer/9nblggh4rkqt\">File Renamer</a></li>\r\n  </ul>\r\n  <h3>Rly Old Stuff</h3>\r\n  <ul>\r\n    <li><a href=\"https://www.microsoft.com/en-us/store/p/rezept-verwaltung/9n06wvnw8nbd\">Recipe Application</a></li>\r\n  </ul>\r\n  <h3>Tools</h3>\r\n  <ul>\r\n    <li><a href=\"http://archiv.get-the-solution.net/media/file/OutlookExportContacts.zip\">Export Outlook contacts</a></li>\r\n  </ul>\r\n  <p></p>\r\n  <hr>\r\n</article>"

/***/ }),

/***/ "./src/app/components/projects/projects.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/projects/projects.component.ts ***!
  \***********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/components/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/components/projects/projects.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/model/BlogEntry.ts":
/*!************************************!*\
  !*** ./src/app/model/BlogEntry.ts ***!
  \************************************/
/*! exports provided: BlogEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogEntry", function() { return BlogEntry; });
var BlogEntry = /** @class */ (function () {
    function BlogEntry() {
    }
    return BlogEntry;
}());



/***/ }),

/***/ "./src/app/service/blogservice.ts":
/*!****************************************!*\
  !*** ./src/app/service/blogservice.ts ***!
  \****************************************/
/*! exports provided: BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var BlogService = /** @class */ (function () {
    function BlogService(httpClient) {
        this.httpClient = httpClient;
        this.baseUri = "assets/database/blog.json";
    }
    BlogService.prototype.GetBlogEntries = function (getContent) {
        var _this = this;
        if (getContent === void 0) { getContent = true; }
        var observable = this.httpClient.get(this.baseUri);
        var returnValue = observable;
        if (getContent) {
            returnValue = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (blogEntries) {
                var _loop_1 = function (blogEntry) {
                    if (!blogEntry.Content) {
                        // async load of blog entry content
                        var contentObservable = _this.getBlogEntryContent(blogEntry);
                        if (contentObservable) {
                            contentObservable.subscribe(function (content) {
                                blogEntry.Content = content;
                            });
                        }
                    }
                };
                for (var _i = 0, blogEntries_1 = blogEntries; _i < blogEntries_1.length; _i++) {
                    var blogEntry = blogEntries_1[_i];
                    _loop_1(blogEntry);
                }
                return blogEntries;
            }));
        }
        return returnValue;
    };
    BlogService.prototype.GetBlogEntry = function (year, month, day, title, blogEntries, getContent) {
        if (getContent === void 0) { getContent = true; }
        var blogEntry = null;
        if (year != 0 || month != 0 || day != 0) {
            blogEntry = blogEntries.find(function (b) {
                return b.Release != null &&
                    new Date(b.Release).getFullYear() == year &&
                    new Date(b.Release).getMonth() == (month - 1) &&
                    new Date(b.Release).getDate() == day;
            });
        }
        else {
            blogEntry = blogEntries.find(function (b) {
                return (b.Title.toLowerCase() == title.toLowerCase()
                    //replace all " " with "-"
                    || b.Title.replace(/\ /g, "-").toLowerCase() == title.toLowerCase());
            });
        }
        if (!blogEntry.Content && getContent) {
            // async load of blog entry content
            this.getBlogEntryContent(blogEntry).subscribe(function (content) { blogEntry.Content = content; });
        }
        return blogEntry;
    };
    BlogService.prototype.getBlogEntryContent = function (blogEntry) {
        var returnValue = null;
        if (blogEntry.Source) {
            returnValue = this.httpClient.get(blogEntry.Source, { responseType: 'text' });
        }
        return returnValue;
    };
    BlogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BlogService);
    return BlogService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\get-the-solution\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map