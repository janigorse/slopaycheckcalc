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

/***/ "./src/app/app.browser.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.browser.module.ts ***!
  \***************************************/
/*! exports provided: AppBrowserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBrowserModule", function() { return AppBrowserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppBrowserModule = /** @class */ (function () {
    function AppBrowserModule() {
    }
    AppBrowserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: "app-root" }),
                _app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]
            ]
        })
    ], AppBrowserModule);
    return AppBrowserModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"jumbotron\">\n  <div class=\"px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center\">\n    <h1 class=\"display-5\">Izračun plače za leto 2019</h1>\n    <p>\n      Za izračun plače vpišete samo 3 podatke: znesek bruto plače, znesek\n      prevoza in malice ter število vzdrževanih članov (npr. otrok). Izračun je\n      izključno informativne narave.\n    </p>\n  </div>\n</div> -->\n\n<app-salaryform></app-salaryform>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _salaryform_salaryform_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./salaryform/salaryform.component */ "./src/app/salaryform/salaryform.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _salaryform_salaryform_component__WEBPACK_IMPORTED_MODULE_4__["SalaryformComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
            providers: []
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/salaryform/salaryform.component.css":
/*!*****************************************************!*\
  !*** ./src/app/salaryform/salaryform.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-signin {\r\n  width: 100%;\r\n  max-width: 330px;\r\n  padding: 15px;\r\n  margin: auto;\r\n}\r\n.form-signin .form-control {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  height: auto;\r\n  padding: 10px;\r\n  font-size: 1 rem;\r\n}\r\n.form-check {\r\n  text-align: left;\r\n}\r\n/* The switch - the box around the slider */\r\n.switch {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 60px;\r\n  height: 34px;\r\n  float: right;\r\n}\r\n/* Hide default HTML checkbox */\r\n.switch input {\r\n  display: none;\r\n}\r\n/* The slider */\r\n.slider {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: #ccc;\r\n  transition: 0.4s;\r\n}\r\n.slider:before {\r\n  position: absolute;\r\n  content: \"\";\r\n  height: 26px;\r\n  width: 26px;\r\n  left: 4px;\r\n  bottom: 4px;\r\n  background-color: white;\r\n  transition: 0.4s;\r\n}\r\ninput.default:checked + .slider {\r\n  background-color: #444;\r\n}\r\ninput:checked + .slider:before {\r\n  -webkit-transform: translateX(26px);\r\n  transform: translateX(26px);\r\n}\r\n"

/***/ }),

/***/ "./src/app/salaryform/salaryform.component.html":
/*!******************************************************!*\
  !*** ./src/app/salaryform/salaryform.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-signin\">\n  <div class=\"form-group\">\n    <input\n      type=\"number\"\n      [(ngModel)]=\"salary.bruto\"\n      id=\"inputBruto\"\n      name=\"inputBruto\"\n      class=\"form-control\"\n      placeholder=\"bruto znesek npr. 2500\"\n      required=\"\"\n      autofocus=\"\"\n      (input)=\"calculate()\"\n    />\n  </div>\n  <div class=\"form-group\">\n    <input\n      type=\"number\"\n      id=\"inputTransportAndLunch\"\n      name=\"inputTransportAndLunch\"\n      [(ngModel)]=\"salary.transportAndLunch\"\n      class=\"form-control\"\n      placeholder=\"strošek prevoza in malice npr. 200\"\n      required=\"\"\n      (input)=\"calculate()\"\n    />\n  </div>\n  <div class=\"form-group\">\n    <input\n      type=\"number\"\n      id=\"inputKidsNumber\"\n      name=\"inputKidsNumber\"\n      [(ngModel)]=\"salary.noOfChildren\"\n      class=\"form-control\"\n      placeholder=\"št. vzdrževanih otrok npr. 2\"\n      required=\"\"\n      (input)=\"calculate()\"\n    />\n  </div>\n\n  <div class=\"form-group\">\n    <span *ngIf=\"salary.withGeneralRelief\">S splošno olajšavo</span>\n    <span *ngIf=\"!salary.withGeneralRelief\">Brez splošne olajšave</span>\n    <label class=\"switch \">\n      <input\n        type=\"checkbox\"\n        class=\"default\"\n        id=\"generalRelief\"\n        name=\"generalRelief\"\n        [(ngModel)]=\"salary.withGeneralRelief\"\n        (change)=\"calculate()\"\n      />\n      <span class=\"slider\"></span>\n    </label>\n  </div>\n\n  <hr />\n\n  <span class=\"mt-5 mb-3 text-muted\">Nakazilo na račun:</span>\n\n  <h2 class=\"display-5\">{{ salary.neto | number: \"1.0-2\" }} €</h2>\n</form>\n"

/***/ }),

/***/ "./src/app/salaryform/salaryform.component.ts":
/*!****************************************************!*\
  !*** ./src/app/salaryform/salaryform.component.ts ***!
  \****************************************************/
