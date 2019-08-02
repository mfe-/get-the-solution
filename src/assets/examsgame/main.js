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

/***/ "./src/app/MathJaxDirective.ts":
/*!*************************************!*\
  !*** ./src/app/MathJaxDirective.ts ***!
  \*************************************/
/*! exports provided: MathJaxDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MathJaxDirective", function() { return MathJaxDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
 * This directive is used to insert MathJax code into Angular. It is
 * necessary, because once inserted, MathJax has to process the new
 * code. The directive watches changes and tells MathJax to reprocess the content
 * source: http://ruinshe.moe/2016/05/31/support-mathjax-in-angular2/
 */


var MathJaxDirective = /** @class */ (function () {
    function MathJaxDirective(element) {
        this.element = element;
        this.value = "";
    }
    MathJaxDirective.prototype.ngOnChanges = function () {
        this.element.nativeElement.innerHTML = this.value;
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, this.element.nativeElement]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("mathJax"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MathJaxDirective.prototype, "value", void 0);
    MathJaxDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[mathJax]' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], MathJaxDirective);
    return MathJaxDirective;
}());



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
/* harmony import */ var _name_name_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./name/name.component */ "./src/app/name/name.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");





var routes = [
    { path: '', component: _name_name_component__WEBPACK_IMPORTED_MODULE_3__["NameComponent"] },
    { path: 'game', component: _game_game_component__WEBPACK_IMPORTED_MODULE_4__["GameComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body\n{\n\tbackground-color: black;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUMsd0JBQXdCO0NBQ3hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5XG57XG5cdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
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
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _MathJaxDirective__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MathJaxDirective */ "./src/app/MathJaxDirective.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _name_name_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./name/name.component */ "./src/app/name/name.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
/* harmony import */ var _highscore_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./highscore.service */ "./src/app/highscore.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _MathJaxDirective__WEBPACK_IMPORTED_MODULE_6__["MathJaxDirective"],
                _name_name_component__WEBPACK_IMPORTED_MODULE_8__["NameComponent"],
                _game_game_component__WEBPACK_IMPORTED_MODULE_9__["GameComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]
            ],
            providers: [
                _highscore_service__WEBPACK_IMPORTED_MODULE_10__["HighscoreService"],
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"], useValue: 'de' }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/exam.service.ts":
/*!*********************************!*\
  !*** ./src/app/exam.service.ts ***!
  \*********************************/
/*! exports provided: ExamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamService", function() { return ExamService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ExamService = /** @class */ (function () {
    function ExamService(http) {
        this.http = http;
        this.assetsRelativeUrl = "assets/";
        this.rewardsRelativeUrl = this.assetsRelativeUrl + "rewards.json";
        this.levelsRelativeUrl = this.assetsRelativeUrl + "level{0}.json";
        // default count of levels
        this.levelCount = 1;
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].hasOwnProperty("levelsRelativeUrl")) {
            this.levelsRelativeUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].levelsRelativeUrl;
        }
    }
    ExamService.prototype.getExamsByLevel = function (level) {
        var relativeUrl = this.levelsRelativeUrl.replace(new RegExp('\\{0\\}', 'gm'), level.toString());
        return this.http.get(relativeUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (examsJsonExport) { return examsJsonExport.exportData.questions; }));
    };
    ExamService.prototype.getRewardsList = function () {
        return this.http.get(this.rewardsRelativeUrl);
    };
    ExamService.prototype.getLevelCount = function () {
        var levelCount = this.levelCount;
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].hasOwnProperty("levelCount")) {
            levelCount = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].levelCount;
        }
        return levelCount;
    };
    ExamService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ExamService);
    return ExamService;
}());



/***/ }),

