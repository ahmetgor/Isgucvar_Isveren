webpackJsonp([2],{

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IlanDetayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ozgecmislerim_ozgecmislerim__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ilan_ekle_ilan_ekle__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_ilan_ser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__ = __webpack_require__(228);
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
 * Generated class for the IlanDetayPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var IlanDetayPage = /** @class */ (function () {
    function IlanDetayPage(navCtrl, navParams, events, ilanSer, storage, socialSharing, actionSheetCtrl, plt, face) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.ilanSer = ilanSer;
        this.storage = storage;
        this.socialSharing = socialSharing;
        this.actionSheetCtrl = actionSheetCtrl;
        this.plt = plt;
        this.face = face;
        console.log("ilandetay");
        this.ilan = this.navParams.get('ilan');
        this.ilanId = this.navParams.get('ilanId') ? this.navParams.get('ilanId') : this.ilan._id;
        this.guncelleyen = this.navParams.get('guncelleyen');
        this.storage.get('user')
            .then(function (user) {
            _this.guncelleyen = user.email;
        });
        // this.basvuruList = this.navParams.get('basvurulist');
        // this.kaydedilenList = this.navParams.get('kaydedilenlist');
        // this.ilanId = this.navParams.get('ilanId');
    }
    IlanDetayPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad IlanDetayPage');
        this.ilanSer.getIlan(this.ilanId)
            .then(function (ilan) {
            _this.ilan = ilan;
        });
        this.events.subscribe('ilan:guncelle', function () {
            console.log('ilan ekle event çağrıldı');
            console.log(_this.ilan._id + '  id  ' + _this.ilan.id);
            _this.ilanSer.getIlan(_this.ilanId)
                .then(function (ilan) {
                _this.ilan = ilan;
            });
        });
    };
    IlanDetayPage.prototype.shareFace = function () {
        var options = {
            method: "share",
            href: window.location.origin + '/#/ilandetay/' + this.ilan._id,
            caption: "Such caption, very feed.",
            description: "Much description"
            // picture: this.ilan.resim
        };
        console.log("share face");
        FB.ui({
            method: 'share',
            href: window.location.origin + '/#/ilandetay/' + this.ilan._id,
        }, function (response) { });
    };
    IlanDetayPage.prototype.share = function () {
        if (!this.plt.is('core') && !this.plt.is('mobilebrowser')) {
            var options = {
                message: "İşgüçvar ilanına göz atın:\n\n",
                // subject: 'the subject', // fi. for email
                // files: [this.ilan.resim], // an array of filenames either locally or remotely
                url: window.location.origin + "/#/ilandetay/" + this.ilan._id,
                chooserTitle: 'Uygulama seçin:' // Android only, you can override the default share sheet title
            };
            this.socialSharing.shareWithOptions(options)
                .then(function (result) {
                console.log("Shared to app: " + result.app); // On Android result.app is currently empty. On iOS it's empty when sharing is cancelled (result.completed=false)
            }).catch(function (msg) {
                console.log("Sharing failed with message: " + msg);
            });
        }
        else
            this.presentActionSheet();
    };
    IlanDetayPage.prototype.shareLinked = function () {
        var payload = {
            "comment": "Yeni bir İşgüçvar ilanı!" + window.location.origin + '/#/ilandetay/' + this.ilan._id,
            "visibility": {
                "code": "anyone"
            }
        };
        IN.API.Raw("/people/~/shares?format=json")
            .method("POST")
            .body(JSON.stringify(payload))
            .result(function (onSuccess) { })
            .error(function (onError) { });
    };
    IlanDetayPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'İlan Paylaş',
            buttons: [
                {
                    text: 'Facebook',
                    icon: 'logo-facebook',
                    handler: function () {
                        _this.shareFace();
                    }
                }, {
                    text: 'LinkedIn',
                    icon: 'logo-linkedin',
                    handler: function () {
                        console.log('Archive clicked');
                        _this.shareLinked();
                    }
                }, {
                    text: 'İptal',
                    role: 'cancel',
                    icon: 'close',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    IlanDetayPage.prototype.toOzgecmis = function () {
        // console.log(JSON.stringify(this.basvuruList)+'sonuc basvuru');
        console.log(JSON.stringify(this.ilan) + 'ilan');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__ozgecmislerim_ozgecmislerim__["a" /* OzgecmislerimPage */], {
            ilanId: this.ilan._id,
            guncelleyen: this.guncelleyen
        });
    };
    IlanDetayPage.prototype.guncelleIlan = function () {
        console.log(JSON.stringify(this.ilan) + 'ilan');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__ilan_ekle_ilan_ekle__["a" /* IlanEklePage */], {
            ilanDetayId: this.ilan._id,
            update: 'Y'
        });
    };
    IlanDetayPage.prototype.getDays = function (d1) {
        // console.log(Date.parse(d1)+' date');
        var diff = Math.floor(((new Date()).getTime() - Date.parse(d1)) / 86400000);
        return diff;
    };
    IlanDetayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ilan-detay',template:/*ion-inline-start:"C:\Users\7448\Desktop\isgucvarIsveren\src\pages\ilan-detay\ilan-detay.html"*/'<!--\n\n  Generated template for the IlanDetayPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <script type="in/Login"></script>\n\n\n\n  <ion-navbar>\n\n    <ion-buttons end>\n\n  <button ion-button icon-only (click)="share()">\n\n    <ion-icon name="share"></ion-icon>\n\n  </button>\n\n</ion-buttons>\n\n    <ion-title>İlan Detayı</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <div *ngIf="ilan && ilan.baslik">\n\n\n\n  <ion-item text-wrap no-lines class="item">\n\n    <ion-thumbnail item-left>\n\n      <img class="img-circle" [src]="ilan.firma.resim">\n\n    </ion-thumbnail>\n\n\n\n    <ion-row>\n\n    <ion-col>\n\n    <h2>{{ilan.baslik}}</h2>\n\n    </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col>\n\n    <div class="firma"><h4>{{ilan.firma.firma}}</h4></div>\n\n    </ion-col>\n\n    <ion-col>\n\n      <h4 align="right" [class.my-class]="getDays(ilan.olusurmaTarih) < 10">\n\n        <ion-icon name="calendar"></ion-icon>\n\n        {{getDays(ilan.olusurmaTarih)}} gün\n\n      </h4>\n\n    </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-auto>\n\n        <ion-icon name="pin"></ion-icon>\n\n          {{ilan.il}}\n\n\n\n    </ion-col>\n\n    <ion-col>\n\n      <p align="right">\n\n    <ion-icon name="briefcase"></ion-icon>\n\n    {{ilan.tip}}\n\n  </p>\n\n</ion-col>\n\n  </ion-row>\n\n</ion-item>\n\n<!-- <ion-toolbar> -->\n\n<button ion-button block icon-left color="primary" (click)="toOzgecmis()">\n\n  <ion-icon name="person"></ion-icon>\n\n  Başvuranlar</button>\n\n<!-- </ion-toolbar> -->\n\n\n\n  <!-- <div *ngIf="ilan"> -->\n\n\n\n  <ion-card>\n\n  <ion-card-header>\n\n    <b>Açıklama</b>\n\n  </ion-card-header>\n\n  <ion-card-content style="white-space: pre-wrap;">{{ilan.aciklama}}\n\n  </ion-card-content>\n\n</ion-card>\n\n\n\n<ion-card>\n\n<ion-card-header>\n\n  <b>Detaylar</b>\n\n</ion-card-header>\n\n<ion-card-content>\n\n  <!-- <ion-list>\n\n    <ion-item> -->\n\n  <p><b>Tecrübe: </b> {{ilan.tecrube}}</p>\n\n    <!-- </ion-item>\n\n    <ion-item> -->\n\n      <p><b>Eğitim: </b> {{ilan.egitim}}</p>\n\n    <!-- </ion-item>\n\n  </ion-list> -->\n\n  <p><b>Askerlik: </b> {{ilan.askerlik}}</p>\n\n  <p><b>Ehliyet: </b> {{ilan.ehliyet}}</p>\n\n  <p><b>İlan Tarihi: </b> {{ilan.olusurmaTarih}}</p>\n\n  <p><b>İlan No: </b> {{ilan.id}}</p>\n\n</ion-card-content>\n\n</ion-card>\n\n\n\n<button ion-button block icon-left color="secondary" (click)="guncelleIlan()">\n\n  <ion-icon name="create"></ion-icon>\n\n  Güncelle</button>\n\n\n\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\7448\Desktop\isgucvarIsveren\src\pages\ilan-detay\ilan-detay.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_ilan_ser__["a" /* IlanSerProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_ilan_ser__["a" /* IlanSerProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__["a" /* Facebook */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__["a" /* Facebook */]) === "function" && _j || Object])
    ], IlanDetayPage);
    return IlanDetayPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=ilan-detay.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OzgecmislerimPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ozgecmis_ser__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ozgecmis_filtrele_ozgecmis_filtrele__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_ser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(34);
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
 * Generated class for the OzgecmislerimPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var OzgecmislerimPage = /** @class */ (function () {
    function OzgecmislerimPage(navCtrl, navParams, ozgecmisSer, storage, events, userAuth) {
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
        this.sirala = '{}';
        this.showSearchbar = true;
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]();
        if (!this.userAuth.currentUser) {
            this.userAuth.checkAuthentication().then(function (res) {
            }, function (err) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
            });
        }
        else {
            this.ilanId = this.navParams.get('ilanId');
            this.storage.get('user')
                .then(function (user) {
                console.log(user._id + 'userid');
                _this.userId = user._id;
                _this.olusturan = user.email;
                console.log("constructor çağrıldı");
                _this.ozgecmisListele();
            });
        }
    }
    OzgecmislerimPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad OzgecmislerimPage');
        this.searchControl.valueChanges.debounceTime(700).subscribe(function (search) {
            _this.scrollEnable = true;
            _this.skip = 0;
            // this.infiniteScroll.enable(true);
            console.log('ilanlistele searchkontrol çağrıldı');
            _this.ozgecmisListele();
        });
        this.events.subscribe('ozgecmis:begen', function (a) {
            _this.scrollEnable = true;
            // this.infiniteScroll.enable(true);
            _this.skip = 0;
            // if(a) {
            //   this.detayAra = {};
            //   this.sirala = '{}';
            // }
            console.log('ozgecmis begen event çağrıldı');
            _this.ozgecmisListele();
        });
        this.events.subscribe('ozgecmis:filtered_tek', function (a) {
            _this.scrollEnable = true;
            // this.infiniteScroll.enable(true);
            _this.skip = 0;
            if (a) {
                console.log('filtre true');
                _this.detayAra = {};
                _this.sirala = '{}';
            }
            console.log('ozgecmislistele filtre çağrıldı');
            _this.ozgecmisListele();
        });
    };
    OzgecmislerimPage.prototype.ozgecmisListele = function () {
        var _this = this;
        // let basvurular = [];
        // basvurular.push(this.ilanId);
        this.detayAra.basvuruId = this.ilanId;
        this.detayAra.olusturan = this.olusturan;
        this.detayAra.segment = this.aktivite;
        this.detayAra.userId = this.userId;
        this.searching = true;
        this.ozgecmisSer.getOzgecmisler(this.searchTerm, this.detayAra, this.sirala, this.skip, this.limit)
            .then(function (ozgecmisler) {
            _this.ozgecmisList = ozgecmisler;
            console.log(JSON.stringify(_this.ozgecmisList) + "basvuruya ait özgecmislist");
            _this.searching = false;
        });
    };
    OzgecmislerimPage.prototype.toOzgecmisDetay = function (ozgecmis) {
        // console.log(JSON.stringify(this.basvuruList)+'sonuc basvuru');
        console.log(JSON.stringify(ozgecmis) + 'ozgecmisDetay');
        this.navCtrl.push('OzgecmisDetayPage', {
            ozgecmisTapped: ozgecmis,
            aktivite: this.aktivite,
            ozgecmisId: ozgecmis._id
        });
    };
    OzgecmislerimPage.prototype.presentFilter = function (myEvent) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__ozgecmis_filtrele_ozgecmis_filtrele__["a" /* OzgecmisFiltrelePage */], {
            detayAra: this.detayAra,
            sirala: this.sirala,
            page: 'tek'
        });
    };
    OzgecmislerimPage.prototype.toggleSearchbar = function () {
        this.showSearchbar = !this.showSearchbar;
        // this.content.resize();
    };
    OzgecmislerimPage.prototype.toggleSegment = function () {
        this.showSearchbar = !this.showSearchbar;
        this.content.resize();
    };
    OzgecmislerimPage.prototype.getAge = function (date) {
        return ~~(((new Date()).getTime() - (new Date(date)).getTime()) / (31557600000));
    };
    OzgecmislerimPage.prototype.onSearchInput = function () {
        this.searching = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], OzgecmislerimPage.prototype, "content", void 0);
    OzgecmislerimPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ozgecmislerim',template:/*ion-inline-start:"C:\Users\7448\Desktop\isgucvarIsveren\src\pages\ozgecmislerim\ozgecmislerim.html"*/'<!--\n\n  Generated template for the OzgecmislerimPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Özgeçmişlerim</ion-title>\n\n    <ion-buttons end>\n\n  <button ion-button icon-only (click)="toggleSearchbar()">\n\n    <ion-icon name="search"></ion-icon>\n\n  </button>\n\n  <button ion-button icon-only (click)="presentFilter($event)">\n\n    <ion-icon name="funnel"></ion-icon>\n\n  </button>\n\n</ion-buttons>\n\n  </ion-navbar>\n\n  <ion-toolbar >\n\n    <ion-segment [(ngModel)]="aktivite" color="dark" (ionChange)="ozgecmisListele()">\n\n      <ion-segment-button value="okunmadı">\n\n        <ion-icon name="eye"></ion-icon>\n\n      </ion-segment-button>\n\n      <ion-segment-button value="okundu">\n\n        <ion-icon name="thumbs-down"></ion-icon>\n\n      </ion-segment-button>\n\n      <ion-segment-button value="begen">\n\n        <ion-icon name="thumbs-up"></ion-icon>\n\n      </ion-segment-button>\n\n      <ion-segment-button value="cokbegen">\n\n        <ion-icon name="thumbs-up"></ion-icon>\n\n        <ion-icon name="thumbs-up"></ion-icon>\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content #content>\n\n  <ion-searchbar [hidden]="showSearchbar"  [(ngModel)]="searchTerm" [formControl]="searchControl" placeholder="Anahtar kelime"></ion-searchbar>\n\n  <div *ngIf="searching" class="spinner-container">\n\n      <ion-spinner></ion-spinner>\n\n  </div>\n\n\n\n  <!-- <div [ngSwitch]="aktivite">\n\n    <div  *ngSwitchCase="\'okunmadı\'"> -->\n\n  <ion-list text-wrap>\n\n    <button ion-item *ngFor="let ozgecmis of ozgecmisList" (click)="toOzgecmisDetay(ozgecmis)">\n\n      <ion-thumbnail item-left>\n\n        <img class="img-circle" [src]="ozgecmis.resim">\n\n      </ion-thumbnail>\n\n\n\n      <h2>{{ozgecmis.isim}} {{ozgecmis.soyisim}}</h2>\n\n      <p>{{ozgecmis.unvan}}</p>\n\n      <p>{{getAge(ozgecmis.dogumTarihi)}} yaşında, {{ozgecmis.yilTecrube}} yıl tecrübe</p>\n\n\n\n    </button>\n\n  </ion-list>\n\n<!-- </div> -->\n\n\n\n<!-- <div  *ngSwitchCase="\'okundu\'">\n\n<ion-list text-wrap>\n\n<button ion-item *ngFor="let ozgecmis of ozgecmisList" (click)="toOzgecmisDetay(ozgecmis.ozgecmis)">\n\n  <ion-thumbnail item-left>\n\n    <img [src]="ozgecmis.ozgecmis.resim.link">\n\n  </ion-thumbnail>\n\n\n\n  <h2>{{ozgecmis.ozgecmis.isim}} {{ozgecmis.ozgecmis.soyisim}}</h2>\n\n  <p>{{ozgecmis.ozgecmis.unvan}}</p>\n\n  <p>{{getAge(ozgecmis.ozgecmis.dogumTarihi)}} yaşında, {{ozgecmis.ozgecmis.yilTecrube}} yıl tecrübe</p>\n\n\n\n</button>\n\n</ion-list>\n\n</div>\n\n\n\n<div  *ngSwitchCase="\'begen\'">\n\n<ion-list text-wrap>\n\n<button ion-item *ngFor="let ozgecmis of ozgecmisList" (click)="toOzgecmisDetay(ozgecmis.ozgecmis)">\n\n  <ion-thumbnail item-left>\n\n    <img [src]="ozgecmis.ozgecmis.resim.link">\n\n  </ion-thumbnail>\n\n\n\n  <h2>{{ozgecmis.ozgecmis.isim}} {{ozgecmis.ozgecmis.soyisim}}</h2>\n\n  <p>{{ozgecmis.ozgecmis.unvan}}</p>\n\n  <p>{{getAge(ozgecmis.ozgecmis.dogumTarihi)}} yaşında, {{ozgecmis.ozgecmis.yilTecrube}} yıl tecrübe</p>\n\n\n\n</button>\n\n</ion-list>\n\n</div>\n\n\n\n<div  *ngSwitchCase="\'cokbegen\'">\n\n<ion-list text-wrap>\n\n<button ion-item *ngFor="let ozgecmis of ozgecmisList" (click)="toOzgecmisDetay(ozgecmis.ozgecmis)">\n\n  <ion-thumbnail item-left>\n\n    <img [src]="ozgecmis.ozgecmis.resim.link">\n\n  </ion-thumbnail>\n\n\n\n  <h2>{{ozgecmis.ozgecmis.isim}} {{ozgecmis.ozgecmis.soyisim}}</h2>\n\n  <p>{{ozgecmis.ozgecmis.unvan}}</p>\n\n  <p>{{getAge(ozgecmis.ozgecmis.dogumTarihi)}} yaşında, {{ozgecmis.ozgecmis.yilTecrube}} yıl tecrübe</p>\n\n\n\n</button>\n\n</ion-list>\n\n</div>\n\n</div> -->\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\7448\Desktop\isgucvarIsveren\src\pages\ozgecmislerim\ozgecmislerim.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_ozgecmis_ser__["a" /* OzgecmisSerProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_6__providers_user_ser__["a" /* UserSerProvider */]])
    ], OzgecmislerimPage);
    return OzgecmislerimPage;
}());