/*! exports provided: SalaryformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryformComponent", function() { return SalaryformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SalaryformComponent = /** @class */ (function () {
    function SalaryformComponent() {
    }
    SalaryformComponent.prototype.ngOnInit = function () {
        this.salary = {
            bruto: "",
            noOfChildren: "",
            transportAndLunch: "",
            neto: "0",
            withGeneralRelief: true
        };
    };
    SalaryformComponent.prototype.calculate = function () {
        var bruto = +this.salary.bruto;
        if (bruto > 100) {
            var brutoContributions = this.calculateBrutoContributions(bruto);
            var noOfChildren = +this.salary.noOfChildren;
            var transportAndLunch = +this.salary.transportAndLunch;
            var generalRelief = this.salary.withGeneralRelief
                ? this.calculateGeneralRelease(bruto)
                : 0;
            var reliefForFamilyMembers = this.calculateReliefForFamilyMembers(noOfChildren);
            var incomeTaxBase = this.calculateIncomeTaxBase(bruto, generalRelief, reliefForFamilyMembers, brutoContributions);
            var advancePayment = this.calculateAdvancePayment(incomeTaxBase);
            var netoSalary = bruto - brutoContributions - advancePayment;
            var netoPayCheck = netoSalary + transportAndLunch;
            this.salary.neto = netoPayCheck.toString();
        }
    };
    SalaryformComponent.prototype.calculateIncomeTaxBase = function (bruto, generalRelief, reliefForFamilyMembers, brutoContributions) {
        return (bruto - (generalRelief + reliefForFamilyMembers) - brutoContributions);
    };
    SalaryformComponent.prototype.clearInputBruto = function () {
        this.salary.bruto = null;
        this.salary.neto = "0";
    };
    SalaryformComponent.prototype.clearInputTransportAndLunch = function () {
        this.salary.transportAndLunch = null;
        this.salary.neto = "0";
    };
    SalaryformComponent.prototype.clearInputKidsNumber = function () {
        this.salary.noOfChildren = null;
        this.salary.neto = "0";
    };
    SalaryformComponent.prototype.calculateGeneralRelease = function (bruto) {
        var yearlyBruto = bruto * 12;
        switch (true) {
            case yearlyBruto < 11166.37:
                return 6519.82 / 12;
            case yearlyBruto >= 11166.37 && yearlyBruto <= 13316.83:
                return (3302.7 + (19922.15 - 1.49601 * yearlyBruto)) / 12;
            case yearlyBruto > 13316.83:
                return 3302.7 / 12;
            default:
                return 3302.7 / 12;
        }
    };
    SalaryformComponent.prototype.calculateBrutoContributions = function (bruto) {
        return (bruto / 100) * 22.1;
    };
    SalaryformComponent.prototype.calculateAdvancePayment = function (incomeTaxBase) {
        switch (true) {
            case incomeTaxBase > 0 && incomeTaxBase <= 668.44:
                return incomeTaxBase * (16 / 100);
            case incomeTaxBase > 668.44 && incomeTaxBase <= 1700:
                return 106.95 + (incomeTaxBase - 668.44) * (27 / 100);
            case incomeTaxBase > 1700 && incomeTaxBase <= 4000:
                return 385.47 + (incomeTaxBase - 1700) * (34 / 100);
            case incomeTaxBase > 4000 && incomeTaxBase <= 5908.93:
                return 1167.47 + (incomeTaxBase - 4000) * (39 / 100);
            case incomeTaxBase > 5908.93:
                return 1911.95 + (incomeTaxBase - 5908.93) * 0.5;
            default:
                return 0;
        }
    };
    SalaryformComponent.prototype.calculateReliefForFamilyMembers = function (noOfChildren) {
        var child1 = 203.08;
        var child2 = 220.77;
        var child3 = 368.21;
        var child4 = 515.65;
        var child5 = 663.09;
        var nchild = 147.44;
        switch (true) {
            case noOfChildren == 1:
                return child1;
            case noOfChildren == 2:
                return child1 + child2;
            case noOfChildren == 3:
                return child1 + child2 + child3;
            case noOfChildren == 4:
                return child1 + child2 + child3 + child4;
            case noOfChildren == 5:
                return child1 + child2 + child3 + child4 + child5;
            case noOfChildren > 5:
                return (child1 +
                    child2 +
                    child3 +
                    child4 +
                    child5 +
                    (noOfChildren - 5) * nchild);
            default:
                return 0;
        }
    };
    SalaryformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-salaryform",
            template: __webpack_require__(/*! ./salaryform.component.html */ "./src/app/salaryform/salaryform.component.html"),
            styles: [__webpack_require__(/*! ./salaryform.component.css */ "./src/app/salaryform/salaryform.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SalaryformComponent);
    return SalaryformComponent;
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
/* harmony import */ var _src_app_app_browser_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .././src/app/app.browser.module */ "./src/app/app.browser.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
    .bootstrapModule(_src_app_app_browser_module__WEBPACK_IMPORTED_MODULE_0__["AppBrowserModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\IzracunPlace\izracunplace-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map