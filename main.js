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
		var e = new Error('Cannot find module "' + req + '".');
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

module.exports = "#pageWrap {\r\n  margin: 0;\r\n  width: 100%;\r\n  background-color: white ;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"pageWrap\">  \r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

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
        this.title = 'Forged Elements';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_sportfolio_sportfolio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sportfolio/sportfolio.component */ "./src/app/components/sportfolio/sportfolio.component.ts");
/* harmony import */ var _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/shop/shop.component */ "./src/app/components/shop/shop.component.ts");
/* harmony import */ var _components_sabout_sabout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sabout/sabout.component */ "./src/app/components/sabout/sabout.component.ts");
/* harmony import */ var _components_cabout_cabout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/cabout/cabout.component */ "./src/app/components/cabout/cabout.component.ts");
/* harmony import */ var _components_custom_custom_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/custom/custom.component */ "./src/app/components/custom/custom.component.ts");
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/services/services.component */ "./src/app/components/services/services.component.ts");
/* harmony import */ var _components_cportfolio_cportfolio_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/cportfolio/cportfolio.component */ "./src/app/components/cportfolio/cportfolio.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_cwelcome_cwelcome_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/cwelcome/cwelcome.component */ "./src/app/components/cwelcome/cwelcome.component.ts");
/* harmony import */ var _components_swelcome_swelcome_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/swelcome/swelcome.component */ "./src/app/components/swelcome/swelcome.component.ts");
/* harmony import */ var _components_chero_chero_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/chero/chero.component */ "./src/app/components/chero/chero.component.ts");
/* harmony import */ var _components_shero_shero_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/shero/shero.component */ "./src/app/components/shero/shero.component.ts");
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
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_sportfolio_sportfolio_component__WEBPACK_IMPORTED_MODULE_5__["SportfolioComponent"],
                _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_6__["ShopComponent"],
                _components_sabout_sabout_component__WEBPACK_IMPORTED_MODULE_7__["SaboutComponent"],
                _components_cabout_cabout_component__WEBPACK_IMPORTED_MODULE_8__["CaboutComponent"],
                _components_custom_custom_component__WEBPACK_IMPORTED_MODULE_9__["CustomComponent"],
                _components_services_services_component__WEBPACK_IMPORTED_MODULE_10__["ServicesComponent"],
                _components_cportfolio_cportfolio_component__WEBPACK_IMPORTED_MODULE_11__["CportfolioComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"],
                _components_cwelcome_cwelcome_component__WEBPACK_IMPORTED_MODULE_13__["CwelcomeComponent"],
                _components_swelcome_swelcome_component__WEBPACK_IMPORTED_MODULE_14__["SwelcomeComponent"],
                _components_chero_chero_component__WEBPACK_IMPORTED_MODULE_15__["CheroComponent"],
                _components_shero_shero_component__WEBPACK_IMPORTED_MODULE_16__["SheroComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    { path: 'ironworks',
                        component: _components_swelcome_swelcome_component__WEBPACK_IMPORTED_MODULE_14__["SwelcomeComponent"],
                        children: [
                            { path: 'welcome', component: _components_shero_shero_component__WEBPACK_IMPORTED_MODULE_16__["SheroComponent"] },
                            { path: 'shop', component: _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_6__["ShopComponent"] },
                            { path: 'portfolio', component: _components_sportfolio_sportfolio_component__WEBPACK_IMPORTED_MODULE_5__["SportfolioComponent"] },
                            { path: 'about', component: _components_sabout_sabout_component__WEBPACK_IMPORTED_MODULE_7__["SaboutComponent"] },
                            { path: 'contact', component: _components_custom_custom_component__WEBPACK_IMPORTED_MODULE_9__["CustomComponent"] },
                            { path: '', redirectTo: 'welcome', pathMatch: 'full' }
                        ]
                    },
                    { path: 'codesmith',
                        component: _components_cwelcome_cwelcome_component__WEBPACK_IMPORTED_MODULE_13__["CwelcomeComponent"],
                        children: [
                            { path: 'welcome', component: _components_chero_chero_component__WEBPACK_IMPORTED_MODULE_15__["CheroComponent"] },
                            { path: 'portfolio', component: _components_cportfolio_cportfolio_component__WEBPACK_IMPORTED_MODULE_11__["CportfolioComponent"] },
                            { path: 'about', component: _components_cabout_cabout_component__WEBPACK_IMPORTED_MODULE_8__["CaboutComponent"] },
                            { path: 'services', component: _components_services_services_component__WEBPACK_IMPORTED_MODULE_10__["ServicesComponent"] },
                            { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"] },
                            { path: '', redirectTo: 'about', pathMatch: 'full' }
                        ]
                    },
                    { path: '', redirectTo: 'ironworks', pathMatch: 'full' },
                    { path: '**', redirectTo: 'ironworks', pathMatch: 'full' }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/cabout/cabout.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/cabout/cabout.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#headshotWrap {\r\n  padding: 1rem;\r\n  border-radius: 50%;\r\n  shape-outside: border-box;\r\n  width: 70%;\r\n  max-width: 600px;\r\n  position: relative;\r\n}\r\n\r\n.headshot {\r\n  border: .2rem solid #504640;\r\n  max-width: 300px;\r\n  border-radius: 50%;\r\n}\r\n\r\n#titleWrap {\r\n  position: relative;\r\n  grid-area: title;\r\n  padding-bottom: 2rem;\r\n  margin: auto;\r\n}\r\n\r\nh1 {\r\n  color: #504640;\r\n  font-size: 4em;\r\n  text-align: center;\r\n  padding-bottom: 2rem;\r\n}\r\n\r\np {\r\n  color: #504640;\r\n}\r\n\r\n#title {\r\n  padding: 1rem 2rem;\r\n  position: absolute;\r\n  bottom: 30%;\r\n  left: 20%;\r\n}\r\n\r\n#profilePic {\r\n  width: 100%;\r\n  max-width: 1200px;\r\n  border: .2rem solid #1d1d1d;\r\n}\r\n\r\n#aboutWrap {\r\n  padding: 2rem;\r\n}\r\n\r\n.imgWrapR,\r\n.imgWrapL {\r\n  padding: 1.5rem;\r\n  border-radius: 50%;\r\n  shape-outside: border-box;\r\n  max-width: 600px;\r\n  position: relative;\r\n}\r\n\r\n.imgWrapL {\r\n  float: left;\r\n}\r\n\r\n.imgWrapR {\r\n  float: right;\r\n}\r\n\r\n.imageBorder {\r\n  max-width: 100%;\r\n  border: .1rem solid #1d1d1d;\r\n  border-radius: 100%;\r\n}\r\n\r\n@media only screen and (max-width: 60em) {\r\n  #title {\r\n    bottom: 3rem;\r\n    left: 4rem;\r\n  }\r\n  h1 {\r\n    font-size: 4em;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 40em) {\r\n  .imgWrapL,\r\n  .imgWrapR {\r\n    display: inline;\r\n    width: 100%;\r\n    shape-outside: none;\r\n  }\r\n  #title {\r\n    bottom: 5%;\r\n    left: 0;\r\n  }\r\n  h1 {\r\n    font-size: 3em;\r\n  }\r\n  #oz {\r\n    grid-area: oz;\r\n  }\r\n  #ozp {\r\n    grid-area: ozp;\r\n  }\r\n\r\n@media only screen and (max-width: 40em) {\r\n  #oz {\r\n      -ms-grid-row: 2;\r\n      -ms-grid-column: 1\r\n  }\r\n  #ozp {\r\n      -ms-grid-row: 1;\r\n      -ms-grid-column: 1\r\n  }\r\n}\r\n  #chunkWrap1Inner {\r\n    display: -ms-grid;\r\n    display: grid;\r\n        grid-template-areas: \"ozp\" \"oz\"\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 25em) {\r\n  #aboutWrap {\r\n    padding: .75rem;\r\n  }\r\n  h1{\r\n    font-size: 2rem;\r\n    padding: 0;\r\n  }\r\n  p {\r\n    padding: 2rem, 0;\r\n  }\r\n  .imgWrapL, \r\n  .imgWrapR {\r\n    padding: 0;\r\n  }\r\n  .headshot {\r\n    width: 100%;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/cabout/cabout.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/cabout/cabout.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"aboutWrap\">\n  <div id=\"chunkWrap1\">\n    <h1>Looking for a coder?</h1>\n    <div id=\"chunkWrap1Inner\">\n      <div class=\"imgWrapL\">\n        <img src=\"../../../assets/images/coding pics/headshot2.jpg\" alt=\"\" id=\"\" class=\"headshot\">\n\n      </div>\n\n\n      <p>\n        My father was etching PCB and hacking together scripts not just before it was cool, but when it was dreadfully uncool. I’m\n        proud to say that I’m a well-adjusted, second generation nerd thanks to his persistence. I began taking an interest\n        in coding in high school when I began a webcomic called Stickism. I learned enough PHP, HTML, and CSS to sustain\n        the project.</p>\n\n      <p>But it wasn’t until I was in college taking a cartography class that I gained exposure to a real coding project. Using\n        SQL and GIS, I made a database management tool that could interface with our handheld GPS units for mapping invasive\n        species along the bluffs, and our treatment methods on them.</p>\n\n      <p>That project taught me the value of being able to coordinate data effectively using coding, and I decided to learn\n        some more “friendly” languages to help me day to day. From there I picked up some Python, Ruby, and JavaScript, enough\n        to make simple programs and jazz up my personal blog.</p>\n        \n        <!-- <div class=\"imgWrapR\">\n          <img src=\"../../../assets/images/coding pics/headshot3.jpg\" alt=\"\" id=\"\" class=\"headshot\">\n  \n        </div> -->\n\n      <p>I began picking up freelancing jobs soon after that, as friends, family, and colleagues found my skills useful for\n        their own projects - a food blog here, a local organization there, a message board or two, the occasional Raspberry\n        Pi project. I began taking online courses in 2012 to supplement my field experience, and now boast proficiency in\n        multiple languages.\n      </p>\n\n\n      <p>My current passion is for front end web development, as it combines my experience in graphic design with coding to\n        make our shared internet a jazzier place to hang out. It’s been my pleasure to work with some other really talented\n        freelancers on their projects, and I’m eager to pick up more work in this area for myself!\n\n      </p>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/cabout/cabout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/cabout/cabout.component.ts ***!
  \*******************************************************/
/*! exports provided: CaboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaboutComponent", function() { return CaboutComponent; });
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

var CaboutComponent = /** @class */ (function () {
    function CaboutComponent() {
    }
    CaboutComponent.prototype.ngOnInit = function () {
    };
    CaboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cabout',
            template: __webpack_require__(/*! ./cabout.component.html */ "./src/app/components/cabout/cabout.component.html"),
            styles: [__webpack_require__(/*! ./cabout.component.css */ "./src/app/components/cabout/cabout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CaboutComponent);
    return CaboutComponent;
}());



/***/ }),

/***/ "./src/app/components/chero/chero.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/chero/chero.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/chero/chero.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/chero/chero.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/chero/chero.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/chero/chero.component.ts ***!
  \*****************************************************/
/*! exports provided: CheroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheroComponent", function() { return CheroComponent; });
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

var CheroComponent = /** @class */ (function () {
    function CheroComponent() {
    }
    CheroComponent.prototype.ngOnInit = function () {
    };
    CheroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chero',
            template: __webpack_require__(/*! ./chero.component.html */ "./src/app/components/chero/chero.component.html"),
            styles: [__webpack_require__(/*! ./chero.component.css */ "./src/app/components/chero/chero.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CheroComponent);
    return CheroComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/contact/contact.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contactWrap {\r\n  padding: 2rem;\r\n  color: #504640;\r\n  max-width: 800px;\r\n  margin: auto;\r\n}\r\n\r\n#contactInnerWrap {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: 50% 50%;\r\n      grid-template-columns: 50% 50%;\r\n  grid-gap: 1rem;\r\n  justify-content: space-between;\r\n}\r\n\r\nh1 {\r\n  font-size: 4em;\r\n  text-align: center;\r\n  padding-bottom: 1rem;\r\n}\r\n\r\n#infoWrap {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-rows: ()[4 auto];\r\n      grid-template-rows: repeat(4 auto);\r\n  justify-content: end;\r\n  text-align: end;\r\n  max-width: 800px;\r\n  border-right: .2rem solid #504640;\r\n  padding: 1rem;\r\n}\r\n\r\n.info {\r\n  font-size: 1.5rem;\r\n  font-weight: 600;\r\n}\r\n\r\n#email {\r\n  font-size: 1.5rem;\r\n  font-weight: 600;\r\n  margin-bottom: 1rem;\r\n  transition: font-size 600ms;\r\n}\r\n\r\n#email:hover {\r\n  font-size: 1.6rem;\r\n}\r\n\r\n#contact {\r\n  max-width: 200px;\r\n  margin-left: auto;\r\n}\r\n\r\n@media screen and (max-width: 40em) {\r\n  h1{\r\n    font-size: 2.5rem;\r\n  }\r\n  #contactInnerWrap {\r\n    -ms-grid-columns: 100%;\r\n        grid-template-columns: 100%;\r\n    -ms-grid-rows: ()[2 auto];\r\n        grid-template-rows: repeat(2 auto);\r\n  }\r\n  #contactWrap {\r\n    padding: .3rem;\r\n  }\r\n  .info {\r\n    font-size: 1rem;\r\n  }\r\n  #email {\r\n    font-size: 1rem;\r\n  }\r\n  #email:hover {\r\n    font-size: 1rem;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"contactWrap\">\n  <h1>Get in Touch!</h1>\n  <div id=\"contactInnerWrap\">\n    <div id=\"headWrap\">\n      <p id=\"flavor\">Let me know what I can do for you! The best way to reach me is by email, but feel free to call or text me if you're\n        interested in any of my services. </p>\n    </div>\n    <div id=\"infoWrap\">\n      <p class=\"info\">Ben Tosto</p>\n      <!-- <img src=\"../../../assets/images/coding pics/contact-brown.png\" alt=\"\" id=\"contact\"> -->\n      <p class=\"info\">(678) 548-1747</p>\n      <p class=\"info\">9am - 6pm EST</p>\n      <a href=\"mailto:ben@forgedelements.us\" id=\"email\">ben@forgedelements.us</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
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

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/cportfolio/cportfolio.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/cportfolio/cportfolio.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#portfolioWrap {\r\n  padding: 2rem;\r\n}\r\n\r\nh1 {\r\n  color: #504640;\r\n  font-size: 4em;\r\n  text-align: center;\r\n}\r\n\r\np {\r\n  color: #504640;\r\n  text-align: center;\r\n}\r\n\r\n#imageRowWrap {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: (30%)[3];\r\n      grid-template-columns: repeat(3, 30%);\r\n  grid-gap: 1rem;\r\n  margin: auto;\r\n  margin-top: 3rem;\r\n}\r\n\r\n.imgWrap {\r\n  border-left: .3rem solid #504640;\r\n  overflow: hidden;\r\n  transition: border 600ms;\r\n}\r\n\r\n.imgWrap:hover {\r\n  border-left: 1rem solid #f19c22;\r\n}\r\n\r\n@media only screen and (max-width: 40em) {\r\n  #imageRowWrap {\r\n    -ms-grid-columns: 100%;\r\n        grid-template-columns: 100%;\r\n    -ms-grid-rows: (30%)[3];\r\n        grid-template-rows: repeat(3, 30%);\r\n  }\r\n  .imgWrap img {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 25em) {\r\n  h1 {\r\n    font-size: 2rem;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/cportfolio/cportfolio.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/cportfolio/cportfolio.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"portfolioWrap\">\n  <h1>Previous Work</h1>\n  <p>Here are some things I've worked on in the past.</p>\n  <div id=\"imageRowWrap\">\n    <div class=\"imgWrap\">\n      <a href=\"https://thewillowscommunity.com/\" target=\"blank\">\n        <img src=\"../../../assets/images/coding pics/web-(1).jpg\" alt=\"\" id=\"img1\">\n      </a>\n    </div>\n    <div class=\"imgWrap\">\n      <a href=\"http://bencasey.love/\" target=\"blank\">\n        <img src=\"../../../assets/images/coding pics/web-(2).jpg\" alt=\"\" id=\"img2\">\n      </a>\n    </div>\n    <div class=\"imgWrap\">\n        <a href=\"https://pestopresto.wordpress.com/\" target=\"blank\">\n        <img src=\"../../../assets/images/coding pics/web-(3).jpg\" alt=\"\" id=\"img3\">\n    </a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/cportfolio/cportfolio.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/cportfolio/cportfolio.component.ts ***!
  \***************************************************************/
/*! exports provided: CportfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CportfolioComponent", function() { return CportfolioComponent; });
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

var CportfolioComponent = /** @class */ (function () {
    function CportfolioComponent() {
    }
    CportfolioComponent.prototype.ngOnInit = function () {
    };
    CportfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cportfolio',
            template: __webpack_require__(/*! ./cportfolio.component.html */ "./src/app/components/cportfolio/cportfolio.component.html"),
            styles: [__webpack_require__(/*! ./cportfolio.component.css */ "./src/app/components/cportfolio/cportfolio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CportfolioComponent);
    return CportfolioComponent;
}());



/***/ }),

/***/ "./src/app/components/custom/custom.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/custom/custom.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#customWrap {\r\n  color: rgb(248, 238, 225);\r\n  max-width: 800px;\r\n  margin: auto;\r\n  margin-top: 2rem;\r\n}\r\n#customInnerWrap {\r\n  padding: 1rem 2rem;\r\n  border-left: .2rem solid #f19c22;\r\n}\r\nh1 {\r\n  color: #f19c22;\r\n  font-size: 3em;\r\n  text-align: center;\r\n}\r\nul {\r\n  list-style: none;\r\n  margin-left: 0;\r\n  padding-left: 0;\r\n  -webkit-columns: 2;\r\n          columns: 2;\r\n}\r\nli {\r\n  padding-left: 1em;\r\n  text-indent: -1em;\r\n  line-height: 2rem;\r\n}\r\nli:before {\r\n  content: \"۞\";\r\n  padding-right: 5px;\r\n}\r\n#contactWrap {\r\n  padding: 2rem;\r\n  max-width: 800px;\r\n  margin: auto;\r\n}\r\n#contactInnerWrap {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: 50% 50%;\r\n      grid-template-columns: 50% 50%;\r\n  grid-gap: 1rem;\r\n  justify-content: space-between;\r\n}\r\nh1 {\r\n  font-size: 4em;\r\n  text-align: center;\r\n  padding-bottom: 1rem;\r\n}\r\n#infoWrap {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-rows: ()[4 auto];\r\n      grid-template-rows: repeat(4 auto);\r\n  justify-content: end;\r\n  text-align: end;\r\n  max-width: 800px;\r\n  border-right: .2rem solid #f19c22;\r\n  padding: 1rem;\r\n}\r\n.info{\r\n  font-size: 1.5rem;\r\n  font-weight: 600;\r\n}\r\n.sm {\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n}\r\n#email {\r\n  font-size: 1.5rem;\r\n  font-weight: 600;\r\n  margin-bottom: 1rem;\r\n  transition: font-size 600ms;\r\n}\r\n#email:hover {\r\n  font-size: 1.6rem;\r\n}\r\n#contact {\r\n  max-width: 200px;\r\n  margin-left: auto;\r\n}\r\n@media only screen and (max-width: 40em) {\r\n  #contactInnerWrap {\r\n    -ms-grid-columns: 100%;\r\n        grid-template-columns: 100%;\r\n    -ms-grid-rows: ()[2 auto];\r\n        grid-template-rows: repeat(2 auto);\r\n  }\r\n}\r\n@media screen and (max-width: 25em) {\r\n  #customInnerWrap {\r\n    padding: .3rem;\r\n    border: none;\r\n  }\r\n  h1{\r\n    font-size: 2.5rem;\r\n  }\r\n  #contactWrap {\r\n    padding: .3rem;\r\n  }\r\n  .info {\r\n    font-size: 1rem;\r\n  }\r\n  #email {\r\n    font-size: 1rem;\r\n  }\r\n  #email:hover {\r\n    font-size: 1rem;\r\n  }\r\n  ul {\r\n    -webkit-columns: 1;\r\n            columns: 1;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/components/custom/custom.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/custom/custom.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"customWrap\">\n  <div id=\"customInnerWrap\">\n    <h1>Custom Order Information</h1>\n    <p>\n      Because of the nature of modern blacksmithing, it’s hard to point to any one type of job that I specialize in, but here are\n      some of the services I offer regularly:\n    </p>\n    <ul>\n      <li>Railings </li>\n      <li>Handrails </li>\n      <li>Fire pits </li>\n      <li>Fire screens </li>\n      <li>Fireplace tools </li>\n      <li>Gates </li>\n      <li>Door/cabinet/household hardware </li>\n      <li>Garden ornamentation </li>\n      <li>Tools </li>\n      <li>Furniture</li>\n      <li>Art</li>\n      <li>Kitchen/cookout tools</li>\n    </ul>\n    <p>But if you don’t see what you’re after in that list, fear not! That’s by no means a comprehensive list. Frankly, I’m\n      willing to tackle just about any job I think I can fit in the forge. If you’ve got a weird idea you’ve been kicking\n      around, reach out and I’ll see what I can do for you! I’ve made thuribles and I’ve made theft-resistant drain covers, so chances\n      are you won’t surprise me (but I welcome a good challenge).</p>\n  </div>\n  <div id=\"contactWrap\">\n    <h1>Get in Touch!</h1>\n    <div id=\"contactInnerWrap\">\n      <div id=\"headWrap\">\n        <p id=\"flavor\">Let me know what I can do for you! The best way to reach me is by email, but feel free to call or text me if you're\n          interested in any of my services. </p>\n      </div>\n      <div id=\"infoWrap\">\n        <p class=\"info\">Forged Elements</p>\n        <p class=\"info sm\">7574 Indian Hill Rd</p>\n        <p class=\"info sm\">Honor, MI 49640</p>\n        <!-- <img src=\"../../../assets/images/coding pics/contact-brown.png\" alt=\"\" id=\"contact\"> -->\n        <p class=\"info\">(678) 548-1747</p>\n        <p class=\"info sm\">9am - 6pm EST</p>\n        <a href=\"mailto:ben@forgedelements.us\" id=\"email\">ben@forgedelements.us</a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/custom/custom.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/custom/custom.component.ts ***!
  \*******************************************************/
/*! exports provided: CustomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomComponent", function() { return CustomComponent; });
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

var CustomComponent = /** @class */ (function () {
    function CustomComponent() {
    }
    CustomComponent.prototype.ngOnInit = function () {
    };
    CustomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom',
            template: __webpack_require__(/*! ./custom.component.html */ "./src/app/components/custom/custom.component.html"),
            styles: [__webpack_require__(/*! ./custom.component.css */ "./src/app/components/custom/custom.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomComponent);
    return CustomComponent;
}());



/***/ }),

/***/ "./src/app/components/cwelcome/cwelcome.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/cwelcome/cwelcome.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#headSpace {\r\n  -ms-grid-row: 1;\r\n  -ms-grid-column: 1;\r\n  grid-area: headSpace;\r\n}\r\n#viewSpace {\r\n  -ms-grid-row: 2;\r\n  -ms-grid-column: 1;\r\n  grid-area: viewSpace;\r\n}\r\n#footSpace {\r\n  -ms-grid-row: 3;\r\n  -ms-grid-column: 1;\r\n  grid-area: footSpace;\r\n  \r\n}\r\ndiv#codingWrap {\r\n  background-color: rgb(255, 255, 255);\r\n  background-size: 3px;\r\n  min-height: 100vh;\r\n  max-width: 1200px;\r\n  margin: auto;\r\n  display: -ms-grid;\r\n  display: grid;\r\n      -ms-grid-rows: auto 1fr auto;\r\n      grid-template-rows: auto 1fr auto;\r\n      -ms-grid-columns: 100%;\r\n      grid-template-columns: 100%;\r\n      grid-template-areas: \r\n    \"headSpace\"\r\n    \"viewSpace\"\r\n    \"footSpace\";\r\n}\r\n/* header stuff */\r\nheader {\r\n  /* background: linear-gradient(3deg, #504464, #ffffff); */\r\n  width: 100%;\r\n  /* position: sticky; */\r\n  display: -ms-grid;\r\n  display: grid;\r\n      -ms-grid-columns: 20% 1fr 20%;\r\n      grid-template-columns: 20% 1fr 20%;\r\n      grid-template-areas: \"navTab2 navLinks logo\";\r\n}\r\nnav {\r\n  font-family: 'Comfortaa', sans-serif;\r\n  margin: auto;\r\n  -ms-grid-row: 1;\r\n  -ms-grid-column: 2;\r\n  grid-area: navLinks;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: (auto)[4];\r\n      grid-template-columns: repeat(4, auto);\r\n}\r\nnav a {\r\n  text-decoration: none;\r\n  padding: .5rem 1rem;\r\n  color:#504640;\r\n  font-weight: 400;\r\n  border-right: solid 1px #504640;\r\n  transition: color, 550ms;\r\n  transition: font-size, 550ms;\r\n}\r\nnav a:hover {\r\n  color: rgb(0, 0, 0);\r\n  font-size: 1.3rem;\r\n}\r\nnav a#lastNav {\r\n  border-right: none;\r\n}\r\n#navTab {\r\n  margin: .5rem 0;\r\n  grid-area: navTab;\r\n  display: none;\r\n}\r\n#navTab2{\r\n  margin: .5rem 0;\r\n  -ms-grid-row: 1;\r\n  -ms-grid-column: 1;\r\n  grid-area: navTab2;\r\n}\r\n#logo {\r\n  -ms-grid-row: 1;\r\n  -ms-grid-column: 3;\r\n  grid-area: logo;\r\n  margin: auto 1rem;\r\n  display: inline-block;\r\n}\r\n@media only screen and (max-width: 60em) {\r\n  nav{\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 1;\r\n    -ms-grid-column-span: 3;\r\n  }\r\n  #navTab{\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 3;\r\n  }\r\n  #navTab2{\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 1;\r\n  }\r\n  #logo{\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 2;\r\n  }\r\n}\r\n#fe {\r\n  float: right;\r\n  width: 65px;\r\n}\r\n#navTabImg {\r\n  float: right;\r\n}\r\n/* Footer Stuff */\r\nfooter {\r\n  background: #1d1d1d;\r\n  color: white;\r\n  text-align: center\r\n}\r\nfooter p {\r\n  margin: auto;\r\n  padding: .4rem;\r\n}\r\n/* Media Breaks */\r\n@media only screen and (min-width: 1200px) {\r\n  #codingWrap {\r\n    border-right: .2rem solid #504640;\r\n    border-left: .2rem solid #504640;\r\n  }\r\n}\r\n@media only screen and (max-width: 60em) {\r\n  header{\r\n    max-height: 300px;\r\n        -ms-grid-rows: auto 3rem;\r\n        grid-template-rows: auto 3rem;\r\n        grid-template-areas:\r\n      \"navTab2 logo navTab\"\r\n      \"navLinks navLinks navLinks\";\r\n  }\r\n  #navTab {\r\n    display: initial;\r\n  }\r\n  a#logo {\r\n    display:-ms-grid;\r\n    display:grid;\r\n    justify-content: center;\r\n  }\r\n  img#fe {\r\n    margin: auto;\r\n  }\r\n}\r\n@media only screen and (max-width: 25em) {\r\n  nav a{\r\n    font-size: .75rem;\r\n  }\r\n  nav a:hover {\r\n    font-size: 1rem;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/components/cwelcome/cwelcome.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/cwelcome/cwelcome.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"codingWrap\">\r\n\r\n    <div id=\"headSpace\">\r\n  \r\n      <header class=\"codingHeader\">\r\n        <a [routerLink]=\"['/ironworks']\" id=\"navTab2\">\r\n          <img id=\"navTabImg2\" src=\"../assets/svgs/smithing tab brown.svg\" alt=\"\">\r\n        </a>\r\n  \r\n        <a [routerLink]=\"['/codesmith']\" id=\"logo\">\r\n          <img id=\"fe\" src=\"../assets/svgs/Fe brown.svg\" alt=\"\">\r\n        </a>\r\n  \r\n        <nav id=\"navLinks\">\r\n          <a [routerLink]=\"['./portfolio']\">Portfolio</a>\r\n          <a [routerLink]=\"['./about']\">About</a>\r\n          <!-- <a [routerLink]=\"['./services']\">Services</a> -->\r\n          <a [routerLink]=\"['./contact']\" id=\"lastNav\">Contact</a>\r\n        </nav>\r\n  \r\n  \r\n  \r\n        <a [routerLink]=\"['/codesmith']\" id=\"navTab\">\r\n          <img id=\"navTabImg\" src=\"../assets/svgs/coding tab brown.svg\" alt=\"\">\r\n        </a>\r\n      </header>\r\n      \r\n    </div>\r\n    \r\n    <div id=\"viewSpace\">\r\n  \r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  \r\n    <footer id=\"footSpace\">\r\n      <p style=\"font-size: .8rem;\">Copyright © 2018 Forged Elements. All rights reserved.</p>\r\n    </footer>\r\n  \r\n  \r\n  \r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/components/cwelcome/cwelcome.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/cwelcome/cwelcome.component.ts ***!
  \***********************************************************/
/*! exports provided: CwelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CwelcomeComponent", function() { return CwelcomeComponent; });
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

var CwelcomeComponent = /** @class */ (function () {
    function CwelcomeComponent() {
    }
    CwelcomeComponent.prototype.ngOnInit = function () {
    };
    CwelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cwelcome',
            template: __webpack_require__(/*! ./cwelcome.component.html */ "./src/app/components/cwelcome/cwelcome.component.html"),
            styles: [__webpack_require__(/*! ./cwelcome.component.css */ "./src/app/components/cwelcome/cwelcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CwelcomeComponent);
    return CwelcomeComponent;
}());



/***/ }),

/***/ "./src/app/components/sabout/sabout.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/sabout/sabout.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#titleWrap {\r\n  position: relative;\r\n  -ms-grid-row: 1;\r\n  -ms-grid-column: 1;\r\n  grid-area: title;\r\n  padding-bottom: 2rem;\r\n  margin: auto;\r\n}\r\n\r\nh1 {\r\n  color: #f19c22;\r\n  font-size: 5em;\r\n  text-align: center;\r\n}\r\n\r\n#title {\r\n  padding: 1rem 2rem;\r\n  position: absolute;\r\n  bottom: 30%;\r\n  left: 20%;\r\n}\r\n\r\n#profilePic {\r\n  width: 100%;\r\n  max-width: 1200px;\r\n  border: .2rem solid #1d1d1d;\r\n}\r\n\r\np {\r\n  color: rgb(248, 238, 225);\r\n}\r\n\r\n#aboutWrap {\r\n  padding: 2rem;\r\n  display: -ms-grid;\r\n  display: grid;\r\n      -ms-grid-rows: (auto)[4];\r\n      grid-template-rows: repeat(4, auto);\r\n      grid-template-areas: \"title\" \"chunkWrap1\" \"chunkWrap2\" \"chunkWrap3\"\r\n}\r\n\r\n.imgWrapR,\r\n.imgWrapL {\r\n  padding: 1rem;\r\n  border-radius: 50%;\r\n  shape-outside: border-box;\r\n  width: 70%;\r\n  max-width: 600px;\r\n  position: relative;\r\n}\r\n\r\n.imgWrapL {\r\n  float: left;\r\n}\r\n\r\n.imgWrapR {\r\n  float: right;\r\n}\r\n\r\n.caption {\r\n\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  max-width: 600px;\r\n  bottom: 0;\r\n  left: 0;\r\n  border-radius: 50%;\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n  opacity: 0;\r\n  transition: opacity 600ms;\r\n  text-align: center;\r\n}\r\n\r\n.caption p {\r\n  padding-top: 50%;\r\n}\r\n\r\n.caption:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.imageBorder {\r\n  max-width: 100%;\r\n  border: .1rem solid #1d1d1d;\r\n  border-radius: 100%;\r\n}\r\n\r\n#chunkWrap1 {\r\n  -ms-grid-row: 2;\r\n  -ms-grid-column: 1;\r\n  grid-area: chunkWrap1;\r\n}\r\n\r\n#chunkWrap2 {\r\n  -ms-grid-row: 3;\r\n  -ms-grid-column: 1;\r\n  grid-area: chunkWrap2;\r\n}\r\n\r\n#chunkWrap3 {\r\n  -ms-grid-row: 4;\r\n  -ms-grid-column: 1;\r\n  grid-area: chunkWrap3;\r\n}\r\n\r\n@media only screen and (max-width: 60em) {\r\n  #title {\r\n    bottom: 3rem;\r\n    left: 4rem;\r\n  }\r\n  h1 {\r\n    font-size: 4em;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 40em) {\r\n  .imgWrapL,\r\n  .imgWrapR {\r\n    display: inline;\r\n    width: 100%;\r\n    shape-outside: none;\r\n  }\r\n  #title {\r\n    bottom: 5%;\r\n    left: 0;\r\n  }\r\n  h1 {\r\n    font-size: 3em;\r\n  }\r\n  #oz {\r\n    grid-area: oz;\r\n  }\r\n  #ozp {\r\n    grid-area: ozp;\r\n  }\r\n\r\n@media only screen and (max-width: 40em) {\r\n  #oz {\r\n      -ms-grid-row: 2;\r\n      -ms-grid-column: 1\r\n  }\r\n  #ozp {\r\n      -ms-grid-row: 1;\r\n      -ms-grid-column: 1\r\n  }\r\n}\r\n  #chunkWrap1Inner {\r\n    display: -ms-grid;\r\n    display: grid;\r\n        grid-template-areas: \"ozp\" \"oz\"\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 25em) {\r\n  #title h1 {\r\n    font-size: 2rem;\r\n  }\r\n  #aboutWrap {\r\n    padding: .75rem;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/components/sabout/sabout.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/sabout/sabout.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"aboutWrap\">\r\n  <div id=\"titleWrap\">\r\n    <img src=\"../../../assets/images/about pics/Floorlaying.jpg\" alt=\"\" id=\"profilePic\">\r\n    <div id=\"title\">\r\n      <h1>Hi, I'm Ben Tosto</h1>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"chunkWrap1\">\r\n    <div id=\"chunkWrap1Inner\">\r\n      <div class=\"imgWrapR\">\r\n        <img src=\"../../../assets/images/about pics/Australia.png\" alt=\"\" id=\"oz\" class=\"imageBorder\">\r\n\r\n        <div class=\"caption\">\r\n          <p>My first \"shop\" in Australia.</p>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n      <p id=\"ozp\">I’ve always loved making things. As a kid, I played a lot with clay and Lego. When I was old enough to manage tools,\r\n        I took an interest in woodwork, and spent a summer in my early 20’s working with my uncle in Virginia as a carpenter.\r\n        I really enjoy woodwork, but when I had a chance to try metalwork, I fell head over heels for it. I first became\r\n        enamored with metalwork at Principia College while doing machinist work for the solar car team. But it wasn’t until\r\n        2013 while living in Australia that I got to explore ironwork on my own terms. </p>\r\n    </div>\r\n\r\n\r\n    <p> A friend had given me a book that catalogued all sorts of third-world industrial practices in use during the 70’s, and\r\n      several chapters of it were dedicated to different forms of metalwork. I was blown away at the ingenuity and simplicity\r\n      of the techniques I learned there, and I decided to give it a go myself!</p>\r\n\r\n    <p>A few trips to the local junk yard later, I had my very own brake drum forge, railroad track anvil, tarpaulin bellows,\r\n      and charcoal retort set up. Though I spent exponentially more time building this setup than I spent forging with it,\r\n      the experience taught me a lot of valuable lessons. In any case, I was hooked. </p>\r\n  </div>\r\n\r\n  <div id=\"chunkWrap2\">\r\n    <div class=\"imgWrapL\">\r\n      <img src=\"../../../assets/images/about pics/Orion.png\" alt=\"\" id=\"orion\" class=\"imageBorder\">\r\n\r\n      \r\n      <div class=\"caption\">\r\n          <p>The power hammers at Orion Forge in Bend, OR.</p>\r\n        </div>\r\n\r\n    </div>\r\n    <p>The following year, my wife and I moved to Bend, OR, and serendipitously I found myself in a small community with a high\r\n      density of world-class blacksmiths. I immediately joined the Central Oregon Metal Arts Guild, and began attending Northwest\r\n      Blacksmithing Association classes and conferences. Through these groups, I came to be acquainted with some of the most\r\n      talented ironworkers in the country (and a few from Hungary and Italy!). After half a year of struggling on my own\r\n      in an unused stable outside of town, I decided it was time to get serious about my craft.</p>\r\n\r\n\r\n    <p>From 2015 to 2017, I worked for Orion Forge and Dry Canyon Forge in Bend under the masterful guidance and direction of\r\n      Hunter Dahlberg, Kellen Bateham, and Joe Elliott. The experience I gained working them was invaluable, and propelled\r\n      my personal work into professional success. </p>\r\n  </div>\r\n\r\n  <div id=\"chunkWrap3\">\r\n    <div class=\"imgWrapR\">\r\n      <img src=\"../../../assets/images/about pics/Fresca.png\" alt=\"\" id=\"fresca\" class=\"imageBorder\">\r\n\r\n      \r\n      <div class=\"caption\">\r\n          <p>Trying to forge in my garage back in Oregon.</p>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <p> In April, 2018 my wife and I, looking forward to having kids, moved again to be closer to family - this time to Northern\r\n      Michigan in a beautiful home on 17 acres adjoining Sleeping Bear National Park. From here the forgelight glows once\r\n      more.\r\n    </p>\r\n\r\n    <p>My passion is in custom furniture - the joining of wood and metal is a uniquely raw combination of textures, shapes,\r\n      and colors that I never get tired of seeing juxtaposed - but I’ll always have a soft spot in my heart for the forged\r\n      hand tools I learned my trade making.\r\n\r\n    </p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/sabout/sabout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/sabout/sabout.component.ts ***!
  \*******************************************************/
/*! exports provided: SaboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaboutComponent", function() { return SaboutComponent; });
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

var SaboutComponent = /** @class */ (function () {
    function SaboutComponent() {
    }
    SaboutComponent.prototype.ngOnInit = function () {
    };
    SaboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sabout',
            template: __webpack_require__(/*! ./sabout.component.html */ "./src/app/components/sabout/sabout.component.html"),
            styles: [__webpack_require__(/*! ./sabout.component.css */ "./src/app/components/sabout/sabout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SaboutComponent);
    return SaboutComponent;
}());



/***/ }),

/***/ "./src/app/components/services/services.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/services/services.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#servicesWrap {\r\n  height: 100%;\r\n}\r\n\r\nh1 {\r\n  color: #504640;\r\n  font-size: 4em;\r\n  text-align: center;\r\n  margin-top: 3rem;\r\n}"

/***/ }),

/***/ "./src/app/components/services/services.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/services/services.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"servicesWrap\">\n  <h1>Coming Soon...</h1>\n</div>"

/***/ }),

/***/ "./src/app/components/services/services.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/services/services.component.ts ***!
  \***********************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
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

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/components/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/components/services/services.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/components/shero/shero.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/shero/shero.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#jumboWrap {\r\n  position: relative;\r\n  width: 100%;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-rows: (auto)[2];\r\n      grid-template-rows: repeat(2, auto);\r\n}\r\n\r\n#jumbotron {\r\n  position: relative;\r\n  overflow: hidden;\r\n  max-width: 1200px;\r\n  border-top: 1rem solid #f19c22;\r\n  border-bottom: 1rem solid #f19c22;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n#jumboTitle {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  opacity: 1;\r\n  color: #f19c22;\r\n  text-align: center;\r\n}\r\n\r\n#jumbotron h1 {\r\n  padding-top: 20%;\r\n  font-size: 6em;\r\n}\r\n\r\n#jumbotron img {\r\n  width: 100%;\r\n  bottom: 0;\r\n}\r\n\r\n#heroWrap {\r\n  max-width: 1200px;\r\n}\r\n\r\n.heroBox {\r\n  padding: 1rem 2rem;\r\n  max-width: 750px;\r\n  border-right: .2rem solid #f19c22;\r\n}\r\n\r\n.heroBoxR {\r\n  padding: 1rem 2rem;\r\n  max-width: 800px;\r\n  border-left: .2rem solid #f19c22;\r\n  text-align: end;\r\n  margin-left: auto;\r\n}\r\n\r\n.jumboHero {\r\n  color: #f19c22;\r\n  font-family: \"Flamenco\", sans-serif;\r\n  font-size: 3rem;\r\n  display: inline;\r\n}\r\n\r\n.jumboText {\r\n  display: inline;\r\n  color: white;\r\n  line-height: 2.5;\r\n}\r\n\r\n.heroBoxLast {\r\n  position: relative;\r\n  padding: 1rem 2rem;\r\n  max-width: 800px;\r\n  border-left: .2rem solid #f19c22;\r\n  text-align: end;\r\n  margin-left: auto;\r\n  font-size: 3rem;\r\n  z-index: 100;\r\n}\r\n\r\n#story {\r\n  text-decoration: none;\r\n  padding: .2rem;\r\n  border-bottom: none;\r\n  transition: font-size, 600ms;\r\n  transition: border-bottom, 600ms;\r\n}\r\n\r\n#story:hover {\r\n  font-size: 3.2rem;\r\n  border-bottom: .2rem solid #f19c22;\r\n}\r\n\r\n@media only screen and (max-width: 40em) {\r\n  #jumboWrap h1 {\r\n    padding-top: 25%;\r\n    font-size: 3em;\r\n  }\r\n  /* .jumboHero {\r\n    font-size: 2em;\r\n  } */\r\n  .jumboText {\r\n    line-height: 2rem;\r\n  }\r\n  .heroBox {\r\n    border-right: .6rem solid #f19c22;\r\n  }\r\n  .heroBoxR {\r\n    border-left: .6rem solid #f19c22;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 25em) {\r\n #jumboWrap h1 {\r\n   padding-top: 20%;\r\n }\r\n .heroBox, .heroBoxR, .heroBoxLast {\r\n   padding: .75rem;\r\n }\r\n .jumboHero {\r\n   font-size: 2rem;\r\n }\r\n #story:hover {\r\n   font-size: 2rem;\r\n }\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/shero/shero.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/shero/shero.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"jumboWrap\">\r\n  <div id=\"jumbotron\">\r\n    <img src=\"../../../assets/images/jumbotron.jpg\" alt=\"\">\r\n    <div id=\"jumboTitle\">\r\n      <h1>forged elements</h1>\r\n    </div>\r\n  </div>\r\n  <div id=\"heroWrap\">\r\n    <div class=\"heroBox\">\r\n      <h2 class=\"jumboHero\">Take a moment to look around you. </h2>\r\n      <p class=\"jumboText\">Everything you see has a story to tell. Increasingly, the stories of these objects have been isolated from us as consumers.\r\n        I believe strongly that the things we choose to surround ourselves with should communicate their history. The evidence\r\n        of my work speaks loud and clear through each piece - the blow of the hammer, the scale of the fire, the marks of\r\n        craftsmanship. These stories are important. They inform us of our humanity - we are builders, we are explorers, we\r\n        stand on the shoulders of giants.\r\n      </p>\r\n    </div>\r\n    <div class=\"heroBoxR\">\r\n      <h2 class=\"jumboHero\">Examine the world you live in. </h2>\r\n      <p class=\"jumboText\">Whole lifetimes were dedicated to perfecting skills that are now performed instantly and thoughtlessly by machinery.\r\n        But, change and progress aren’t just inevitable, they’re healthy and necessary. Nevertheless, we would be wise to\r\n        preserve the legacy of our forebearers.\r\n      </p>\r\n    </div>\r\n    <div class=\"heroBox\">\r\n      <h2 class=\"jumboHero\">My mission </h2>\r\n      <p class=\"jumboText\"> is to honor the labors of the weathered hands that we held on our journey to who we are today. To remind everyone who\r\n        sees something I've made that the beauty of traditions is in the countless generations of minds that shape them, the whispering\r\n        wind of words passing over the sandstone canyons of our shared history. My hope is that those voices can speak through\r\n        my work for everyone to hear. So gather ‘round the forgelight, friends,\r\n      </p>\r\n    </div>\r\n    <div class=\"heroBoxLast\" style=\"padding-bottom: 3rem; border: none;\">\r\n        <a [routerLink]=\"['../portfolio']\" class=\"jumboHero\" id=\"story\"><i class=\"fa  fa-angle-double-right\"></i> I’ve got a story to tell you</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/shero/shero.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/shero/shero.component.ts ***!
  \*****************************************************/
/*! exports provided: SheroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SheroComponent", function() { return SheroComponent; });
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

var SheroComponent = /** @class */ (function () {
    function SheroComponent() {
    }
    SheroComponent.prototype.ngOnInit = function () {
    };
    SheroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shero',
            template: __webpack_require__(/*! ./shero.component.html */ "./src/app/components/shero/shero.component.html"),
            styles: [__webpack_require__(/*! ./shero.component.css */ "./src/app/components/shero/shero.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SheroComponent);
    return SheroComponent;
}());



/***/ }),

/***/ "./src/app/components/shop/shop.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/shop/shop.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1#comingSoon {\r\n  text-align: center;\r\n  margin: 5rem;\r\n  color: #f19c22;\r\n}"

/***/ }),

