webpackJsonp([1],{

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TumOzgecmislerPageModule", function() { return TumOzgecmislerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tum_ozgecmisler__ = __webpack_require__(731);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TumOzgecmislerPageModule = /** @class */ (function () {
    function TumOzgecmislerPageModule() {
    }
    TumOzgecmislerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tum_ozgecmisler__["a" /* TumOzgecmislerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tum_ozgecmisler__["a" /* TumOzgecmislerPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__tum_ozgecmisler__["a" /* TumOzgecmislerPage */]
            ]
        })
    ], TumOzgecmislerPageModule);
    return TumOzgecmislerPageModule;
}());

//# sourceMappingURL=tum-ozgecmisler.module.js.map

/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TumOzgecmislerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ozgecmis_ser__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ozgecmis_filtrele_ozgecmis_filtrele__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_ser__ = __webpack_require__(24);
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
 * Generated class for the TumOzgecmislerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TumOzgecmislerPage = /** @class */ (function () {
    function TumOzgecmislerPage(navCtrl, navParams, ozgecmisSer, storage, events, userAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ozgecmisSer = ozgecmisSer;
        this.storage = storage;
        this.events = events;
        this.userAuth = userAuth;
        this.aktivite = 'okunmadı';
        this.searching = false;
        this.searchTerm = '';
        this.skip = 0;
        this.limit = 20;
        this.scrollEnable = true;
        this.detayAra = {};
        this.sirala = {};
        this.showSearchbar = true;
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]();
        if (!this.userAuth.currentUser) {
            this.userAuth.checkAuthentication().then(function (res) {
            }, function (err) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
            });
        }
        else {
            this.storage.get('user')
                .then(function (user) {
                _this.firma = user.firmaId;
                _this.userId = user._id;
                _this.ozgecmisListele();
            });
            // this.ilanId = this.navParams.get('ilanId');
            this.detayAra.tumfirma = 't';
        }
    }
    TumOzgecmislerPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad TumOzgecmislerPage');
        this.searchControl.valueChanges.debounceTime(700).subscribe(function (search) {
            _this.scrollEnable = true;
            _this.skip = 0;
            _this.ozgecmisListele();
            console.log('ilanlistele searchkontrol çağrıldı');
        });
        this.events.subscribe('ozgecmis:begen', function (a) {
            _this.scrollEnable = true;
            // this.infiniteScroll.enable(true);
            _this.skip = 0;
            console.log('ozgecmis begen event çağrıldı');
            _this.ozgecmisListele();
        });
        this.events.subscribe('ozgecmis:filtered_tüm', function (a) {
            _this.scrollEnable = true;
            // this.infiniteScroll.enable(true);
            _this.skip = 0;
            if (a) {
                // console.log('filtre true');
                _this.detayAra = {};
                // this.firma = 'I2I-Systems';
                _this.sirala = {};
            }
            console.log('ozgecmislistele filtre çağrıldı');
            _this.ozgecmisListele();
        });
    };
    TumOzgecmislerPage.prototype.ozgecmisListele = function () {
        var _this = this;
        // let basvurular = [];
        // basvurular.push(this.ilanId);
        this.detayAra.userId = this.userId;
        // this.detayAra.basvuruId = this.ilanId;
        this.detayAra.segment = this.aktivite;
        if (this.detayAra.tumfirma == 'f')
            this.detayAra.firma = this.firma;
        else
            this.detayAra.firma = undefined;
        this.searching = true;
        this.ozgecmisSer.getOzgecmisler(this.searchTerm, this.detayAra, this.sirala, this.skip, this.limit)
            .then(function (ozgecmisler) {
            _this.ozgecmisList = ozgecmisler;
            console.log(JSON.stringify(_this.ozgecmisList) + "basvuruya ait özgecmislist");
            _this.searching = false;
        });
    };
    TumOzgecmislerPage.prototype.toOzgecmisDetay = function (ozgecmis) {
        // console.log(JSON.stringify(this.basvuruList)+'sonuc basvuru');
        console.log(JSON.stringify(ozgecmis) + 'ozgecmisDetay');
        this.navCtrl.push('OzgecmisDetayPage', {
            ozgecmisTapped: ozgecmis,
            aktivite: this.aktivite,
            ozgecmisId: ozgecmis._id
        });
    };
    TumOzgecmislerPage.prototype.presentFilter = function (myEvent) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__ozgecmis_filtrele_ozgecmis_filtrele__["a" /* OzgecmisFiltrelePage */], {
            detayAra: this.detayAra,
            sirala: this.sirala,
            page: 'tüm'
        });
    };
    TumOzgecmislerPage.prototype.toggleSearchbar = function () {
        this.showSearchbar = !this.showSearchbar;
        // this.content.resize();
    };
    TumOzgecmislerPage.prototype.toggleSegment = function () {
        this.showSearchbar = !this.showSearchbar;
        this.content.resize();
    };
    TumOzgecmislerPage.prototype.getAge = function (date) {
        return ~~(((new Date()).getTime() - (new Date(date)).getTime()) / (31557600000));
    };
    TumOzgecmislerPage.prototype.onSearchInput = function () {
        this.searching = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], TumOzgecmislerPage.prototype, "content", void 0);
    TumOzgecmislerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tum-ozgecmisler',template:/*ion-inline-start:"C:\Users\7448\Desktop\isgucvarIsveren\src\pages\tum-ozgecmisler\tum-ozgecmisler.html"*/'<!--\n\n  Generated template for the TumOzgecmislerPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Tüm Özgeçmişler</ion-title>\n\n    <ion-buttons end>\n\n    <button ion-button icon-only (click)="toggleSearchbar()">\n\n    <ion-icon name="search"></ion-icon>\n\n    </button>\n\n    <button ion-button icon-only (click)="presentFilter($event)">\n\n      <ion-icon name="funnel"></ion-icon>\n\n    </button>\n\n    </ion-buttons>\n\n    </ion-navbar>\n\n    <ion-toolbar >\n\n    <ion-segment [(ngModel)]="aktivite" color="dark" (ionChange)="ozgecmisListele()">\n\n      <ion-segment-button value="okunmadı">\n\n        <ion-icon name="eye"></ion-icon>\n\n      </ion-segment-button>\n\n      <ion-segment-button value="okundu">\n\n        <ion-icon name="thumbs-down"></ion-icon>\n\n      </ion-segment-button>\n\n      <ion-segment-button value="begen">\n\n        <ion-icon name="thumbs-up"></ion-icon>\n\n      </ion-segment-button>\n\n      <ion-segment-button value="cokbegen">\n\n        <ion-icon name="thumbs-up"></ion-icon>\n\n        <ion-icon name="thumbs-up"></ion-icon>\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n    </ion-toolbar>\n\n    </ion-header>\n\n\n\n    <ion-content #content>\n\n    <ion-searchbar [hidden]="showSearchbar"  [(ngModel)]="searchTerm" [formControl]="searchControl" placeholder="Anahtar kelime">\n\n    </ion-searchbar>\n\n    <div *ngIf="searching" class="spinner-container">\n\n      <ion-spinner></ion-spinner>\n\n    </div>\n\n\n\n    <!-- <div [ngSwitch]="aktivite">\n\n    <div  *ngSwitchCase="\'okunmadı\'"> -->\n\n    <ion-list text-wrap>\n\n    <button ion-item *ngFor="let ozgecmis of ozgecmisList" (click)="toOzgecmisDetay(ozgecmis)">\n\n      <ion-thumbnail item-left>\n\n        <img class="img-circle" [src]="ozgecmis.resim">\n\n      </ion-thumbnail>\n\n\n\n      <h2>{{ozgecmis.isim}} {{ozgecmis.soyisim}}</h2>\n\n      <p>{{ozgecmis.unvan}}</p>\n\n      <p>{{getAge(ozgecmis.dogumTarihi)}} yaşında, {{ozgecmis.yilTecrube}} yıl tecrübe</p>\n\n\n\n    </button>\n\n    </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\7448\Desktop\isgucvarIsveren\src\pages\tum-ozgecmisler\tum-ozgecmisler.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_ozgecmis_ser__["a" /* OzgecmisSerProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_7__providers_user_ser__["a" /* UserSerProvider */]])
    ], TumOzgecmislerPage);
    return TumOzgecmislerPage;
}());

//# sourceMappingURL=tum-ozgecmisler.js.map

/***/ })

});
//# sourceMappingURL=1.js.map