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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  align-items: center;\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n  background-color: #f5f5f5;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center\">\n  <h1 class=\"display-4\">Izračun plače za leto {{year}}</h1>\n  <p class=\"lead\">Za izračun plače vpišete samo 3 podatke: znesek bruto plače, znesek prevoza in malice ter število\n    vzdrževanih članov (npr. otrok). </p>\n</div>\n<app-salaryform></app-salaryform>"

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
        this.year = "2018";
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
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
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
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

module.exports = ".form-signin {\r\n  width: 100%;\r\n  max-width: 330px;\r\n  padding: 15px;\r\n  margin: auto;\r\n}\r\n.form-signin .form-control {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  height: auto;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/salaryform/salaryform.component.html":
/*!******************************************************!*\
  !*** ./src/app/salaryform/salaryform.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-signin\">\n\n\n  <label for=\"inputBruto\" class=\"sr-only\">Bruto plača</label>\n  <input (input)=\"calculate()\" type=\"text\" [(ngModel)]=\"salary.bruto\" id=\"inputBruto\" name=\"inputBruto\" class=\"form-control\"\n    placeholder=\"bruto znesek npr. 2500\" required=\"\" autofocus=\"\">\n  <label for=\"inputTransportAndLunch\" class=\"sr-only\">Prevoz in malica</label>\n  <input (input)=\"calculate()\" type=\"text\" id=\"inputTransportAndLunch\" name=\"inputTransportAndLunch\" [(ngModel)]=\"salary.transportAndLunch\"\n    class=\"form-control\" placeholder=\"strošek prevoza in malice npr. 200\" required=\"\">\n  <label for=\"inputKidsNumber\" class=\"sr-only\">Prevoz in malica</label>\n  <input (input)=\"calculate()\" type=\"text\" id=\"inputKidsNumber\" name=\"inputKidsNumber\" [(ngModel)]=\"salary.noOfChildren\"\n    class=\"form-control\" placeholder=\"št. vzdrževanih otrok npr. 2\" required=\"\">\n  <hr>\n  <p class=\"mt-5 mb-3 text-muted\">Nakazilo na račun:</p>\n  <h2 class=\"display-4\">{{salary.neto}} €</h2>\n  <p class=\"mt-5 mb-3 text-muted\">© Izračun plače 2018</p>\n</form>"

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
            neto: ""
        };
    };
    SalaryformComponent.prototype.calculate = function () {
        var bruto = +this.salary.bruto;
        var brutoContributions = this.calculateBrutoContributions(bruto);
        var noOfChildren = +this.salary.noOfChildren;
        var transportAndLunch = +this.salary.transportAndLunch;
        var generalRelief = 275.22;
        var reliefForFamilyMembers = this.calculateReliefForFamilyMembers(noOfChildren);
        var incomeTaxBase = this.calculateIncomeTaxBase(bruto, generalRelief, reliefForFamilyMembers, brutoContributions);
        var advancePayment = this.calculateAdvancePayment(incomeTaxBase);
        var netoSalary = bruto - brutoContributions - advancePayment;
        var netoPayCheck = netoSalary + transportAndLunch;
        this.salary.neto = netoPayCheck.toString();
        console.log(this.salary);
    };
    SalaryformComponent.prototype.calculateIncomeTaxBase = function (bruto, generalRelief, reliefForFamilyMembers, brutoContributions) {
        return (bruto - (generalRelief + reliefForFamilyMembers) - brutoContributions);
    };
    SalaryformComponent.prototype.calculateBrutoContributions = function (bruto) {
        return (bruto / 100) * 22.1;
    };
    SalaryformComponent.prototype.calculateAdvancePayment = function (incomeTaxBase) {
        switch (true) {
            case incomeTaxBase <= 668.44:
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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