/***/ "./src/app/components/shop/shop.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/shop/shop.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1 id=\"comingSoon\">Coming soon...</h1>\n</div>"

/***/ }),

/***/ "./src/app/components/shop/shop.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/shop/shop.component.ts ***!
  \***************************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
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

var ShopComponent = /** @class */ (function () {
    function ShopComponent() {
    }
    ShopComponent.prototype.ngOnInit = function () {
    };
    ShopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shop',
            template: __webpack_require__(/*! ./shop.component.html */ "./src/app/components/shop/shop.component.html"),
            styles: [__webpack_require__(/*! ./shop.component.css */ "./src/app/components/shop/shop.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShopComponent);
    return ShopComponent;
}());



/***/ }),

/***/ "./src/app/components/sportfolio/sportfolio.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/sportfolio/sportfolio.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sCarousel {\r\n  height: 100%;\r\n  display: block;\r\n  margin: auto;\r\n\r\n}\r\n.carousel-inner {\r\n  height: 100%;\r\n}\r\n.carousel-item {\r\n  height: 100%;\r\n}\r\n.sCarouselWrapper {\r\n  /* background: #504640; */\r\n  height: 70vw;\r\n  max-height: 700px;\r\n  padding: .5rem;\r\n}\r\np {\r\n  text-shadow: 0 0 2rem #000;\r\n}\r\nimg{\r\n  border: .2rem solid #1d1d1d;\r\n}"