//# sourceMappingURL=ozgecmislerim.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IlanEklePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_ilan_ser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ilanlarim_ilanlarim__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_ser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(34);
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
 * Generated class for the IlanEklePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var IlanEklePage = /** @class */ (function () {
    function IlanEklePage(navCtrl, navParams, formBuilder, ilanSer, toastCtrl, storage, events, userAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.ilanSer = ilanSer;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.events = events;
        this.userAuth = userAuth;
        this.detay = {};
        this.sehirler = [];
        if (!this.userAuth.currentUser) {
            this.userAuth.checkAuthentication().then(function (res) {
            }, function (err) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
            });
        }
        else {
            this.sehirler = ilanSer.sehirler;
            // console.log(JSON.stringify(this.sehirler));
            this.detayId = this.navParams.get('ilanDetayId');
            this.storage.get('user')
                .then(function (user) {
                _this.user = user;
                _this.detay.firmaAdi = _this.user.firma;
                _this.guncelleyen = _this.user.email;
            });
            // this.guncelleyen = this.navParams.get('guncelleyen');
            //TODO: firmabilgileri
            // this.firmaInfo.resim =  'https://res.cloudinary.com/isgucvar/image/upload/v1496613774/indir_xexwkb.png'
            // this.firmaInfo.firma = 'I2I-System';
            this.detay.enabled = true;
            // this.orgDetay = this.navParams.get('orgDetay') ? this.navParams.get('orgDetay') : {};
            if (this.detayId) {
                ilanSer.getIlan(this.detayId)
                    .then(function (ilan) {
                    _this.detay = ilan;
                    _this.detay.firmaAdi = _this.user.firma;
                });
            }
            this.ilanFormGroup = formBuilder.group({
                baslik: [this.detay.baslik, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]],
                firma: [this.detay.firma],
                tip: [this.detay.tip, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]],
                il: [this.detay.il, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]],
                askerlik: [this.detay.askerlik, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]],
                tecrubedurum: [this.detay.tecrubedurum, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]],
                ehliyet: [this.detay.ehliyet, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]],
                egitimdurum: [this.detay.egitimdurum, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]],
                aciklama: [this.detay.yilTecrube, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]]
            });
        }
    }
    IlanEklePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IlanEklePage');
    };
    IlanEklePage.prototype.add = function () {
        var _this = this;
        console.log(JSON.stringify(this.detay) + 'detay');
        console.log(JSON.stringify(this.user) + 'detay');
        this.detay.guncelleyen = this.guncelleyen;
        this.detay.firma = this.user.firmaId;
        if (!this.navParams.get('update')) {
            console.log('ilan yeni ekleniyor');
            this.detay.olusturan = this.guncelleyen;
            // this.detay.resim = this.firmaInfo.resim;
            // this.detay.firma = this.firmaInfo.firma;
            this.ilanSer.createIlan(this.detay)
                .then(function (res) {
                if (_this.navCtrl.canGoBack()) {
                    _this.navCtrl.pop();
                    _this.events.publish('ilan:guncelle');
                }
                else
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__ilanlarim_ilanlarim__["a" /* IlanlarimPage */]);
            })
                .catch(function (err) {
                return;
            });
        }
        else {
            console.log(this.detay + 'ilan yeni ekleniyor');
            this.ilanSer.updateIlan(this.detay)
                .then(function (res) {
                if (_this.navCtrl.canGoBack()) {
                    _this.navCtrl.pop();
                    _this.events.publish('ilan:guncelle');
                }
                else
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__ilanlarim_ilanlarim__["a" /* IlanlarimPage */]);
                // this.storage.set('ozgecmis', this.basvurulist)
                // this.orgDetay = this.detay;
                // console.log(JSON.stringify(this.orgDetay)+'orgDetay');
                // this.events.publish('ilan:ekle');
            })
                .catch(function (err) {
                return;
            });
        }
        // this.navCtrl.setRoot(IlanlarimPage);
    };
    IlanEklePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ilan-ekle',template:/*ion-inline-start:"C:\Users\7448\Desktop\isgucvarIsveren\src\pages\ilan-ekle\ilan-ekle.html"*/'<!--\n\n  Generated template for the IlanEklePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>İlan Ekle & Güncelle</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div *ngIf="detay && user">\n\n    <div [class.ilan]="!detay.enabled">\n\n\n\n    <form [formGroup]="ilanFormGroup">\n\n<!-- <form [formGroup]="ozgecmisFormGroup"> -->\n\n    <!-- <ion-label floating>Ünvan / Son Pozisyon</ion-label> -->\n\n\n\n    <ion-item>\n\n        <ion-label floating>Başlık</ion-label>\n\n        <ion-input formControlName="baslik" type="text" [(ngModel)]="detay.baslik"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label floating>Firma</ion-label>\n\n        <ion-input formControlName="firma" disabled type="text" [(ngModel)]="detay.firmaAdi"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label floating>Tip</ion-label>\n\n      <ion-select formControlName="tip" type="text" [(ngModel)]="detay.tip" cancelText="İptal" okText="Tamam">\n\n        <ion-option value=\'Tam Z.\'>Tam Z.</ion-option>\n\n        <ion-option value=\'Yarı Z.\'>Yarı Z.</ion-option>\n\n        <ion-option value=\'Proje Bazlı\'>Proje Bazlı</ion-option>\n\n        <ion-option value=\'Staj\'>Staj</ion-option>\n\n        <ion-option value=\'Günlük\'>Günlük</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>İl</ion-label>\n\n      <ion-select formControlName="il" [(ngModel)]="detay.il" cancelText="İptal" okText="Tamam">\n\n        <!-- <ion-option value=\'Konumum\'>Konumum</ion-option> -->\n\n        <ion-option *ngFor="let item of sehirler" value=\'{{item.sehir}}\'>{{item.sehir}}</ion-option>\n\n        <!-- <ion-option value=\'İstanbul\'>İstanbul</ion-option> -->\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n    <ion-label floating>Askerlik</ion-label>\n\n    <ion-select formControlName="askerlik" [(ngModel)]="detay.askerlik" cancelText="İptal" okText="Tamam">\n\n      <ion-option value="Yapıldı/Muaf" >Yapıldı/Muaf</ion-option>\n\n      <ion-option value="Yapılmadı/Tecilli">Yapılmadı/Tecilli</ion-option>\n\n    </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label floating>Ehliyet</ion-label>\n\n        <ion-input formControlName="ehliyet" type="text" [(ngModel)]="detay.ehliyet"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n    <ion-label floating>Eğitim</ion-label>\n\n    <ion-select formControlName="egitimdurum" [(ngModel)]="detay.egitim" multiple="true"  cancelText="İptal" okText="Tamam">\n\n      <ion-option value=\'Lise\'>Lise</ion-option>\n\n      <ion-option value=\'Lisans\'>Lisans</ion-option>\n\n      <ion-option value=\'Yüksek Lisans - Doktora\'>Yüksek Lisans - Doktora</ion-option>\n\n    </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Tecrübe</ion-label>\n\n      <ion-select formControlName="tecrubedurum" [(ngModel)]="detay.tecrube" multiple="true" cancelText="İptal" okText="Tamam">\n\n        <!-- <ion-option value=\'\' selected="true">Farketmez</ion-option> -->\n\n        <ion-option value=\'Az Tecrübeli (Junior)\'>Az Tecrübeli (Junior)</ion-option>\n\n        <ion-option value=\'Orta Tecrübeli (Midlevel)\'>Orta Tecrübeli (Midlevel)</ion-option>\n\n        <ion-option value=\'Çok Tecrübeli (Senior)\'>Çok Tecrübeli (Senior)</ion-option>\n\n        <ion-option value=\'Yönetici (Manager)\'>Yönetici (Manager)</ion-option>\n\n        <ion-option value=\'Stajyer\'>Stajyer</ion-option>\n\n        <ion-option value=\'Hizmet Personeli - İşçi\'>Hizmet Personeli - İşçi</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label floating>Açıklama</ion-label>\n\n        <ion-textarea rows="5" formControlName="aciklama" type="text" [(ngModel)]="detay.aciklama"></ion-textarea>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Aktiflik</ion-label>\n\n      <ion-toggle [ngModelOptions]="{standalone: true}" [(ngModel)]="detay.enabled"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item no-lines *ngIf="!ilanFormGroup.valid">\n\n        <p style="color:red;">Tüm alanlar zorunlu</p>\n\n    </ion-item>\n\n    <!-- <div *ngIf="(des==\'tecrubeEkle\'||des==\'egitimEkle\'||des==\'yabanciDilEkle\'||des==\'sertifikaEkle\')">\n\n      <p></p> -->\n\n  <button ion-button block icon-left color="secondary" [disabled]="!ilanFormGroup.valid" (click)="add()">\n\n    <ion-icon name="add-circle"></ion-icon>\n\n    Ekle&Güncelle</button>\n\n  <!-- </div> -->\n\n\n\n  <!-- <div *ngIf="(des!=\'tecrubeEkle\'&&des!=\'egitimEkle\'&&des!=\'yabanciDilEkle\'&&des!=\'sertifikaEkle\')">\n\n    <p></p>\n\n    <ion-row>\n\n      <ion-col *ngIf="(des!=\'kisisel\'&&des!=\'iletisim\'&&des!=\'bilgisayar\')">\n\n    <button ion-button block icon-left color="danger" (click)="delete()">\n\n      <ion-icon name="trash"></ion-icon>\n\n      Sil</button>\n\n    </ion-col>\n\n    <ion-col>\n\n    <button ion-button block icon-left [disabled]="!kisiselFormGroup.valid" (click)="save()">\n\n      <ion-icon name="checkmark"></ion-icon>\n\n      Güncelle</button>\n\n    </ion-col>\n\n    </ion-row>\n\n  </div> -->\n\n</form>\n\n</div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\7448\Desktop\isgucvarIsveren\src\pages\ilan-ekle\ilan-ekle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__providers_ilan_ser__["a" /* IlanSerProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_6__providers_user_ser__["a" /* UserSerProvider */]])
    ], IlanEklePage);
    return IlanEklePage;
}());