/***/ "./src/app/game/game.component.css":
/*!*****************************************!*\
  !*** ./src/app/game/game.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".GameComponent\n{\n\tmargin: 0 auto;\n\twidth: 80%;\n\tbackground-color: white;\n\tpadding: 1em;\n}\n\n.multipleChoiceList\n{\n\tlist-style-type: upper-alpha;\n}\n\n.multipleChoiceList li\n{\n\theight: 2.5em;\n}\n\n.solution h2\n{\n\tcolor: red;\n}\n\n.solution-checkbox\n{\n\twidth: 1em;\n\theight: 1em;\n}\n\n.reward\n{\n\ttext-align: center;\n}\n\n@media only screen and (max-width: 600px)\n{\n\t.GameComponent\n\t{\n\t\twidth: 100%;\n\t}\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUMsZUFBZTtDQUNmLFdBQVc7Q0FDWCx3QkFBd0I7Q0FDeEIsYUFBYTtDQUNiOztBQUVEOztDQUVDLDZCQUE2QjtDQUM3Qjs7QUFFRDs7Q0FFQyxjQUFjO0NBQ2Q7O0FBRUQ7O0NBRUMsV0FBVztDQUNYOztBQUVEOztDQUVDLFdBQVc7Q0FDWCxZQUFZO0NBQ1o7O0FBRUQ7O0NBRUMsbUJBQW1CO0NBQ25COztBQUVEOztDQUVDOztFQUVDLFlBQVk7RUFDWjtDQUNEIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuR2FtZUNvbXBvbmVudFxue1xuXHRtYXJnaW46IDAgYXV0bztcblx0d2lkdGg6IDgwJTtcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdHBhZGRpbmc6IDFlbTtcbn1cblxuLm11bHRpcGxlQ2hvaWNlTGlzdFxue1xuXHRsaXN0LXN0eWxlLXR5cGU6IHVwcGVyLWFscGhhO1xufVxuXG4ubXVsdGlwbGVDaG9pY2VMaXN0IGxpXG57XG5cdGhlaWdodDogMi41ZW07XG59XG5cbi5zb2x1dGlvbiBoMlxue1xuXHRjb2xvcjogcmVkO1xufVxuXG4uc29sdXRpb24tY2hlY2tib3hcbntcblx0d2lkdGg6IDFlbTtcblx0aGVpZ2h0OiAxZW07XG59XG5cbi5yZXdhcmRcbntcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KVxue1xuXHQuR2FtZUNvbXBvbmVudFxuXHR7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/game/game.component.html":
/*!******************************************!*\
  !*** ./src/app/game/game.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"GameComponent\">\n\t<img src=\"assets/beautiful-royal-crown.png\" style=\"width: 20%; float: right;\" alt=\"\" />\n\t<h1 i18n=\"exams king@@title\">exams king</h1>\n\t<br />\n\t<form>\n\t\t<div class=\"form-row align-items-center\">\n\t\t\t<div class=\"col-auto\">\n\t\t\t\t<label class=\"sr-only\">Name</label>\n\t\t\t\t<div class=\"form-control mb-2\">\n\t\t\t\t\tName: {{this.highscoreService.name}}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-auto\">\n\t\t\t\t<label  class=\"sr-only\">Level: {{level}}/{{levelCount}}</label>\n\t\t\t\t<div class=\"form-control mb-2\">\n\t\t\t\t\tLevel {{level}}/{{levelCount}} <progress max=\"{{levelCount}}\" value=\"{{level}}\"></progress>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-auto\">\n\t\t\t\t<label  class=\"sr-only\"><ng-container i18n=\"@@points\">Points</ng-container>: {{score}}</label>\n\t\t\t\t<div class=\"form-control mb-2\">\n\t\t\t\t\t<ng-container i18n=\"@@points\">Points</ng-container>: {{score}}\n\t\t\t\t\t<progress max=\"{{ExamsPerLevel}}\" value=\"{{score}}\"></progress>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n\t<div [hidden]=\"examInstance==null || isRewardShown || isGameFinished\" >\n\t\t<h2 i18n=\"@@task\">Task</h2>\n\t\t<div [mathJax]=\"examInstance.question\"></div>\n\t\t<ol [hidden]=\"examInstance.questionlist==null\" class=\"multipleChoiceList\">\n\t\t\t<li *ngFor=\"let question of examInstance.questionlist; let i = index\">\n\t\t\t\t<input *ngIf=\"examInstance.metainfo.type=='mchoice'\" class=\"solution-checkbox\"\n\t\t\t\t\ttype=\"checkbox\" [(ngModel)]=\"solution[i]\" />\n\t\t\t\t<span [mathJax]=\"question\"></span>\n\t\t\t</li>\n\t\t</ol>\n\t\t<div class=\"input-group mb-3\" *ngIf=\"examInstance != null && examInstance.metainfo.type == 'num'\">\n\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t<span class=\"input-group-text\" id=\"basic-solution\" i18n=\"@@yourSolution\">Your solution</span>\n\t\t\t</div>\n\t\t\t<input type=\"number\" [(ngModel)]=\"solution\" [attr.disabled]=\"isSolutionVisible ? 'disabled' : null\" \n\t\t\t\t[@answerState]=\"isSolutionVisible ? 'incorrectAnswer' : 'noAnswer'\"\n\t\t\t\tclass=\"form-control\" placeholder=\"1234\" aria-label=\"solution\" aria-describedby=\"basic-solution\">\n\t\t</div>\n\t\t<button [attr.disabled]=\"isSolutionVisible ? 'disabled' : null\" (click)=\"checkExam(examInstance)\"\n\t\t\tclass=\"btn btn-primary\" [@answerState]=\"isSolutionVisible ? 'incorrectAnswer' : 'noAnswer'\"\n\t\t\ti18n=\"@@checkTask\">Check</button>\n\t</div>\n\t<div [hidden]=\"!isSolutionVisible\" class=\"solution\">\n\t\t<h2 i18n=\"@@wrongAnswerTitle\">Wrong answer - Correct solution:</h2>\n\t\t<div [mathJax]=\"examInstance.solution\"></div>\n\t\t<ul [hidden]=\"examInstance.solutionlist==null\">\n\t\t\t<li *ngFor=\"let solution of examInstance.solutionlist\">\n\t\t\t\t<input type=\"checkbox\" disabled checked=\"{{solution}}\" />\n\t\t\t\t<span [mathJax]=\"solution\"></span>\n\t\t\t</li>\n\t\t</ul>\n\t\t<button class=\"btn btn-primary\" (click)=\"setRandomExam()\" i18n=\"@@restartLevel\">Restart level</button>\n\t</div>\n\t<br />\n\t<div [hidden]=\"!isRewardShown\" [innerHTML]=\"rewardsHtmlCode\" class=\"reward\"></div>\n\t<div [hidden]=\"!isGameFinished\">\n\t\t<h1 i18n=\"@@gameFinishedTitle\">Congratulations! You are a math king!</h1>\n\t\t<img src=\"assets/finish.jpg\" alt=\"\" />\n\t</div>\n\t<br style=\"clear: both\" />\n</div>\n"

/***/ }),