/***/ }),

/***/ "./src/app/components/sportfolio/sportfolio.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/sportfolio/sportfolio.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h2></h2>\r\n  <p>\r\n\r\n  </p>\r\n</div>\r\n\r\n\r\n<div id=\"carouselExampleControls\" class=\"carousel slide sCarouselWrapper\" data-ride=\"carousel\">\r\n  <div class=\"carousel-inner\">\r\n\r\n    <div class=\"carousel-item active\">\r\n      <img class=\" sCarousel\" src=\"../../../assets/images/portfoliopics/portfolio (1).jpg\" alt=\"\">\r\n      <div class=\"carousel-caption d-none d-md-block\">\r\n        <h5></h5>\r\n        <p>Loaded dice.</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"carousel-item\" *ngFor=\"let image of images\">\r\n      <img class=\"sCarousel\" [src]=\"image.imageUrl\" alt=\"\">\r\n      <div class=\"carousel-caption d-none d-md-block\">\r\n          <h5></h5>\r\n          <p>{{image.caption}}</p>\r\n        </div>\r\n    </div>\r\n\r\n  </div>\r\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\r\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Previous</span>\r\n  </a>\r\n  <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\r\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Next</span>\r\n  </a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/sportfolio/sportfolio.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/sportfolio/sportfolio.component.ts ***!
  \***************************************************************/