//# sourceMappingURL=ilan-ekle.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IlanlarimPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ilan_ser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ilan_filtrele_ilan_filtrele__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_ser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(34);
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
 * Generated class for the IlanlarimPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var IlanlarimPage = /** @class */ (function () {
    function IlanlarimPage(navCtrl, navParams, ilanSer, modalCtrl, events, userAuth, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ilanSer = ilanSer;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.userAuth = userAuth;
        this.storage = storage;
        // basvuruList: any;
        // kaydedilenList: any;
        this.detayAra = {};
        this.sirala = '{}';
        this.searching = false;
        this.searchTerm = '';
        this.skip = 0;
        this.limit = 20;
        this.scrollEnable = true;
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]();
        if (!this.userAuth.currentUser) {
            this.userAuth.checkAuthentication().then(function (res) {
            }, function (err) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
            });
        }
        else {
            this.storage.get('user')
                .then(function (user) {
                _this.user = user;
                console.log(JSON.stringify(user));
                _this.detayAra.olusturan = _this.user.email;
                _this.ilanListele();
            });
        }
    }
    IlanlarimPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad IlanlarimPage');
        console.log('ionViewDidLoad SonucPage çağrıldı');
        this.searchControl.valueChanges.debounceTime(700).subscribe(function (search) {
            _this.scrollEnable = true;
            _this.skip = 0;
            console.log('ilanlistele searchkontrol çağrıldı');
            _this.ilanListele();
            console.log('searchkontrol çağrıldı');
            // }
        });
        this.events.subscribe('ilan:filteredilan', function (a) {
            _this.scrollEnable = true;
            // this.infiniteScroll.enable(true);
            _this.skip = 0;
            if (a == "clear") {
                // console.log('filtre true');
                _this.detayAra = {};
                _this.detayAra.olusturan = _this.user.email;
                _this.sirala = '{}';
            }
            console.log('ilanlistele filtre çağrıldı');
            _this.ilanListele();
        });
        this.events.subscribe('ilan:ekle', function () {
            console.log('ilan ekle event çağrıldı');
            _this.scrollEnable = true;
            _this.skip = 0;
            _this.ilanListele();
        });
    };
    IlanlarimPage.prototype.ilanListele = function () {
        var _this = this;
        this.searching = true;
        this.ilanSer.getIlanlar(this.searchTerm, this.detayAra, this.sirala, this.skip, this.limit)
            .then(function (ilanlar) {
            _this.ilanList = ilanlar;
            // console.log(JSON.stringify(this.ilanList));
            _this.searching = false;
        });
    };
    IlanlarimPage.prototype.itemTapped = function (ev, ilan) {
        // console.log(JSON.stringify(this.basvuruList)+'sonuc basvuru');
        console.log(JSON.stringify(ilan) + 'ilan');
        this.navCtrl.push('IlanDetayPage', {
            ilan: ilan,
            guncelleyen: this.detayAra.olusturan,
            ilanId: ilan._id
            // basvurulist: this.basvuruSer.basvuruList,
            // kaydedilenlist: this.basvuruSer.kaydedilenList
        });
    };
    IlanlarimPage.prototype.presentFilter = function (myEvent) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__ilan_filtrele_ilan_filtrele__["a" /* IlanFiltrelePage */], {
            detayAra: this.detayAra,
            sirala: this.sirala,
            ilanlarim: 'ilan'
        });
    };
    IlanlarimPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        // this.infiniteScroll = infiniteScroll;
        // infiniteScroll.enable(true);
        // infiniteScroll.enable(false);
        setTimeout(function () {
            _this.skip = _this.skip + 1;
            _this.ilanSer.getIlanlar(_this.searchTerm, _this.detayAra, _this.sirala, _this.skip, _this.limit)
                .then(function (ilanlar) {
                console.log(JSON.stringify(ilanlar) + "ilanlar");
                if (Object.keys(ilanlar).length < _this.limit) {
                    console.log('true');
                    // infiniteScroll.enable(false);
                    _this.scrollEnable = false;
                    ;
                }
                console.log('false');
                // infiniteScroll.enable(true);
                // this.scrollEnable = true;
                for (var key in ilanlar) {
                    _this.ilanList.push(ilanlar[key]);
                }
            });
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    IlanlarimPage.prototype.getDays = function (d1) {
        // console.log(d1);
        // console.log(JSON.stringify(d1)+'datedate');
        // console.log((new Date(d1)).getTime() +' date'+ (new Date()).getTime());
        var diff = Math.floor(((new Date()).getTime() - (new Date(d1)).getTime()) / 86400000);
        return diff;
    };
    IlanlarimPage.prototype.onSearchInput = function () {
        this.searching = true;
    };
    IlanlarimPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ilanlarim',template:/*ion-inline-start:"C:\Users\7448\Desktop\isgucvarIsveren\src\pages\ilanlarim\ilanlarim.html"*/'<!--\n\n  Generated template for the IlanlarimPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>İlanlarım</ion-title>\n\n    <ion-buttons end>\n\n  <button ion-button icon-only (click)="presentFilter($event)">\n\n    <ion-icon name="funnel"></ion-icon>\n\n  </button>\n\n</ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-searchbar  [(ngModel)]="searchTerm"  [formControl]="searchControl" placeholder="Anahtar kelime"></ion-searchbar>\n\n  <div *ngIf="searching" class="spinner-container">\n\n      <ion-spinner></ion-spinner>\n\n  </div>\n\n  <ion-list text-wrap>\n\n\n\n    <button ion-item [class.ilan]="!ilan.enabled" *ngFor="let ilan of ilanList" (click)="itemTapped($event, ilan)">\n\n\n\n      <!-- <ion-icon [name]="item.icon" item-left></ion-icon> -->\n\n      <ion-thumbnail item-left *ngIf="ilan && ilan.firma">\n\n        <img class="img-circle" [src]="ilan.firma.resim">\n\n      </ion-thumbnail>\n\n      <ion-row>\n\n      <ion-col>\n\n      <h2>{{ilan.baslik}}</h2>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col>\n\n      <div class="firma"><h4>{{ilan.firmaAdi}}</h4></div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <h4 align="right" [class.my-class]="getDays(ilan.olusurmaTarih) < 10">\n\n          <ion-icon name="calendar"></ion-icon>\n\n          {{getDays(ilan.olusturmaTarih)}} gün\n\n        </h4>\n\n      </ion-col>\n\n      </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-auto>\n\n        <ion-icon name="pin"></ion-icon>\n\n          {{ilan.il}}\n\n\n\n    </ion-col>\n\n    <ion-col>\n\n      <p align="right">\n\n    <ion-icon name="briefcase"></ion-icon>\n\n    {{ilan.tip}}\n\n  </p>\n\n</ion-col>\n\n</ion-row>\n\n\n\n      <!-- <ion-col>\n\n        <p align="right">\n\n          <span style="float:left;">\n\n          <i *ngIf="checkBasvuru(ilan)">\n\n            <ion-icon name="checkmark-circle"></ion-icon>\n\n          </i>\n\n          <i *ngIf="checkKaydedilen(ilan)">\n\n            <ion-icon name="bookmark"></ion-icon>\n\n          </i>\n\n        </span>\n\n          <ion-icon name="briefcase"></ion-icon>\n\n          {{ilan.tip}}\n\n        </p>\n\n      </ion-col> -->\n\n    </button>\n\n  </ion-list>\n\n\n\n\n\n  <ion-infinite-scroll *ngIf="scrollEnable" (ionInfinite)="doInfinite($event)">\n\n\n\n  <ion-infinite-scroll-content\n\n  loadingText="İlanlar yükleniyor...">\n\n</ion-infinite-scroll-content>\n\n</ion-infinite-scroll>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\7448\Desktop\isgucvarIsveren\src\pages\ilanlarim\ilanlarim.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_ilan_ser__["a" /* IlanSerProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_ilan_ser__["a" /* IlanSerProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__providers_user_ser__["a" /* UserSerProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_user_ser__["a" /* UserSerProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]) === "function" && _g || Object])
    ], IlanlarimPage);
    return IlanlarimPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=ilanlarim.js.map

/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TumIlanlarPageModule", function() { return TumIlanlarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tum_ilanlar__ = __webpack_require__(730);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TumIlanlarPageModule = /** @class */ (function () {
    function TumIlanlarPageModule() {
    }
    TumIlanlarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tum_ilanlar__["a" /* TumIlanlarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tum_ilanlar__["a" /* TumIlanlarPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__tum_ilanlar__["a" /* TumIlanlarPage */]
            ]
        })
    ], TumIlanlarPageModule);
    return TumIlanlarPageModule;
}());