/***/ "./src/app/game/game.component.ts":
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _highscore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../highscore.service */ "./src/app/highscore.service.ts");
/* harmony import */ var _exam_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../exam.service */ "./src/app/exam.service.ts");





var GameComponent = /** @class */ (function () {
    function GameComponent(examService, highscoreService) {
        this.examService = examService;
        this.highscoreService = highscoreService;
        this.ExamsPerLevel = 8;
        this.level = 1;
        this.levelCount = 1;
        this.isSolutionVisible = false;
        this.isGameFinished = false;
        this.levels = [];
        this.score = 0;
        this.isRewardShown = false;
        this.rewardsHtmlCode = "";
        this.availableRewardsList = [];
        this.examInstance = {
            metainfo: {},
            question: "",
            questionlist: [],
            solution: "",
            solutionlist: [],
            subject: "",
            supplements: [],
            solved: false
        };
    }
    GameComponent.prototype.getRandomNumber = function (lowerBound, upperBound) {
        return Math.floor(lowerBound + Math.random() * (upperBound - lowerBound));
    };
    GameComponent.prototype.getRandomExam = function () {
        //var levelIndex = this.getRandomNumber(0, this.levels.length);
        var levelIndex = this.level - 1;
        var randomExam = this.getRandomNumber(0, this.levels[levelIndex].length);
        return this.levels[levelIndex][randomExam];
    };
    GameComponent.prototype.showReward = function () {
        this.isRewardShown = true;
        this.rewardsHtmlCode = this.availableRewardsList[this.getRandomNumber(0, this.availableRewardsList.length)];
        var self = this;
        setTimeout(function () { self.isRewardShown = false; }, 3500);
    };
    GameComponent.prototype.setRandomExam = function () {
        var exam = this.getRandomExam();
        // look for exam, which has not already been solved
        while (exam.hasOwnProperty("solved")) {
            exam = this.getRandomExam();
        }
        this.isSolutionVisible = false;
        this.solution = "";
        this.isRewardShown = false;
        if (exam != null) {
            if (!(exam.questionlist instanceof Array)) {
                exam.questionlist = [exam.questionlist];
            }
            if (!(exam.solutionlist instanceof Array)) {
                exam.solutionlist = [exam.solutionlist];
            }
            if (exam.solution == undefined) {
                exam.solution = "";
            }
            if (exam.hasOwnProperty("metainfo")) {
                if (exam.metainfo.type == "mchoice") {
                    this.solution = [];
                    for (var solution in exam.questionlist) {
                        this.solution.push();
                    }
                }
            }
            this.examInstance = exam;
        }
    };
    GameComponent.prototype.isExamAnswerCorrect = function (exam, solution) {
        var isAnswerCorrect = true;
        switch (exam.metainfo.type) {
            case "mchoice":
                exam.metainfo.solution.forEach(function (correctSolution, index) {
                    if (correctSolution == true && solution[index] != true) {
                        isAnswerCorrect = false;
                    }
                });
                break;
            case "num":
                if (exam.metainfo.hasOwnProperty("tolerance")) {
                    isAnswerCorrect = exam.metainfo.solution - exam.metainfo.tolerance <= solution &&
                        exam.metainfo.solution + exam.metainfo.tolerance >= solution;
                }
                else {
                    isAnswerCorrect = exam.metainfo.solution == solution;
                }
                break;
        }
        return isAnswerCorrect;
    };
    GameComponent.prototype.enterLevel = function () {
        var self = this;
        this.examService.getExamsByLevel(this.level).subscribe(function (level) {
            self.levels.push(level);
            self.setRandomExam();
        });
    };
    GameComponent.prototype.checkExam = function (exam) {
        var isAnswerCorrect = this.isExamAnswerCorrect(this.examInstance, this.solution);
        if (!isAnswerCorrect) {
            this.isSolutionVisible = true;
            this.score = 0;
        }
        else {
            this.score += 1;
            this.examInstance.solved = true;
            this.setRandomExam();
            if (this.score >= this.ExamsPerLevel) {
                if (this.level < this.levelCount) {
                    this.level += 1;
                    this.score = 0;
                    var self = this;
                    setTimeout(function () { self.enterLevel(); }, 2500);
                    this.showReward();
                }
                else {
                    this.isGameFinished = true;
                }
            }
            else {
                this.showReward();
            }
        }
    };
    GameComponent.prototype.ngOnInit = function () {
        var self = this;
        this.enterLevel();
        this.examService.getRewardsList().subscribe(function (rewardsList) {
            self.availableRewardsList = rewardsList;
        });
        this.levelCount = this.examService.getLevelCount();
    };
    GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-game',
            template: __webpack_require__(/*! ./game.component.html */ "./src/app/game/game.component.html"),
            providers: [_exam_service__WEBPACK_IMPORTED_MODULE_4__["ExamService"]],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('answerState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('incorrectAnswer', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        backgroundColor: '#FF6161',
                        color: 'white'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('noAnswer', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({})),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('noAnswer => incorrectAnswer', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.2s')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('incorrectAnswer => noAnswer', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s')
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./game.component.css */ "./src/app/game/game.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_exam_service__WEBPACK_IMPORTED_MODULE_4__["ExamService"], _highscore_service__WEBPACK_IMPORTED_MODULE_3__["HighscoreService"]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/highscore.service.ts":
/*!**************************************!*\
  !*** ./src/app/highscore.service.ts ***!
  \**************************************/
/*! exports provided: HighscoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighscoreService", function() { return HighscoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HighscoreService = /** @class */ (function () {
    function HighscoreService(http) {
        this.http = http;
        this.name = "";
    }
    HighscoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HighscoreService);
    return HighscoreService;
}());



/***/ }),