/*! exports provided: SportfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportfolioComponent", function() { return SportfolioComponent; });
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

var SportfolioComponent = /** @class */ (function () {
    function SportfolioComponent() {
        this.images = [
            {
                'imageUrl': '../../../assets/images/portfoliopics/portfolio (2).jpg',
                'caption': 'Wall mounted wine rack & corkscrew.'
            },
            {
                'imageUrl': '../../../assets/images/portfoliopics/portfolio (3).jpg',
                'caption': 'Corkscrew detail'
            },
            {
                'imageUrl': '../../../assets/images/portfoliopics/portfolio (4).jpg',
                'caption': 'Barnwood boot bench. Made at Orion Forge.'
            },
            {
                'imageUrl': '../../../assets/images/portfoliopics/portfolio (5).jpg',
                'caption': 'Custom Railing. Made at Orion Forge.'
            },
            {
                'imageUrl': '../../../assets/images/portfoliopics/portfolio (6).jpg',
                'caption': 'Upset square pipes for queue posts. Made at Orion Forge.'
            },
            {
                'imageUrl': '../../../assets/images/portfoliopics/portfolio (7).jpg',
                'caption': 'Hinged fireplace screen with forged copper handles. Made at Dry Canyon Forge.'
            },
            {
                'imageUrl': '../../../assets/images/portfoliopics/portfolio (8).jpg',
                'caption': 'Hinged fireplace screen with forged copper rivets. Made at Dry Canyon Forge.'
            },
            {
                'imageUrl': '../../../assets/images/portfoliopics/portfolio (9).jpg',
                'caption': 'Cinnamon bun handrail. Made at Orion Forge.'
            },
            {
                'imageUrl': '../../../assets/images/portfoliopics/portfolio (10).jpg',
                'caption': 'Custom wall hooks. Made at Orion Forge.'
            },
            {
                'imageUrl': '../../../assets/images/portfoliopics/portfolio (11).jpg',
                'caption': 'Setting tenons on a coffee table at Orion Forge.'
            },
            {
                'imageUrl': '../../../assets/images/portfoliopics/portfolio (12).jpg',
                'caption': 'Wine cabinet handles and latch. Made at Orion Forge.'
            },
            {
                'imageUrl': '../../../assets/images/portfoliopics/portfolio (13).jpg',
                'caption': 'Screen railing. Made at Orion Forge.'
            },
            {
                'imageUrl': '../../../assets/images/portfoliopics/portfolio (14).jpg',
                'caption': 'Stamped flourish coat hanger. Made at Orion Forge.'
            },
            {
                'imageUrl': '../../../assets/images/portfoliopics/portfolio (15).jpg',
                'caption': 'Steel clad point of sale booth. Made at Orion Forge.'
            },
            {
                'imageUrl': '../../../assets/images/portfoliopics/portfolio (16).jpg',
                'caption': 'Wine bottle rack.'
            },
            {
                'imageUrl': '../../../assets/images/portfoliopics/portfolio (17).jpg',
                'caption': 'Cabinet hardware. Made at Orion Forge.'
            },
            {
                'imageUrl': '../../../assets/images/portfoliopics/portfolio (18).jpg',
                'caption': 'Cast iron wall hangers'
            },
            {
                'imageUrl': '../../../assets/images/portfoliopics/portfolio (19).jpg',
                'caption': 'Chess set.'
            },
            {
                'imageUrl': '../../../assets/images/portfoliopics/portfolio (20).jpg',
                'caption': 'Basket hanger.'
            },
            {
                'imageUrl': '../../../assets/images/portfoliopics/portfolio (21).jpg',
                'caption': 'Basket hanger detail.'
            },
            {
                'imageUrl': '../../../assets/images/portfoliopics/portfolio (22).jpg',
                'caption': 'Shepherds crooks.'
            },
            {
                'imageUrl': '../../../assets/images/portfoliopics/portfolio (23).jpg',
                'caption': 'Set of coat hooks.'
            },
            {
                'imageUrl': '../../../assets/images/portfoliopics/portfolio (24).jpg',
                'caption': 'Firepit art piece.'
            },
            {
                'imageUrl': '../../../assets/images/portfoliopics/portfolio (25).jpg',
                'caption': 'Anvil stamp in 2" x 4" block. Made at Orion Forge.'
            }
        ];
    }
    SportfolioComponent.prototype.ngOnInit = function () {
    };
    SportfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sportfolio',
            template: __webpack_require__(/*! ./sportfolio.component.html */ "./src/app/components/sportfolio/sportfolio.component.html"),
            styles: [__webpack_require__(/*! ./sportfolio.component.css */ "./src/app/components/sportfolio/sportfolio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SportfolioComponent);
    return SportfolioComponent;
}());



/***/ }),

