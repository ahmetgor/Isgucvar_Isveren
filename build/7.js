webpackJsonp([7],{

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AyarlarPageModule", function() { return AyarlarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ayarlar__ = __webpack_require__(732);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AyarlarPageModule = /** @class */ (function () {
    function AyarlarPageModule() {
    }
    AyarlarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ayarlar__["a" /* AyarlarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ayarlar__["a" /* AyarlarPage */]),
            ],
        })
    ], AyarlarPageModule);
    return AyarlarPageModule;
}());

//# sourceMappingURL=ayarlar.module.js.map

/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AyarlarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_ser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AyarlarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AyarlarPage = /** @class */ (function () {
    function AyarlarPage(navCtrl, navParams, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
    }
    AyarlarPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad AyarlarPage');
        if (!this.authService.currentUser) {
            this.authService.checkAuthentication().then(function (res) {
            }, function (err) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            });
        }
    };
    AyarlarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ayarlar',template:/*ion-inline-start:"C:\Users\7448\Desktop\isgucvarIsveren\src\pages\ayarlar\ayarlar.html"*/'<!--\n  Generated template for the AyarlarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Ayarlar</ion-title>\n    </ion-navbar>  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item-group>\n    <ion-item-divider color="light">Bildirimler</ion-item-divider>\n<ion-item>\n  <ion-label>Uygulama Bildirimleri</ion-label>\n  <ion-toggle item-end checked="true"></ion-toggle>\n</ion-item>\n<ion-item>\n  <ion-label>Email Bildirimleri</ion-label>\n  <ion-toggle item-end checked="false"></ion-toggle>\n</ion-item>\n</ion-item-group>\n\n<ion-item-group>\n  <ion-item-divider color="light">Destek</ion-item-divider>\n<button ion-item>\nGizlilik\n</button>\n<button ion-item>\nGeri Bildirim & Öneri\n</button>\n<button ion-item>\nHükümler & Şartlar\n</button>\n</ion-item-group>\n\n<ion-item-group>\n  <ion-item-divider color="light">Hakkında</ion-item-divider>\n  <button ion-item>\nSürüm Bilgisi\n</button>\n<button ion-item>\nUygulamayı Oyla\n</button>\n</ion-item-group>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\7448\Desktop\isgucvarIsveren\src\pages\ayarlar\ayarlar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_ser__["a" /* UserSerProvider */]])
    ], AyarlarPage);
    return AyarlarPage;
}());

//# sourceMappingURL=ayarlar.js.map

/***/ })

});
//# sourceMappingURL=7.js.map