//# sourceMappingURL=tum-ilanlar.module.js.map

/***/ }),

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TumIlanlarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ilan_ser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ilan_detay_ilan_detay__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_ser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ilan_filtrele_ilan_filtrele__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(34);
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
 * Generated class for the TumIlanlarPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TumIlanlarPage = /** @class */ (function () {
    function TumIlanlarPage(navCtrl, navParams, ilanSer, modalCtrl, events, userAuth, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ilanSer = ilanSer;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.userAuth = userAuth;
        this.storage = storage;
        this.detayAra = {};
        this.sirala = '{}';
        this.searching = false;
        this.searchTerm = '';
        this.skip = 0;
        this.limit = 20;
        this.scrollEnable = true;
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]();
        if (!this.userAuth.currentUser) {
            this.userAuth.checkAuthentication().then(function (res) {
            }, function (err) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
            });
        }
        else {
            this.storage.get('user')
                .then(function (user) {
                _this.user = user;
                console.log(JSON.stringify(user));
                _this.detayAra.firma = _this.user.firma;
                _this.ilanListele();
            });
            // this.detayAra.firma = this.userAuth.user.firma;
            // this.detayAra.firma = "I2I-Systems";
        }
    }
    TumIlanlarPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad TumIlanlarPage');
        console.log('ionViewDidLoad SonucPage çağrıldı');
        this.searchControl.valueChanges.debounceTime(700).subscribe(function (search) {
            _this.scrollEnable = true;
            _this.skip = 0;
            // this.infiniteScroll.enable(true);
            console.log('ilanlistele searchkontrol çağrıldı');
            _this.ilanListele();
            console.log('searchkontrol çağrıldı');
            // }
        });
        this.events.subscribe('ilan:filteredtumilan', function (a) {
            _this.scrollEnable = true;
            // this.infiniteScroll.enable(true);
            _this.skip = 0;
            if (a == "clear") {
                // console.log('filtre true');
                _this.detayAra = {};
                _this.detayAra.firma = _this.user.firma;
                _this.sirala = '{}';
            }
            console.log('tümilanlistele filtre çağrıldı');
            _this.ilanListele();
        });
    };
    TumIlanlarPage.prototype.ilanListele = function () {
        var _this = this;
        this.searching = true;
        this.ilanSer.getIlanlar(this.searchTerm, this.detayAra, this.sirala, this.skip, this.limit)
            .then(function (ilanlar) {
            _this.ilanList = ilanlar;
            // console.log(JSON.stringify(this.ilanList));
            _this.searching = false;
        });
    };
    TumIlanlarPage.prototype.itemTapped = function (ev, ilan) {
        // console.log(JSON.stringify(this.basvuruList)+'sonuc basvuru');
        console.log(JSON.stringify(ilan) + 'ilan');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__ilan_detay_ilan_detay__["a" /* IlanDetayPage */], {
            ilan: ilan
            // basvurulist: this.basvuruSer.basvuruList,
            // kaydedilenlist: this.basvuruSer.kaydedilenList
        });
    };
    TumIlanlarPage.prototype.presentFilter = function (myEvent) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__ilan_filtrele_ilan_filtrele__["a" /* IlanFiltrelePage */], {
            detayAra: this.detayAra,
            sirala: this.sirala,
            ilanlarim: 'tumilan'
        });
    };
    TumIlanlarPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        // this.infiniteScroll = infiniteScroll;
        // infiniteScroll.enable(true);
        // infiniteScroll.enable(false);
        setTimeout(function () {
            _this.skip = _this.skip + 1;
            _this.ilanSer.getIlanlar(_this.searchTerm, _this.detayAra, _this.sirala, _this.skip, _this.limit)
                .then(function (ilanlar) {
                console.log(JSON.stringify(ilanlar) + "ilanlar");
                if (Object.keys(ilanlar).length < _this.limit) {
                    console.log('true');
                    // infiniteScroll.enable(false);
                    _this.scrollEnable = false;
                    ;
                }
                console.log('false');
                // infiniteScroll.enable(true);
                // this.scrollEnable = true;
                for (var key in ilanlar) {
                    _this.ilanList.push(ilanlar[key]);
                }
            });
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    TumIlanlarPage.prototype.getDays = function (d1) {
        // console.log(d1);
        // console.log(JSON.stringify(d1)+'datedate');
        // console.log((new Date(d1)).getTime() +' date'+ (new Date()).getTime());
        var diff = Math.floor(((new Date()).getTime() - (new Date(d1)).getTime()) / 86400000);
        return diff;
    };
    TumIlanlarPage.prototype.onSearchInput = function () {
        this.searching = true;
    };
    TumIlanlarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tum-ilanlar',template:/*ion-inline-start:"C:\Users\7448\Desktop\isgucvarIsveren\src\pages\tum-ilanlar\tum-ilanlar.html"*/'<!--\n\n  Generated template for the TumIlanlarPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Tüm İlanlar</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="presentFilter($event)">\n\n        <ion-icon name="funnel"></ion-icon>\n\n      </button>\n\n</ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-searchbar  [(ngModel)]="searchTerm"  [formControl]="searchControl" placeholder="Anahtar kelime"></ion-searchbar>\n\n  <div *ngIf="searching" class="spinner-container">\n\n      <ion-spinner></ion-spinner>\n\n  </div>\n\n  <ion-list text-wrap>\n\n    <button ion-item *ngFor="let ilan of ilanList" (click)="itemTapped($event, ilan)">\n\n      <!-- <ion-icon [name]="item.icon" item-left></ion-icon> -->\n\n      <ion-thumbnail item-left>\n\n        <img class="img-circle" [src]="ilan.firma.resim">\n\n      </ion-thumbnail>\n\n\n\n      <ion-row>\n\n      <ion-col>\n\n      <h2>{{ilan.baslik}}</h2>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col>\n\n      <div class="firma"><h4>{{ilan.firma.firma}}</h4></div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <h4 align="right" [class.my-class]="getDays(ilan.olusurmaTarih) < 10">\n\n          <ion-icon name="calendar"></ion-icon>\n\n          {{getDays(ilan.olusturmaTarih)}} gün\n\n        </h4>\n\n      </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n      <ion-col col-auto>\n\n          <p><ion-icon name="pin"></ion-icon>\n\n            {{ilan.il}}\n\n          </p>\n\n      </ion-col>\n\n      <ion-col>\n\n        <p align="right">\n\n      <ion-icon name="briefcase"></ion-icon>\n\n      {{ilan.tip}}\n\n    </p>\n\n  </ion-col>\n\n      </ion-row>\n\n\n\n    </button>\n\n  </ion-list>\n\n\n\n\n\n  <ion-infinite-scroll *ngIf="scrollEnable" (ionInfinite)="doInfinite($event)">\n\n\n\n  <ion-infinite-scroll-content\n\n  loadingText="İlanlar yükleniyor...">\n\n</ion-infinite-scroll-content>\n\n</ion-infinite-scroll>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\7448\Desktop\isgucvarIsveren\src\pages\tum-ilanlar\tum-ilanlar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_ilan_ser__["a" /* IlanSerProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_5__providers_user_ser__["a" /* UserSerProvider */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]])
    ], TumIlanlarPage);
    return TumIlanlarPage;
}());

//# sourceMappingURL=tum-ilanlar.js.map

/***/ })

});
//# sourceMappingURL=2.js.map