/***/ "./src/app/components/swelcome/swelcome.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/swelcome/swelcome.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#superWrap {\r\n  height: 100%;\r\n  background-color: #1d1d1d;\r\n}\r\ndiv#smithingWrap {\r\n  /* background-color: #504640; */\r\n  background-color: #383838;\r\n  background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%0D%3C!-- Generator%3A Adobe Illustrator 16.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%0D%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%0D%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%0D%09 width%3D%22100px%22 height%3D%22100px%22 viewBox%3D%220 0 100 100%22 enable-background%3D%22new 0 0 100 100%22 xml%3Aspace%3D%22preserve%22%3E%0D%3Cg%3E%0D%09%3Cline fill%3D%22%23FFFFFF%22 stroke%3D%22%23000000%22 stroke-width%3D%224%22 stroke-miterlimit%3D%2210%22 x1%3D%2250%22 y1%3D%220%22 x2%3D%2250%22 y2%3D%22100%22%2F%3E%0D%09%3Cline fill%3D%22none%22 stroke%3D%22%23000000%22 stroke-width%3D%224%22 stroke-miterlimit%3D%2210%22 x1%3D%220%22 y1%3D%2250%22 x2%3D%22100%22 y2%3D%2250%22%2F%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%09%3Cline fill%3D%22%23FFFFFF%22 stroke%3D%22%23000000%22 stroke-width%3D%222%22 stroke-miterlimit%3D%2210%22 x1%3D%2225%22 y1%3D%220%22 x2%3D%2225%22 y2%3D%22100%22%2F%3E%0D%09%3Cline fill%3D%22none%22 stroke%3D%22%23000000%22 stroke-width%3D%222%22 stroke-miterlimit%3D%2210%22 x1%3D%220%22 y1%3D%2225%22 x2%3D%22100%22 y2%3D%2225%22%2F%3E%0D%09%3Cline fill%3D%22none%22 stroke%3D%22%23000000%22 stroke-width%3D%222%22 stroke-miterlimit%3D%2210%22 x1%3D%2275%22 y1%3D%220%22 x2%3D%2275%22 y2%3D%22100%22%2F%3E%0D%09%3Cline fill%3D%22none%22 stroke%3D%22%23000000%22 stroke-width%3D%222%22 stroke-miterlimit%3D%2210%22 x1%3D%220%22 y1%3D%2276%22 x2%3D%22100%22 y2%3D%2276%22%2F%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\");\r\n  background-size: 3px;\r\n  min-height: 100vh;\r\n  max-width: 1200px;\r\n  margin: auto;\r\n  display: -ms-grid;\r\n  display: grid;\r\n      -ms-grid-rows: auto 1fr auto;\r\n      grid-template-rows: auto 1fr auto;\r\n      -ms-grid-columns: 100%;\r\n      grid-template-columns: 100%;\r\n      grid-template-areas: \r\n  \"headSpace\"\r\n  \"viewSpace\"\r\n    \"footSpace\";\r\n  }\r\n#headSpace {\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 1;\r\n    grid-area: headSpace;\r\n  }\r\n#viewSpace {\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 1;\r\n    grid-area: viewSpace;\r\n  }\r\n#footSpace {\r\n    -ms-grid-row: 3;\r\n    -ms-grid-column: 1;\r\n    grid-area: footSpace;\r\n  }\r\n/* header stuff */\r\nheader {\r\n  background: linear-gradient(3deg, #000000, #1d1d1d, #383838);\r\n  width: 100%;\r\n  display: -ms-grid;\r\n  display: grid;\r\n      -ms-grid-columns: 20% 1fr 20%;\r\n      grid-template-columns: 20% 1fr 20%;\r\n      grid-template-areas: \"logo navLinks navTab\";\r\n}\r\nnav {\r\n  font-family: 'Comfortaa', sans-serif;\r\n  margin: auto;\r\n  -ms-grid-row: 1;\r\n  -ms-grid-column: 2;\r\n  grid-area: navLinks;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: (auto)[4];\r\n      grid-template-columns: repeat(4, auto);\r\n}\r\nnav a {\r\n  text-decoration: none;\r\n  padding: .5rem 1rem;\r\n  color: rgb(248, 238, 225);\r\n  font-weight: 400;\r\n  border-right: solid 1px #f19c22;\r\n  transition: color, 550ms;\r\n}\r\nnav a:hover {\r\n  color: #F19C22;\r\n}\r\nnav a#lastNav {\r\n  border-right: none;\r\n}\r\n#navTab {\r\n  margin: .5rem 0;\r\n  -ms-grid-row: 1;\r\n  -ms-grid-column: 3;\r\n  grid-area: navTab;\r\n}\r\n#navTab2{\r\n  margin: .5rem 0;\r\n  grid-area: navTab2;\r\n  display: none;\r\n}\r\n#logo {\r\n  -ms-grid-row: 1;\r\n  -ms-grid-column: 1;\r\n  grid-area: logo;\r\n  margin: auto 1rem;\r\n  display: inline-block;\r\n}\r\n@media only screen and (max-width: 60em) {\r\n  nav{\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 1;\r\n    -ms-grid-column-span: 3;\r\n  }\r\n  #navTab{\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 3;\r\n  }\r\n  #navTab2{\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 1;\r\n  }\r\n  #logo{\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 2;\r\n  }\r\n}\r\n#fe {\r\n  width: 65px;\r\n}\r\n#navTabImg {\r\n  float: right;\r\n}\r\n/* Footer Stuff */\r\nfooter {\r\n  background: #1d1d1d;\r\n  color: white;\r\n  text-align: center\r\n}\r\nfooter p {\r\n  margin: auto;\r\n  padding: .4rem;\r\n}\r\n/* Media Breaks */\r\n@media only screen and (min-width: 1200px) {\r\n  #smithingWrap {\r\n    border-right: .2rem solid #F19C22;\r\n    border-left: .2rem solid #F19C22;\r\n  }\r\n}\r\n@media only screen and (max-width: 60em) {\r\n  header{\r\n    max-height: 300px;\r\n        -ms-grid-rows: auto 3rem;\r\n        grid-template-rows: auto 3rem;\r\n        grid-template-areas:\r\n      \"navTab2 logo navTab\"\r\n      \"navLinks navLinks navLinks\";\r\n  }\r\n  #navTab2 {\r\n    display: initial;\r\n  }\r\n  a#logo {\r\n    display:-ms-grid;\r\n    display:grid;\r\n    justify-content: center;\r\n  }\r\n  img#fe {\r\n    margin: auto;\r\n  }\r\n}\r\n@media only screen and (max-width: 25em) {\r\n  nav a{\r\n    font-size: .75rem;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/components/swelcome/swelcome.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/swelcome/swelcome.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"superWrap\">\r\n  <div id=\"smithingWrap\">\r\n\r\n    <div id=\"headSpace\">\r\n\r\n      <header class=\"smithingHeader\">\r\n        <a [routerLink]=\"['/ironworks']\" id=\"navTab2\">\r\n          <img id=\"navTabImg2\" src=\"../assets/svgs/smithing tab reflected.svg\" alt=\"\">\r\n        </a>\r\n\r\n        <a [routerLink]=\"['/ironworks']\" id=\"logo\">\r\n          <img id=\"fe\" src=\"../assets/svgs/Fe.svg\" alt=\"\">\r\n        </a>\r\n\r\n        <nav id=\"navLinks\">\r\n          <a [routerLink]=\"['./portfolio']\">Portfolio</a>\r\n          <a [routerLink]=\"['./about']\">About</a>\r\n          <!-- <a [routerLink]=\"['./shop']\">Shop</a> -->\r\n          <a [routerLink]=\"['./contact']\" id=\"lastNav\">Contact</a>\r\n        </nav>\r\n\r\n\r\n\r\n        <a [routerLink]=\"['/codesmith']\" id=\"navTab\">\r\n          <img id=\"navTabImg\" src=\"../assets/svgs/coding tab.svg\" alt=\"\">\r\n        </a>\r\n      </header>\r\n\r\n    </div>\r\n\r\n    <div id=\"viewSpace\">\r\n\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n\r\n    <footer id=\"footSpace\">\r\n      <p style=\"font-size: .8rem;\">Copyright © 2018 Forged Elements. All rights reserved.</p>\r\n    </footer>\r\n\r\n\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/swelcome/swelcome.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/swelcome/swelcome.component.ts ***!
  \***********************************************************/
/*! exports provided: SwelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwelcomeComponent", function() { return SwelcomeComponent; });
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

var SwelcomeComponent = /** @class */ (function () {
    function SwelcomeComponent() {
    }
    SwelcomeComponent.prototype.ngOnInit = function () {
    };
    SwelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-swelcome',
            template: __webpack_require__(/*! ./swelcome.component.html */ "./src/app/components/swelcome/swelcome.component.html"),
            styles: [__webpack_require__(/*! ./swelcome.component.css */ "./src/app/components/swelcome/swelcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SwelcomeComponent);
    return SwelcomeComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\coding\forgedelements\forgedelements\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map