/***/ "./src/app/name/name.component.css":
/*!*****************************************!*\
  !*** ./src/app/name/name.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".NameComponent\n{\n\tmargin: 0 auto;\n\twidth: 60%;\n\ttext-align: center;\n\tbackground-color: white;\n\tpadding: 2em;\n}\n\n\n@media only screen and (max-width: 600px)\n{\n\t.NameComponent\n\t{\n\t\twidth: 100%;\n\t}\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmFtZS9uYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUMsZUFBZTtDQUNmLFdBQVc7Q0FDWCxtQkFBbUI7Q0FDbkIsd0JBQXdCO0NBQ3hCLGFBQWE7Q0FDYjs7O0FBR0Q7O0NBRUM7O0VBRUMsWUFBWTtFQUNaO0NBQ0QiLCJmaWxlIjoic3JjL2FwcC9uYW1lL25hbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5OYW1lQ29tcG9uZW50XG57XG5cdG1hcmdpbjogMCBhdXRvO1xuXHR3aWR0aDogNjAlO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHRwYWRkaW5nOiAyZW07XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweClcbntcblx0Lk5hbWVDb21wb25lbnRcblx0e1xuXHRcdHdpZHRoOiAxMDAlO1xuXHR9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/name/name.component.html":
/*!******************************************!*\
  !*** ./src/app/name/name.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"NameComponent\">\n\t<h1 i18n=\"Welcome header@@welcomeHeader\">Welcome to the exams king game!</h1>\n\t<img src=\"assets/beautiful-royal-crown.png\" style=\"width: 20%\" alt=\"\" />\n\t<br />\n\t<div class=\"input-group mb-3\">\n\t\t<div class=\"input-group-prepend\">\n\t\t\t<span class=\"input-group-text\" id=\"name-input-addon\" i18n=\"Name enter caption@@nameCaption\">Enter your name</span>\n\t\t</div>\n\t\t<input type=\"text\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"this.highscoreService.name\"\n\t\t\taria-label=\"Name\" aria-describedby=\"name-input-addon\">\n\t</div>\n\t<button [disabled]=\"this.highscoreService.name == '' ? true : false\" class=\"btn btn-primary\" routerLink=\"/game\">\n\t\t<ng-container i18n=\"@@continueBecomeKing\">Continue and become king/queen </ng-container>\n\t\t<span [hidden]=\"this.highscoreService.name==''\">\n\t\t\t{{this.highscoreService.name}}\n\t\t</span>\n\t</button>\n</div>\n"

/***/ }),

/***/ "./src/app/name/name.component.ts":
/*!****************************************!*\
  !*** ./src/app/name/name.component.ts ***!
  \****************************************/
/*! exports provided: NameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameComponent", function() { return NameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _highscore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../highscore.service */ "./src/app/highscore.service.ts");



var NameComponent = /** @class */ (function () {
    function NameComponent(highscoreService) {
        this.highscoreService = highscoreService;
    }
    NameComponent.prototype.ngOnInit = function () {
    };
    NameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-name',
            template: __webpack_require__(/*! ./name.component.html */ "./src/app/name/name.component.html"),
            providers: [],
            styles: [__webpack_require__(/*! ./name.component.css */ "./src/app/name/name.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_highscore_service__WEBPACK_IMPORTED_MODULE_2__["HighscoreService"]])
    ], NameComponent);
    return NameComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    levelCount: 7,
    levelsRelativeUrl: "assets/level{0}.json",
};


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/simon/Projekte/ExamsGame/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map