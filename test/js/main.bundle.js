webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url('https://fonts.googleapis.com/css?family=Roboto');\r\n\r\n* {\r\n  font-family: Roboto, sans-serif;\r\n  font-size: 0.9em;\r\n}\r\n\r\nnav {\r\n  position: fixed;\r\n  height: 100%;\r\n  background: #0e1a35;\r\n  color: white;\r\n  width: 260px;\r\n}\r\n\r\nmain {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  top: 100px;\r\n  margin-left: 260px;\r\n  background: #f6f7fa;\r\n  -webkit-transition: all 0.2s ease-in-out;\r\n  transition: all 0.2s ease-in-out;\r\n  padding: 15px;\r\n}\r\n\r\napp-nav-bar {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  left: 260px;\r\n  height: 100px;\r\n  background-color: #fff;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  padding: 0 20px;\r\n  z-index: 1000;\r\n  -webkit-transition: all 0.2s ease-in-out;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n\r\n@media (max-width: 586px){\r\n  app-nav-bar{\r\n    padding:0;\r\n  }\r\n}\r\n\r\n.graph-holder{\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -ms-flex-wrap: inherit;\r\n      flex-wrap: inherit;\r\n}\r\n\r\ndiv[app-sales]{\r\n  width: 40%;\r\n  height: auto;\r\n  border:1px solid rgba(132, 146, 175, 0.3);\r\n  background-color: rgb(255, 255, 255);\r\n}\r\n\r\ndiv[app-graph]{\r\n  width: 50%;\r\n  height: auto;\r\n  border:1px solid rgba(132, 146, 175, 0.3);\r\n  background-color: rgb(255, 255, 255);\r\n\r\n}\r\n\r\ndiv[app-tasks],div[app-messages], div[app-activity] {\r\n  border:1px solid rgba(132, 146, 175, 0.3);\r\n  background: #fff;\r\n}\r\n\r\n.m-10{\r\n  margin: 10px;\r\n  padding:0;\r\n}\r\n\r\n@media (max-width: 586px){\r\n  .m-10{\r\n    margin: 0;\r\n    padding:0;\r\n    margin-bottom: 5px;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav app-main-nav></nav>\r\n\r\n<app-nav-bar></app-nav-bar>\r\n\r\n<main>\r\n\r\n  <div class=\"graph-holder\">\r\n    <div app-sales class=\"m-10 col-12 col-lg-5\"></div>\r\n    <div app-graph class=\"m-10 col\"></div>\r\n  </div>\r\n    <div app-tasks class=\"m-10 col\"></div>\r\n    <div app-messages class=\"m-10 col\"></div>\r\n    <div app-activity class=\"m-10 col\"></div>\r\n</main>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_graph_graph_component__ = __webpack_require__("../../../../../src/app/components/graph/graph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_main_nav_main_nav_component__ = __webpack_require__("../../../../../src/app/components/main-nav/main-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_sales_sales_component__ = __webpack_require__("../../../../../src/app/components/sales/sales.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_tasks_tasks_component__ = __webpack_require__("../../../../../src/app/components/tasks/tasks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_messages_messages_component__ = __webpack_require__("../../../../../src/app/components/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_activity_activity_component__ = __webpack_require__("../../../../../src/app/components/activity/activity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_nav_bar_nav_bar_component__ = __webpack_require__("../../../../../src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_server_service__ = __webpack_require__("../../../../../src/app/services/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng2_charts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_graph_graph_component__["a" /* GraphComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_main_nav_main_nav_component__["a" /* MainNavComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_sales_sales_component__["a" /* SalesComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_tasks_tasks_component__["a" /* TasksComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_messages_messages_component__["a" /* MessagesComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_activity_activity_component__["a" /* ActivityComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_nav_bar_nav_bar_component__["a" /* NavBarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12_ng2_charts__["ChartsModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__services_server_service__["a" /* ServerService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/activity/activity.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flex-between{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.info_bar{\r\n  height:90px;\r\n  padding-left:15px;\r\n  padding-right:15px;\r\n}\r\n\r\n.header{\r\n  font-size: 24px;\r\n  font-weight: bold;\r\n}\r\n\r\n.info_holder{\r\n  height:110px;\r\n  padding-left:15px;\r\n  border:1px solid rgba(132, 146, 175, 0.1);\r\n}\r\n\r\n.msgs span{\r\n}\r\n\r\n.msg_info_holder{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex-positive: 1;\r\n          flex-grow: 1;\r\n  margin-left:20px;\r\n}\r\n\r\n@media (max-width: 1400px){\r\n  .task_info_menu{\r\n    margin:0;\r\n  }\r\n  .msg_info_holder{\r\n    margin:0;\r\n  }\r\n}\r\n\r\n.dots-menu{\r\n  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAhCAYAAAAVp7H4AAAAhElEQVQoke3QvQnCUBiF4Sc3OoHgBukdJYVKlsgEgeAPTuAUxsYd7FwgQkaxuDa3TOqA+DaneDnfByeLMbpcH3u0KDDg1NRlly9Xmy06rJGn3D1f7z7gYJw2pFNjFCH9GGMIOE7Ic2jq8o4KPT4pq6Yub1mMcaJImDQzyQX+w88gf2j4L7fZS63sVcn5AAAAAElFTkSuQmCC') no-repeat center;\r\n  width: 40px;\r\n  height: 33px;\r\n  display: inline-block;\r\n  margin: 0 20px;\r\n  cursor: pointer;\r\n}\r\n\r\n.msg-logo{\r\n  background: url('data:image/png;base64,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') no-repeat center;\r\n  width: 40px;\r\n  height: 33px;\r\n  display: inline-block;\r\n  margin: 0 30px;\r\n}\r\n\r\n.arrow-l{\r\n  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAOCAYAAAAi2ky3AAABEElEQVQokZXTPyjEcRjH8dfdySB1RTarlEwGUcdgcgadQd1ARqIbzLe61eDPaFBMBiSUwULZ3GZgUrdjMVgYfj86Xz/357M9PZ/ePd/P83xTG1vHEpTBLlaSmvUqlwogndDrxAGWm0Hq1RHUXTjCTDuQcKIsLgPIGLrbAfXhGpNB/w6vuMFqI2ga/bFx5B9PBjlR+M9YQyoJdIrBVsZHD3ZwLoriF6iIWougb+VxJVrOD+gJ43hsEzaKvXqQeKIcqoF5FvNYF2VUxWddv1jZPslDKrjsLM4wEdd/QhUtZymG9+IBw+Flv2EaFw2eVEMFAzjEEKbCy4Z3zGG/AQxesIB7LCb9NfiITU1VLhU2cfsFFFUvYNZSV7kAAAAASUVORK5CYII=') no-repeat center;\r\n  width: 18px;\r\n  height: 14px;\r\n  display: inline-block;\r\n  margin: 5px 5px 0 5px;\r\n  cursor: pointer;\r\n}\r\n\r\n.gear{\r\n  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABVUlEQVQ4jY3TT0uVURAG8J/XS0It+gYRCYFE5B+QIEo3BUJEiwgSXFQLA5d9hdYtIqiIFikIrkQCRaGQLnoJcnUXuugzqG1EJLou3nNqeDkXHHhhZs4zz8xz5j19r94s62F3sJD8J9gugRrBP49bIX6OS+mbDvlhnMtBMxRvJIIWBjAeiuZwFX8whTU8xEkmGA/db/eQdDf4UxhDO0vYTJ3Pal/RjhLgQg30C59V9/QUl8NZf3aauI8ZjAbAHm7id4rfYieQTOId5hv4gse17u9DMezjUw3zAqsNZftbyHVLwAYmMF/Lz6pWm+0intUwH/Coie+qDYzgejq8hp/4qLqwWVwJxetJwr8tdAtjD+F1aWwcRwlUm7jRA1yyBxmfCb5hK02xovxTtfAj+WvY5b+EI9zDIDopt6h6hVRSXiZ/UvUyT+IEmaQT4iUc4iCRZdvMxXAKMcs//sAbJiwAAAAASUVORK5CYII=') no-repeat center;\r\n  width: 16px;\r\n  height: 16px;\r\n  display: inline-block;\r\n  cursor: pointer;\r\n}\r\n\r\n.gray_clock{\r\n  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAABc0lEQVQ4jZXUsUqjQRQF4C9DsBOUkNJGBAWxsssLrFiITxDd7UUXrBRT7FouaixtZIWtA4LgC5itLF0IKNhtIcHCfrPFTHT8yS96YZhh5tzDnTnnTmX/uKMQ4/iMFcyjhj5ucI5TPA3BuxurQoGgiTscYgxn2EnzWNq/S7jnqGbrb9jDJbbQK5aIWRzhJ2bQwnMlzUTQxnJGMImFjKSXztsJ34TK/nFnPJV4nQCDLKmFdUwXKgq4wCKmg/iItXSFwQhw8d3gX8LX8CWIKlyVvMFb0UMXK0GU8fcb4ICJbORidDEfUkkPJQQDTOExG7+y8wfUqqKR6iUkJ7hHJdu7ztZ19KuiExslJH9FT5RFAzdBtHJDNNJHYjblnQexF/qiE0fJOSqCaLg+ToPYTNtYwsE7iELCfcL27sbq01CuM7EX9jCHTeW9004E31PeK81buMUP/BE90BVlrIv3b6QrrA0JiiTDijpe/pOm1//JV4X/BP4D1aBVtjCTR60AAAAASUVORK5CYII=') no-repeat center;\r\n  width: 17px;\r\n  height: 17px;\r\n  display: inline-block;\r\n  cursor: pointer;\r\n}\r\n\r\n.msg_info_title {\r\n  font-size: 1.1em;\r\n  text-transform: capitalize;\r\n  font-family: \"Roboto\";\r\n  font-weight: bold;\r\n  color: rgb(14, 26, 53);\r\n  line-height: 1.8em;\r\n  max-width: 170px;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.msg_info_stitle{\r\n  font-size: 0.9em;\r\n  font-family: \"Roboto\";\r\n  line-height: 1.8em;\r\n  position: relative;\r\n  margin-left: 5px;\r\n  top:-4px;\r\n  color: rgb(132, 146, 175);\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.msg_info_time{\r\n  font-size: 1.1em;\r\n  text-transform: capitalize;\r\n  font-family: \"Roboto\";\r\n  color: lightgray;\r\n  line-height: 1.8em;\r\n}\r\n\r\nh6{\r\n  font-weight: bold;\r\n}\r\n\r\n.roundNumber, .roundNumber-big{\r\n  border-radius: 50%;\r\n  width: 45px;\r\n  height: 45px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  font-weight:bold;\r\n  color: #fff;\r\n  font-size:1.4em;\r\n  margin:0 5px\r\n}\r\n\r\n.roundNumber-big{\r\n  font-size:1.6em;\r\n\r\n}\r\n\r\n.blue{\r\n  background: #5384ff;\r\n}\r\n\r\n.pink{\r\n  background: #f83c7b;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/activity/activity.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-between info_bar\">\r\n  <span class=\"header\">{{title}}</span>\r\n  <span style=\"display: flex;\">\r\n    <span class=\"roundNumber blue\"> 5 </span>\r\n  </span>\r\n</div>\r\n\r\n<div *ngFor=\"let m of messages; let i = index\">\r\n  <div *ngIf=\"i < 4\" class=\" \">\r\n\r\n    <div class=\"flex-between info_holder\">\r\n      <div class=\"msg-logo roundNumber-big\">\r\n      </div>\r\n      <div class=\"msg_info_holder\">\r\n        <div>\r\n          <span class=\"msg_info_title\"> {{m.name}} </span>\r\n          <span class=\"msg_info_time\">  {{m.company.catchPhrase}} </span>\r\n        </div>\r\n        <div>\r\n          <i class=\"gray_clock\"></i>\r\n        <span class=\"msg_info_stitle\"> 4 days ego </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"msg_info_menu\">\r\n        <i class=\"dots-menu\"></i>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/activity/activity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_server_service__ = __webpack_require__("../../../../../src/app/services/server.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActivityComponent = (function () {
    function ActivityComponent(serverService) {
        this.serverService = serverService;
        this.title = 'Activity';
    }
    ActivityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serverService
            .getMsg().subscribe(function (res) {
            var data = res;
            _this.messages = data;
            console.log(_this.messages);
        });
    };
    ActivityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[app-activity]',
            template: __webpack_require__("../../../../../src/app/components/activity/activity.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/activity/activity.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_server_service__["a" /* ServerService */]])
    ], ActivityComponent);
    return ActivityComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/graph/graph.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title-holder {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.title{\r\n  margin-left:30px;\r\n  margin-top:10px;\r\n  color: #8492af;\r\n}\r\n\r\n.calendar{\r\n  margin-right:15px;\r\n}\r\n\r\n.title h3{\r\n  font-weight: bold;\r\n}\r\n\r\n.elips{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  border: 1px solid gray;\r\n  border-radius: 20px;\r\n  padding: 7px;\r\n  width:140px;\r\n  cursor:pointer;\r\n}\r\n\r\n.caret{\r\n  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAAV0lEQVQYlY2N0Q2AIBBDHwyA/zgHruexHnswABOUHzSiiaFJf3qvPRdiMuBkTdm3WgzIK3CrxTzAQikPBn8lP6UbBkDS5BCThZg0bO+7k/SZ3PbDHl8ndawWOwMFZ0z4AAAAAElFTkSuQmCC') no-repeat center;\r\n  width: 12px;\r\n  height: 6px;\r\n  display: inline-block;\r\n\r\n}\r\n\r\n.g1{\r\n  -webkit-box-flex: 1;\r\n      -ms-flex-positive: 1;\r\n          flex-grow: 1;\r\n  padding-left:5px;\r\n}\r\n\r\n.elips b{\r\n  font-size: 1em;\r\n\r\n}\r\n\r\n.gray {\r\n  color:lightgray;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/graph/graph.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"title-holder\">\r\n  <div class=\"title\">\r\n    <h3>{{title}}</h3>\r\n  </div>\r\n  <div class=\"calendar\">\r\n      <span class=\"elips \">\r\n        <b>Period:</b>\r\n        <b class=\"gray g1\">last year</b>\r\n        <i class=\"caret\"></i>\r\n      </span>\r\n  </div>\r\n</div>\r\n<div style=\"display: block;\">\r\n  <canvas baseChart width=\"100%\" height=\"50%\"\r\n          [datasets]=\"lineChartData\"\r\n          [labels]=\"lineChartLabels\"\r\n          [options]=\"lineChartOptions\"\r\n          [colors]=\"lineChartColors\"\r\n          [legend]=\"lineChartLegend\"\r\n          [chartType]=\"lineChartType\"\r\n          (chartHover)=\"chartHovered($event)\"\r\n          (chartClick)=\"chartClicked($event)\"></canvas>\r\n</div>\r\n\r\n<!--<div class=\"col-md-6\" style=\"margin-bottom: 10px\">-->\r\n<!--<table class=\"table table-responsive table-condensed\">-->\r\n<!--<tr>-->\r\n<!--<th *ngFor=\"let label of lineChartLabels\">{{label}}</th>-->\r\n<!--</tr>-->\r\n<!--<tr *ngFor=\"let d of lineChartData\">-->\r\n<!--<td *ngFor=\"let label of lineChartLabels; let j=index\">{{d && d.data[j]}}</td>-->\r\n<!--</tr>-->\r\n<!--</table>-->\r\n<!--<button (click)=\"randomize()\">CLICK</button>-->\r\n<!--</div>-->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/graph/graph.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GraphComponent = (function () {
    function GraphComponent() {
        this.title = 'Report';
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Sales' },
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
    }
    GraphComponent.prototype.randomize = function () {
        var _lineChartData = new Array(this.lineChartData.length);
        for (var i = 0; i < this.lineChartData.length; i++) {
            _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
            for (var j = 0; j < this.lineChartData[i].data.length; j++) {
                _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
            }
        }
        this.lineChartData = _lineChartData;
    };
    // events
    GraphComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    GraphComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    GraphComponent.prototype.ngOnInit = function () {
    };
    GraphComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[app-graph]',
            template: __webpack_require__("../../../../../src/app/components/graph/graph.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/graph/graph.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GraphComponent);
    return GraphComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/main-nav/main-nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.logo {\r\n  background: url('data:image/png;base64,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') no-repeat center;\r\n  width: 181px;\r\n  height: 105px;\r\n  display: inline-block;\r\n  margin-left: 40px;\r\n}\r\n\r\n.home_icon {\r\n  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAVCAYAAABc6S4mAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAAZNJREFUOI2tlT9KA0EUxn+zJpaJNvEClip6A1NpYSFMIOAJDHiEARXmAgGJOYEgOGBhYSqDF1BM6wlszFpqdCz2BdZ1dSerD4bdee973/vLriJQtPXLwJVcd5xRjyF+KpB8A7gGGqJ6AradUXdFvlEAeRMYCvm9nAYwFFv5ANr6FjAAahJkU85QdAPBzB5AW98BzoEq4IAtZ1TsjIqBLdFVgXPBhgfQ1h8BPbH3gbYz6nVql/e22CKgJz7f5MuQtfVzwAmwL6pjZ1SuYyaZQ7n2gQNn1Pu3ANr6eeAM0MCHAE9/I0/5diSxiKR1e9OKlQDqwCXJAN8EcBFCngrSkgSrJEuw64yKlbZ+iWTH14EXMdzMQp4K0pREayTrvB0Bt0KOGLplyEW6woFw3kbAJANaLcOsrV/I8Z1UgBWgLornMuQ5sijPuOKM8sBYsvgXdmfUePpeKQJr6x/4uW0jZ9Tab/5F36K8vqalcF6FFaRkMXMPmldwgHRfIXxehf+Dv0puBdr64HUqwmYrGP2Ay9MHYT8BZaiFKaIXuMQAAAAASUVORK5CYII=') no-repeat center;\r\n  width: 24px;\r\n  height: 21px;\r\n  display: inline-block;\r\n}\r\n\r\n.user_icon {\r\n  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAAaxJREFUOI2t0z1rFFEUxvHfXcVCOxuxUCwkWwgWgl9AiBK1G2wE09hFSJNyR0ScsJWNkNLGhTQynVFMiF9AsZBYRCxEqzR2WizoWOzZZDOZWYh6YBg4L//zzL3PJC2RFdUJLOI2upHexiqelHn60TSXWmDnsYaZln2fcKPM0+d6odOibAz7hnmcjmc+cjNYi959cbRh++IE7HKZp52J2iArqnW8jZ5F9KcqNDoz6NVgIHK9Wm8zMCuqZO8CNhqWqdW69UKTwn+KfcAyT5WRNWB2yty4tl0vNClcjfdyVlSn6sXILdd6d+OAD8MK7+3ddM/emc0G7IyRFy/VDd5m7ItYxwGFETu4Wubpw1SFccv38BAnW2Dj+I4HWImz3w/Miuo4nuN6pL7iKV7jS+TO4Rru4mzkXuJWmaefu8CsqI7hFa7gF+7jcZmnYZO06F/CIxzBG8yVeRqOf71+wIa4WeZpmqnFon5WVO/wImb7WEpZUXXxMTbNl3kaTIM1qL2DZ/FlFzpYCNjmYWGhdoDNYCx0MBe1lcPCJmI8O5eyovqtxY9/EVUHW/8JBlt/AGqagHw1JuetAAAAAElFTkSuQmCC') no-repeat center;\r\n  width: 24px;\r\n  height: 21px;\r\n  display: inline-block;\r\n}\r\n\r\n.calendar_icon {\r\n  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAAKNJREFUOI3tkDEOwjAMRZ8rJjbEBbhAuUyuk9HXyWWag5QuMJqBgEqVNIAixMBf4q8vv9iGjJza4NSGXFbLN4WevgSr5ZJ+qgFeVewawgD6+coHYEr1mN5doTGXj/B8wyl4OQE4tQhw90vlcqfGEvhQ8HIsTFbNu7XGT9QcmF3ZqZ1TuQ9eLjX//QmDl+07fq7/DW/6qRs2B4pTs5bADogNefEKIaxN+7uRR7QAAAAASUVORK5CYII=') no-repeat center;\r\n  width: 24px;\r\n  height: 21px;\r\n  display: inline-block;\r\n}\r\n\r\n.workflow_icon {\r\n  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAAF5JREFUOI3t07ENgDAMRNHviAUYJNNkHUqvwzJ4ENjA6RAFFbkGKb9z8+TmrHkeQEVTFCEGUJfHsQ5iJ8AN7ptdI1rzBKAM/fSSHLTmmUqwACH0lNZfsjm9z83pyYoOEL8a/zFP5WIAAAAASUVORK5CYII=') no-repeat center;\r\n  width: 24px;\r\n  height: 21px;\r\n  display: inline-block;\r\n}\r\n\r\n.stats_icon {\r\n  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAAgZJREFUSIm1lTFoFUEQhr+9vNgYtDQINgoJUaOI2ijYqE1QmxUrtXgK6UTsErZcYyM2VgGTIsFG2MJErKwEtUlQiBoUtBFEsZNACJGsxc7GeZd7LyGcA4+Z3Zl3/+58w52hBrM+FsACYICjwZnVnCvqEAD6gIPAAHBJJ+oSOK7i4f8tcM76uL9ugRPil0kcbtYmIICPyfKu+Kb1sbsWARLgHmAJuA/8BPYgsDcVsD52WR8/yq9RUZL7/zY4swJMynp4SwLAKdL4DQBDHQTmxD8CIgJ7KwIXVXyjIp8BzwMEZ74CLxDYDQDr4w4pMMDJ4MyyesAFFQ9ZH3uDMz/kfxrwvKobB84DzXyDJnAYOATcyVXWxwOk1vwB3gEN4Jp6kAb8We3PAO+BX4WcflQlR6yPeyXO7XkJPJRYt0kDXsub8i46EpwZLOT0+4BvwBtgJzBWEpgFnshJ+62Pp0sCGfC6BWcipCkakb0x4BZpAq5bH88CZ7JAcGZJRJBDQQlwlRXAb+ADMBmcmQOmSLADqeeLwZkvUp9n/Ir1cRfVgFusEZwZLO2NApeB3bJ+pq79yvr4CegHHNWAN9ygxYIz34F7amu2VDIh/rb4FsCbCog9ILVtAXhdyk2TxrZb1hsAazOdku3M+viUf1+uq8GZx+1qt/s2nVBxW8CQpmQ79hxYBNboABjgL8yQkOxM47+TAAAAAElFTkSuQmCC') no-repeat center;\r\n  width: 24px;\r\n  height: 21px;\r\n  display: inline-block;\r\n}\r\n\r\n.box {\r\n  height: 100px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  border-left: 10px solid transparent;\r\n  cursor: pointer;\r\n}\r\n\r\n.box:hover,\r\n.box.active{\r\n   background: #122143;\r\n   border-left: 10px solid #5584ff;\r\n}\r\n\r\n.box .holder:first-child{\r\n  margin-left: 40px;\r\n}\r\n\r\n.box .holder {\r\n  margin-left: 20px;\r\n  height: 21px;\r\n}\r\n\r\n.box span {\r\n  font-size: 1.4em;\r\n  line-height: 1em;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main-nav/main-nav.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<section>\r\n  <div class=\"logo\">\r\n\r\n  </div>\r\n  <div class=\"box active\">\r\n    <div class=\"holder\">\r\n      <i class=\"home_icon\"></i>\r\n    </div>\r\n    <div class=\"holder\">\r\n      <span>Home</span>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"box\">\r\n    <div class=\"holder\">\r\n      <i class=\"workflow_icon\"></i>\r\n    </div>\r\n    <div class=\"holder\">\r\n      <span>Workflow</span>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"box\">\r\n    <div class=\"holder\">\r\n      <i class=\"calendar_icon\"></i>\r\n    </div>\r\n    <div class=\"holder\">\r\n      <span>Calendar</span>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"box\">\r\n    <div class=\"holder\">\r\n      <i class=\"stats_icon\"></i>\r\n    </div>\r\n    <div class=\"holder\">\r\n      <span>Statistics</span>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"box\">\r\n    <div class=\"holder\">\r\n      <i class=\"user_icon\"></i>\r\n    </div>\r\n    <div class=\"holder\">\r\n      <span>Users</span>\r\n    </div>\r\n  </div>\r\n\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/main-nav/main-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainNavComponent = (function () {
    function MainNavComponent() {
    }
    MainNavComponent.prototype.ngOnInit = function () {
    };
    MainNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[app-main-nav]',
            template: __webpack_require__("../../../../../src/app/components/main-nav/main-nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main-nav/main-nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainNavComponent);
    return MainNavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/messages/messages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flex-between{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.info_bar{\r\n  height:90px;\r\n  padding-left:15px;\r\n  padding-right:15px;\r\n}\r\n\r\n.header{\r\n  font-size: 24px;\r\n  font-weight: bold;\r\n}\r\n\r\n.info_holder{\r\n  height:110px;\r\n  padding-left:15px;\r\n  border:1px solid rgba(132, 146, 175, 0.1);\r\n}\r\n\r\n.msgs span{\r\n}\r\n\r\n.msg_info_holder{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex-positive: 1;\r\n          flex-grow: 1;\r\n  margin-left:20px;\r\n}\r\n\r\n@media (max-width: 1400px){\r\n  .task_info_menu{\r\n    margin:0;\r\n  }\r\n  .msg_info_holder{\r\n    margin:0;\r\n  }\r\n\r\n}\r\n\r\n.dots-menu{\r\n  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAhCAYAAAAVp7H4AAAAhElEQVQoke3QvQnCUBiF4Sc3OoHgBukdJYVKlsgEgeAPTuAUxsYd7FwgQkaxuDa3TOqA+DaneDnfByeLMbpcH3u0KDDg1NRlly9Xmy06rJGn3D1f7z7gYJw2pFNjFCH9GGMIOE7Ic2jq8o4KPT4pq6Yub1mMcaJImDQzyQX+w88gf2j4L7fZS63sVcn5AAAAAElFTkSuQmCC') no-repeat center;\r\n  width: 40px;\r\n  height: 33px;\r\n  display: inline-block;\r\n  margin: 0 20px;\r\n  cursor: pointer;\r\n}\r\n\r\n.msg-logo{\r\n  background: url('data:image/png;base64,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') no-repeat center;\r\n  width: 40px;\r\n  height: 33px;\r\n  display: inline-block;\r\n  margin: 0 30px;\r\n}\r\n\r\n.arrow-l{\r\n  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAOCAYAAAAi2ky3AAABEElEQVQokZXTPyjEcRjH8dfdySB1RTarlEwGUcdgcgadQd1ARqIbzLe61eDPaFBMBiSUwULZ3GZgUrdjMVgYfj86Xz/357M9PZ/ePd/P83xTG1vHEpTBLlaSmvUqlwogndDrxAGWm0Hq1RHUXTjCTDuQcKIsLgPIGLrbAfXhGpNB/w6vuMFqI2ga/bFx5B9PBjlR+M9YQyoJdIrBVsZHD3ZwLoriF6iIWougb+VxJVrOD+gJ43hsEzaKvXqQeKIcqoF5FvNYF2VUxWddv1jZPslDKrjsLM4wEdd/QhUtZymG9+IBw+Flv2EaFw2eVEMFAzjEEKbCy4Z3zGG/AQxesIB7LCb9NfiITU1VLhU2cfsFFFUvYNZSV7kAAAAASUVORK5CYII=') no-repeat center;\r\n  width: 18px;\r\n  height: 14px;\r\n  display: inline-block;\r\n  margin: 5px 5px 0 5px;\r\n  cursor: pointer;\r\n}\r\n\r\n.gear{\r\n  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABVUlEQVQ4jY3TT0uVURAG8J/XS0It+gYRCYFE5B+QIEo3BUJEiwgSXFQLA5d9hdYtIqiIFikIrkQCRaGQLnoJcnUXuugzqG1EJLou3nNqeDkXHHhhZs4zz8xz5j19r94s62F3sJD8J9gugRrBP49bIX6OS+mbDvlhnMtBMxRvJIIWBjAeiuZwFX8whTU8xEkmGA/db/eQdDf4UxhDO0vYTJ3Pal/RjhLgQg30C59V9/QUl8NZf3aauI8ZjAbAHm7id4rfYieQTOId5hv4gse17u9DMezjUw3zAqsNZftbyHVLwAYmMF/Lz6pWm+0intUwH/Coie+qDYzgejq8hp/4qLqwWVwJxetJwr8tdAtjD+F1aWwcRwlUm7jRA1yyBxmfCb5hK02xovxTtfAj+WvY5b+EI9zDIDopt6h6hVRSXiZ/UvUyT+IEmaQT4iUc4iCRZdvMxXAKMcs//sAbJiwAAAAASUVORK5CYII=') no-repeat center;\r\n  width: 16px;\r\n  height: 16px;\r\n  display: inline-block;\r\n  cursor: pointer;\r\n\r\n}\r\n\r\n.msg_info_title {\r\n  font-size: 1.1em;\r\n  text-transform: capitalize;\r\n  font-family: \"Roboto\";\r\n  font-weight: bold;\r\n  color: rgb(14, 26, 53);\r\n  line-height: 1.8em;\r\n  max-width: 170px;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.msg_info_stitle{\r\n  font-size: 1em;\r\n  font-family: \"Roboto\";\r\n  line-height: 1.8em;\r\n  max-width: 170px;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.msg_info_time{\r\n  font-size: 1.1em;\r\n  text-transform: capitalize;\r\n  font-family: \"Roboto\";\r\n  color: lightgray;\r\n  line-height: 1.8em;\r\n}\r\n\r\nh6{\r\n  font-weight: bold;\r\n}\r\n\r\n.roundNumber, .roundNumber-big{\r\n  border-radius: 50%;\r\n  width: 45px;\r\n  height: 45px;\r\n  -ms-flex-preferred-size: 45px;\r\n      flex-basis: 45px;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex-positive: 1;\r\n          flex-grow: 1;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  font-weight:bold;\r\n  color: #fff;\r\n  font-size:1.4em;\r\n  margin:0 5px\r\n}\r\n\r\n.roundNumber-big{\r\n  width: 50px;\r\n  height: 50px;\r\n  font-size:1.6em;\r\n\r\n}\r\n\r\n.blue{\r\n  background: #5384ff;\r\n}\r\n\r\n.pink{\r\n  background: #f83c7b;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-between info_bar\">\r\n  <span class=\"header\">{{title}}</span>\r\n  <span style=\"display: flex;\">\r\n    <span class=\"roundNumber blue\"> 5 </span>\r\n  </span>\r\n</div>\r\n\r\n<div *ngFor=\"let m of messages; let i = index\">\r\n  <div *ngIf=\"i < 4\" class=\" \">\r\n\r\n    <div class=\"flex-between info_holder\">\r\n      <div class=\"msg-logo roundNumber-big\">\r\n      </div>\r\n      <div class=\"msg_info_holder\">\r\n        <div>\r\n          <span class=\"msg_info_title\"> {{m.name}} </span>\r\n          <span class=\"msg_info_time\"> 2 days ego </span>\r\n        </div>\r\n        <span class=\"msg_info_stitle\"> {{m.company.catchPhrase}} </span>\r\n        <div>\r\n          <i class=\"arrow-l\"></i>\r\n          <i class=\"gear\"></i>\r\n        </div>\r\n      </div>\r\n      <div class=\"msg_info_menu\">\r\n        <i class=\"dots-menu\"></i>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_server_service__ = __webpack_require__("../../../../../src/app/services/server.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = (function () {
    function MessagesComponent(serverService) {
        this.serverService = serverService;
        this.title = 'Messages';
    }
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serverService
            .getMsg().subscribe(function (res) {
            var data = res;
            _this.messages = data;
            console.log(_this.messages);
        });
    };
    MessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[app-messages]',
            template: __webpack_require__("../../../../../src/app/components/messages/messages.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_server_service__["a" /* ServerService */]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/nav-bar/nav-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section{\r\n  width:100%;\r\n  padding:0;\r\n  margin:0;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: end;\r\n      -ms-flex-pack: end;\r\n          justify-content: flex-end;\r\n\r\n}\r\n\r\n.flex-space{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  width: 400px;\r\n}\r\n\r\n.elips{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-pack: distribute;\r\n      justify-content: space-around;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  border: 1px solid #5584ff;\r\n  border-radius: 20px;\r\n  padding: 9px;\r\n  width:140px;\r\n  cursor:pointer;\r\n  color:white;\r\n  background: #5584ff;\r\n}\r\n\r\n.caret{\r\n  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAAV0lEQVQYlY2N0Q2AIBBDHwyA/zgHruexHnswABOUHzSiiaFJf3qvPRdiMuBkTdm3WgzIK3CrxTzAQikPBn8lP6UbBkDS5BCThZg0bO+7k/SZ3PbDHl8ndawWOwMFZ0z4AAAAAElFTkSuQmCC') no-repeat center;\r\n  width: 12px;\r\n  height: 6px;\r\n  display: inline-block;\r\n\r\n}\r\n\r\n.g1{\r\n  -webkit-box-flex: 1;\r\n      -ms-flex-positive: 1;\r\n          flex-grow: 1;\r\n  padding-left:5px;\r\n}\r\n\r\n.elips b{\r\n  font-size: 1em;\r\n  padding-right: 10px;\r\n\r\n}\r\n\r\n.gray {\r\n  color:lightgray;\r\n}\r\n\r\n.nav_btn{\r\n  -webkit-box-flex: 1;\r\n      -ms-flex-positive: 1;\r\n          flex-grow: 1;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  width: 100px;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n}\r\n\r\n.nav_add-btn{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-pack: distribute;\r\n      justify-content: space-around;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  width: 240px;\r\n}\r\n\r\n@media (max-width: 586px){\r\n  .nav_add-btn{\r\n  -webkit-box-pack: end;\r\n      -ms-flex-pack: end;\r\n          justify-content: flex-end;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  width: 160px;\r\n  }\r\n}\r\n\r\n.btn {\r\n  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAUCAYAAAAOTSQ2AAAArUlEQVRIie2WQQrEIAxFv+K+B+g9epP2Mi6q0F7GS2YW04IppTMRGl34ICCB4OdHo4aIIGUYJ3lRAVZjk1K6uFJuxS071h91RiWIiMW80TpvRNd8jWDOHY4Fmfnv4c6FRNgwTm/pYTigyDGdOddaK3MsvjejSWzyCABibSF3WAA4BAZBncqcM/nDn5+/5Ou3m8255BHR0OVw10TyiMv+XKQ151hb/6X/59DFlfMBU+mWRp8DvxgAAAAASUVORK5CYII=') no-repeat center;\r\n  width: 39px;\r\n  height:21px;\r\n  display: inline-block;\r\n  margin-right: 30px;\r\n}\r\n\r\n@media (max-width: 586px) {\r\n  .btn {\r\n    width: 100px;\r\n    height: 21px;\r\n    display: inline-block;\r\n    margin-left: 30px;\r\n    margin-right: 5px;\r\n  }\r\n}\r\n\r\n.nav_search-elm{\r\n  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACMElEQVRIiaXVO2gVQRQG4C83Dx9FAhoTSNIIQbCQVKbQiI0Ei9gpKiIa0BCCBAu1sRLBQrBSUqiIQSLYiIWFosTC2Kw2IhJ8dS5GUMj6wEJvYrH3hrmbvd4b/Judc+bM/8+cOXO2obVrqxx04yh2oRedmMd7PMYkPkASR3nrl9CQEWjBeZwsjavhD67hTBJHP+oVaMdd7Pjnlioxi8Ekjj7WEmjBNLZn5j/jSenbjp3oycS8wkASR9/yBJpK33MZ8nmcxk1pOpY2hAO4jPUl3xZcwvFqJ+jBO6wu+b5L0/Qyb0EJmzCDDSW7iL4kjl5nAws4FJDDqRrk8BYjgd2I4bzAAoYC+xNu1CAv4x7CHe+pJrA5sGdU5rwWpoNxb1t3/7LSLqAtsL+sgJy0ukKuNXkCc4HdsUKBrmC8gGWlWpA+/zIG0FwneYO0lZQxm8TRYp7A/cDuxFidAnul5VrGw7ygAqbwM/BdwLYa5H3SXlRGMWNXCMzhYuBbi0cYx6pMfDNG8VRlcTzHmzyBci9qxAOVOSW9tBnp++iQtpN1uWfiCsaz9xB201bcwe4qBPVgAidCkUJmt0M4q/JO8vALL3L8Y5ho6+5vKDuyP5wy2qVdcxAbpdWVSPM8LS2Mr7iNfTnrr2I0iaPFagL1orEktj9n7jpGmnImVoKitBsv4GBm7hgWC8uWrBBJHBVxWHqSrPiz/xYIRI7gVkA+nMTR5P+mqEKkrbt/GL8xncTRFPwFUfeN0LEOdvcAAAAASUVORK5CYII=') no-repeat center;\r\n  width: 24px;\r\n  height:24px;\r\n  display: inline-block;\r\n}\r\n\r\n.nav_notif{\r\n  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAkCAYAAAAHKVPcAAADJUlEQVRYhbXXX2jVZRzH8dfZzrYI3FrYbH9sKOXM2tiabVEOyZwkQRiyxJKZeGHdBN6GF4EQXXQhdFFB6Oasm2B0EUjLlbZluojWPyRKkrFBLIIksJrG6eLZOZyNc85+v3POPvC7eJ7f83l48zzf5/t9nkQqlVJGPY8n0IcNWMAMJnAe7+V0pVKpcnwHUqnURGplTS6OXeJPlGElTuEFmJnn46/54Rrzf5KsZG0tW1rZ1U1rQ8YzhEPpRqkQ7+Lwwi2GP+HcN+SbLpFgZxcH+6lOguE0fCkQBzBy6z+Ov8+VmWimthaOPUdNFcJqDFUUS4AjcGosOgD8NBs8i3oRioUYwLaZ+bAFcfXZNL/+BnoxUCzEkzA+nT8GCimF899lmruTdc09Ub0V2Ie7f7/2xY7qqirTV+MDpJXl7UvG8J3EQaisqEQ4hsUqy7sh6nY0pAFg4eZNhDxQrLK8C1EhHsxuzM6FqFpbWzxElncmCsQdOJ7dcfHyNOjYWDxElndiJYhufI9Hszs/vXAJ7OgMmTCuEtjenmmOFYJoxFm0LP/x4UfjLn31rdaGkIrj6vFONjaCKXxQCOI13JXv58mRUXBoF/evjw7Q1hI8i3oLKmvWNOcaeydOI2/8/3jlF81N63R1tHnsAf76O5MFcyqRoP8hXt6TqRvDeLUQxDNCai6os2Ofu2d9o672Tbrvo2dTyKA3/g1fdRXr6undzEtPhRiqDGs/JLuU1zY9nGv+M8ItKZL27d3t8OBevVs7Vhp6UdiCM9md+SB+xr1RIdJ6841j7wzuf7oG2yy93k3iAkZy+XJB1OMP4STF1Ynrc1NH45pynY6tRQJA5Gq4EkRREy2qs665J05RzAvRVwLE7Xgkrmk5dT22lwABA3XNPZPpxvW5qRUNy1fiCG4rEWI/YtXXbIh2vFIiACHVnxAjuCuELRkUnmlrygBByIaj2BxlcBJNQh4vt/bghgiZt5R3R9mUxDz6V2n+AnV1KcQ/OLdKEJEUNbuNyh20p+UpSqsBkcTOHP2vlwpA9MA8itllfW9jvBwQUVfiKrbgWSEZfSncD8qi/wHWNh/5PPT5ZgAAAABJRU5ErkJggg==') no-repeat center;\r\n  width: 30px;\r\n  height:45px;\r\n  display: inline-block;\r\n}\r\n\r\n.nav_login{\r\n  background: url('data:image/png;base64,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') no-repeat center;\r\n  width: 88px;\r\n  height: 54px;\r\n  display: inline-block;\r\n}\r\n\r\n.nav-email{\r\n  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAXCAYAAACFxybfAAACWUlEQVRIib3WW4hNcRTH8c8cckkOaiQ8UBQmUjRj3HJJIhQmhBcmUkQKIQ8uCfPgbRIJw4vcMrkmuZUMU4oSwouHKYNEU+TuYe1Tp9MxM8zl97jX2vv//a//+q39L0j3K+6D2xiqffUDVZ/qalemUI/t+NLOEC+xB1I4jPOYhDftBHANY1HQo3/JvhRW4ApeYAwetzHAAczCcDzA0FQSmIYaUZkJuNQGi//CWqzBAtxAoWTRjIahFiMwF/tbEaABs1GJbTiJzplgKie5N26iDBuxSnRxS/Qa48TOq7A7N6Fjnpe64BQGYS9e4Rx6/gdADebhm2jGyfmSciuRrT04grsoTWD+RScxFd0SmLwATUFAOa6KWVKKO80E2IGlGC0cMKSx5KYgiN3UII3pONZI7lcswU4skuWAlkIQI/1B8sFybMHvnJy3mCKOYakcB7QGxHdsxXsUowLz8TmJP0GJsPhYMYFPN/PbzYL4II6hGtdxX1i3GhOF7cbjHc7iHjZgsTx2zKd8Fs3WczFkOiaLD06eHxQW3ozl6IOLokqwSxxhOZ7iqLB+XjVWieuitANyADLahDMYlcSLc+JLxOC7IXql/l8hKjETC8WQ+dugKsNDDPxLfJzokwbRM4+aA/FT/GDWi+Y7pOkja0oDRJ8UiZ/jhcYgPmIGToim29DCxbOVxmUsE2O8IjuY2eUrzBGWu4uRrQiQUUoccxHW4Zm4UEnhlrjMpMVAaguAbK0WVakW0/htQbpfcSdxf6hC1zYGyNZTYf+6Dp279y/EcfRtRwDohe6f6mqr/wDzxH/wMF56XQAAAABJRU5ErkJggg==') no-repeat center;\r\n  width: 34px;\r\n  height:24px;\r\n  display: inline-block;\r\n}\r\n\r\n.plus{\r\n  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAALUlEQVQokWP8//8/AxbQgEbDARM21fjAINTA+P///waa24BNvAGNJt+GQagBAHdZC40hu1VvAAAAAElFTkSuQmCC') no-repeat center;\r\n  width: 12px;\r\n  height:12px;\r\n  display: inline-block;\r\n}\r\n\r\n.pointer{\r\n  cursor: pointer;\r\n}\r\n\r\n.not-num{\r\n  position: relative;\r\n  right: -17px;\r\n  top: 4px;\r\n  color: #fff;\r\n  font-size: 10px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <i class=\"btn\" (click)=\"toggle($event)\"></i>\r\n  <div class=\"nav_btn pointer\">\r\n    <i class=\"nav_search-elm pointer\"></i>\r\n  </div>\r\n\r\n  <div class=\"flex-space\">\r\n    <div class=\"calendar pointer\">\r\n      <span class=\"elips \">\r\n        <i class=\"plus\"></i>\r\n        <b>Add project</b>\r\n      </span>\r\n    </div>\r\n\r\n    <div class=\"nav_add-btn\">\r\n      <i class=\"nav-email pointer\"></i>\r\n      <i class=\"nav_notif pointer\"><span class=\"not-num\">5</span></i>\r\n      <i class=\"nav_login pointer\"></i>\r\n    </div>\r\n\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavBarComponent = (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.navHide = function () {
        if (document.documentElement.clientWidth < 1200) {
            document.body.classList.add('active');
        }
    };
    NavBarComponent.prototype.ngOnInit = function () {
        this.navHide();
    };
    NavBarComponent.prototype.toggle = function () {
        console.log(event);
        if (document.body.classList.length > 0) {
            document.body.classList.remove('active');
        }
        else {
            document.body.classList.add('active');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NavBarComponent.prototype, "navHide", null);
    NavBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__("../../../../../src/app/components/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/nav-bar/nav-bar.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/sales/sales.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title-holder {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.title{\r\n  margin-left:10px;\r\n  margin-top:10px;\r\n  color: #8492af;\r\n}\r\n\r\n.title h3{\r\n  font-weight: bold;\r\n}\r\n\r\n.flex-between{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n}\r\n\r\n.flex-space{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  padding-top: 40px;\r\n}\r\n\r\n@media (max-width: 1200px){\r\n  .flex-space{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    padding-top: 0;\r\n    padding-bottom: 30px;\r\n  }\r\n}\r\n\r\n.flex-between-column{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n}\r\n\r\n@media (max-width: 1200px){\r\n  .flex-between-column{\r\n    margin-right: 20px;\r\n  }\r\n}\r\n\r\n@media (max-width: 586px) {\r\n  #sale-pie {\r\n    max-height: 400px !important;\r\n    height: 250% !important;\r\n    width: 130px !important;\r\n  }\r\n}\r\n\r\ncart{\r\n  position: relative;\r\n  right: 40px;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n#sale-pie :after{\r\n  content: '1600';\r\n  display: inline-block;\r\n  font-weight: bold;\r\n  font-size: 1.7em;\r\n\r\n}\r\n\r\n.cart li {\r\n  padding-top:10px;\r\n  font-size: 1.5em;\r\n  font-weight: bold;\r\n  font-family: Roboto, sans-serif;\r\n  color: rgb(132, 146, 175);\r\n  line-height: 1.2;\r\n}\r\n\r\n/*.flex-between canvas{*/\r\n\r\n/*position: relative;*/\r\n\r\n/*right:50px;*/\r\n\r\n/*}*/\r\n\r\n.calendar{\r\n  margin-right:10px;\r\n}\r\n\r\n.elips{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  border: 1px solid gray;\r\n  border-radius: 20px;\r\n  padding: 7px;\r\n  width:140px;\r\n  cursor:pointer;\r\n}\r\n\r\n.caret{\r\n  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAAV0lEQVQYlY2N0Q2AIBBDHwyA/zgHruexHnswABOUHzSiiaFJf3qvPRdiMuBkTdm3WgzIK3CrxTzAQikPBn8lP6UbBkDS5BCThZg0bO+7k/SZ3PbDHl8ndawWOwMFZ0z4AAAAAElFTkSuQmCC') no-repeat center;\r\n  width: 12px;\r\n  height: 6px;\r\n  display: inline-block;\r\n\r\n}\r\n\r\n.g1{\r\n  -webkit-box-flex: 1;\r\n      -ms-flex-positive: 1;\r\n          flex-grow: 1;\r\n  padding-left:5px;\r\n}\r\n\r\n.elips b{\r\n  font-size: 1em;\r\n\r\n}\r\n\r\n.gray {\r\n  color:lightgray;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sales/sales.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-between-column\">\r\n\r\n  <div class=\"title-holder\">\r\n    <div class=\"title\">\r\n      <h3>Your Sales</h3>\r\n    </div>\r\n    <div class=\"calendar\">\r\n      <span class=\"elips \">\r\n        <b>Period:</b>\r\n        <b class=\"gray g1\">last year</b>\r\n        <i class=\"caret\"></i>\r\n      </span>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"flex-space\">\r\n    <div style=\"display: block\">\r\n      <canvas baseChart max-height=\"400px\" height=\"250%\" id=\"sale-pie\"\r\n              [data]=\"doughnutChartData\"\r\n              [chartType]=\"doughnutChartType\"\r\n              (chartHover)=\"chartHovered($event)\"\r\n              (chartClick)=\"chartClicked($event)\">\r\n\r\n      </canvas>\r\n    </div>\r\n    <ul class=\"cart\">\r\n      <li *ngFor=\"let n of doughnutChartLabels\">\r\n        {{n}}\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/sales/sales.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SalesComponent = (function () {
    function SalesComponent() {
        // Doughnut
        this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
        this.doughnutChartData = [350, 450, 100];
        this.doughnutChartType = 'doughnut';
    }
    // events
    SalesComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    SalesComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    SalesComponent.prototype.ngOnInit = function () {
    };
    SalesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[app-sales]',
            template: __webpack_require__("../../../../../src/app/components/sales/sales.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/sales/sales.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SalesComponent);
    return SalesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/tasks/tasks.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flex-between{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.info_bar{\r\n  height:90px;\r\n  padding-left:15px;\r\n  padding-right:15px;\r\n}\r\n\r\n.header{\r\n  font-size: 24px;\r\n  font-weight: bold;\r\n}\r\n\r\n.info_holder{\r\n  height:110px;\r\n  padding-left:15px;\r\n  border:1px solid rgba(132, 146, 175, 0.1);\r\n}\r\n\r\n.tasks span{\r\n}\r\n\r\n.task_info_holder{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex-positive: 1;\r\n          flex-grow: 1;\r\n  margin-left:20px;\r\n}\r\n\r\n.dots-menu{\r\n  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAhCAYAAAAVp7H4AAAAhElEQVQoke3QvQnCUBiF4Sc3OoHgBukdJYVKlsgEgeAPTuAUxsYd7FwgQkaxuDa3TOqA+DaneDnfByeLMbpcH3u0KDDg1NRlly9Xmy06rJGn3D1f7z7gYJw2pFNjFCH9GGMIOE7Ic2jq8o4KPT4pq6Yub1mMcaJImDQzyQX+w88gf2j4L7fZS63sVcn5AAAAAElFTkSuQmCC') no-repeat center;\r\n  width: 40px;\r\n  height: 33px;\r\n  display: inline-block;\r\n  margin: 0 20px;\r\n  cursor: pointer;\r\n}\r\n\r\n.clock_pink{\r\n  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAABc0lEQVQ4jZXUMUvbQRgG8F+OoJNQCRm7iGBBnNyCu+LgR4i1X6AWnCpmUEdRs7qIgnNBENzFdHK0EDDQrYOEDi5OjcNd9PyTv9gXjjvunvfhvXue9yqPC5sKMYE1rGAWNfRxi3Mc42EIHr/aFQoETfRwgDGc4nuax9J+L+Geo5qtt7GFS6yjWywRMzjECabRwnMlzUTQxnJGMIm5jKSbztsJ34TK48LmRCrxJgEGWVILnzFVqCjgAvOYCuIj1tIVBiPAxXeDfwlfw5cgqnBd8gZvRRcdrARRxp9vgAM+ZCMXo4PZkEq6LyEY4CP+ZuMsO79HrSoaqV5CcoTfqGR7N9m6jn5VdGKjhOSP6ImyaOA2iFZuiEb6n5hJeedB7IW+6MRRco6KIBquj+MgNtMGlrD/DqKQcIvYGL/afRjKdSr2whY+4avy3mkngp2U90rzFu6wh1+iBzqijHXx/o10hdUhQZFkWNEPL/9J0+v/5JvCfwJPlUJVthRjnIYAAAAASUVORK5CYII=') no-repeat center;\r\n  width: 17px;\r\n  height: 17px;\r\n  display: inline-block;\r\n}\r\n\r\n.task_info_title {\r\n  font-size: 1.4em;\r\n  text-transform: capitalize;\r\n  font-family: \"Roboto\";\r\n  font-weight: bold;\r\n  color: rgb(14, 26, 53);\r\n  line-height: 1.8em;\r\n  max-width: 170px;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n\r\n}\r\n\r\n.task_info_stitle{\r\n  font-size: 1em;\r\n  font-family: \"Roboto\";\r\n  color: rgb(248, 60, 123);\r\n  line-height: 1.8em;\r\n  position: relative;\r\n  top: -4px;\r\n  margin-left: 5px;\r\n  max-width: 170px;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\nh6{\r\n  font-weight: bold;\r\n}\r\n\r\n.roundNumber, .roundNumber-big{\r\n  border-radius: 50%;\r\n  width: 45px;\r\n  height: 45px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  font-weight:bold;\r\n  color: #fff;\r\n  font-size:1.4em;\r\n  margin:0 5px\r\n}\r\n\r\n.roundNumber-big{\r\n  font-size:1.6em;\r\n\r\n}\r\n\r\n.blue{\r\n  background: #5384ff;\r\n}\r\n\r\n.pink{\r\n  background: #f83c7b;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tasks/tasks.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-between info_bar\">\r\n  <span class=\"header\">{{title}}</span>\r\n  <span style=\"display: flex;\">\r\n    <span class=\"roundNumber blue\" *ngIf=\"tasks\">  {{tasks.length/10}} </span>\r\n    <span class=\"roundNumber pink\" *ngIf=\"tasks\">  {{tasks.length/5}} </span>\r\n  </span>\r\n</div>\r\n\r\n<div *ngFor=\"let t of tasks; let i = index\">\r\n  <div *ngIf=\"i < 4\" class=\" \">\r\n\r\n    <div class=\"flex-between info_holder\">\r\n      <div class=\"roundNumber-big blue\">\r\n        N\r\n      </div>\r\n      <div class=\"task_info_holder\">\r\n        <span class=\"task_info_title\"> {{t.title}} </span>\r\n        <div>\r\n          <i class=\"clock_pink\"></i>\r\n          <span class=\"task_info_stitle\"> {{t.completed}} </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"task_info_menu\">\r\n        <i class=\"dots-menu\"></i>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/tasks/tasks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_server_service__ = __webpack_require__("../../../../../src/app/services/server.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TasksComponent = (function () {
    function TasksComponent(serverService) {
        this.serverService = serverService;
        this.title = 'Tasks';
        this.lenToDo = 0;
    }
    TasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serverService
            .getTasks().subscribe(function (res) {
            var data = res;
            _this.tasks = data;
            console.log(_this.tasks);
            // this.tasks.len = this.tasks.length;
        });
        this.taskCompleted();
        this.date = this.dateBuilder(2012, 1, 0);
    };
    TasksComponent.prototype.taskCompleted = function () {
        if (this.tasks) {
            for (var i in this.tasks) {
                if (this.tasks[i].completed) {
                    this.lenToDo++;
                }
            }
            console.log(this.lenToDo);
            debugger;
        }
    };
    TasksComponent.prototype.dateBuilder = function (y, d, m) {
        var newDate = new Date(y, d, m);
        return newDate;
    };
    TasksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[app-tasks]',
            template: __webpack_require__("../../../../../src/app/components/tasks/tasks.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tasks/tasks.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_server_service__["a" /* ServerService */]])
    ], TasksComponent);
    return TasksComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/server.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServerService = (function () {
    function ServerService(http) {
        this.http = http;
    }
    ServerService.prototype.getTasks = function () {
        // return this.tasks;
        return this.http.get('https://jsonplaceholder.typicode.com/todos');
    };
    ServerService.prototype.getMsg = function () {
        return this.http.get('https://jsonplaceholder.typicode.com/users');
    };
    ServerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ServerService);
    return ServerService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map