webpackJsonp([5],{

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OzgecmisDetayPageModule", function() { return OzgecmisDetayPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ozgecmis_detay__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_date_pipe_module__ = __webpack_require__(321);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OzgecmisDetayPageModule = /** @class */ (function () {
    function OzgecmisDetayPageModule() {
    }
    OzgecmisDetayPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ozgecmis_detay__["a" /* OzgecmisDetayPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ozgecmis_detay__["a" /* OzgecmisDetayPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_date_pipe_module__["a" /* DatePipeModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__ozgecmis_detay__["a" /* OzgecmisDetayPage */]
            ]
        })
    ], OzgecmisDetayPageModule);
    return OzgecmisDetayPageModule;
}());

//# sourceMappingURL=ozgecmis-detay.module.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OzgecmisDetayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ozgecmis_ser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_ser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(27);
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
 * Generated class for the OzgecmisDetayPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var OzgecmisDetayPage = /** @class */ (function () {
    function OzgecmisDetayPage(navCtrl, navParams, ozgecmisSer, events, storage, socialSharing, plt, actionSheetCtrl, userAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ozgecmisSer = ozgecmisSer;
        this.events = events;
        this.storage = storage;
        this.socialSharing = socialSharing;
        this.plt = plt;
        this.actionSheetCtrl = actionSheetCtrl;
        this.userAuth = userAuth;
        this.begenBody = {};
        this.ozgecmis = this.navParams.get('ozgecmisTapped');
        this.ozgecmisId = this.navParams.get('ozgecmisId') ? this.navParams.get('ozgecmisId') : this.ozgecmis._id;
        this.aktivite = this.navParams.get('aktivite');
    }
    OzgecmisDetayPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (!this.userAuth.currentUser) {
            this.userAuth.checkAuthentication().then(function (res) {
                _this.userId = _this.userAuth.currentUser._id;
                _this.ozgecmisSer.getOzgecmis(_this.ozgecmisId)
                    .then(function (ozgecmis) {
                    _this.ozgecmis = ozgecmis;
                });
            }, function (err) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
            });
        }
        else {
            this.userId = this.userAuth.currentUser._id;
            this.ozgecmisSer.getOzgecmis(this.ozgecmisId)
                .then(function (ozgecmis) {
                _this.ozgecmis = ozgecmis;
            });
        }
        console.log(this.aktivite);
    };
    OzgecmisDetayPage.prototype.ozgecmisBegen = function (segment, begen) {
        this.begenBody.segment = segment;
        this.begenBody.userId = this.userId;
        this.ozgecmisSer.begenOzgecmis(this.ozgecmis._id, this.begenBody, begen);
        if (!this.aktivite || this.aktivite == "okunmadı")
            this.aktivite = segment;
        else
            this.aktivite = "okunmadı";
        this.events.publish('ozgecmis:begen');
        console.log(this.aktivite + 'begen');
    };
    OzgecmisDetayPage.prototype.shareFace = function () {
        var options = {
            method: "share",
            href: window.location.origin + '/#/ozgecmisdetay/' + this.ozgecmis._id,
            caption: "Such caption, very feed.",
            description: "Much description"
            // picture: this.ilan.resim
        };
        //console.log("share face");
        FB.ui({
            method: 'share',
            href: window.location.origin + '/#/ozgecmisdetay/' + this.ozgecmis._id,
        }, function (response) { });
    };
    OzgecmisDetayPage.prototype.shareLinked = function () {
        var payload = {
            "comment": "Yeni bir İşgüçvar ilanı!" + window.location.origin + '/#/ozgecmisdetay/' + this.ozgecmis._id,
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
    OzgecmisDetayPage.prototype.share = function () {
        if (!this.plt.is('core') && !this.plt.is('mobileweb')) {
            var options = {
                message: "Yeni bir İşgüçvar özgeçmişi paylaşıldı: " + this.ozgecmis.isim + "\n",
                subject: 'işgüçvar özgeçmiş ' + this.ozgecmis.isim,
                // files: [this.ilan.resim], // an array of filenames either locally or remotely
                url: window.location.origin + "/#/ozgecmisdetay/" + this.ozgecmis._id,
                chooserTitle: 'Uygulama seçin:' // Android only, you can override the default share sheet title
            };
            // this.socialSharing.shareViaFacebookWithPasteMessageHint('Message via Facebook', null, "https://isgucvar.herokuapp.com/", "paste it")
            this.socialSharing.shareWithOptions(options)
                .then(function (result) {
                //console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
                //console.log("Shared to app: " + result.app); // On Android result.app is currently empty. On iOS it's empty when sharing is cancelled (result.completed=false)
            }).catch(function (msg) {
                //console.log("Sharing failed with message: " + msg);
            });
        }
        else
            this.presentActionSheet();
    };
    OzgecmisDetayPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Özgeçmiş Paylaş',
            buttons: [
                {
                    text: 'Facebook', icon: 'logo-facebook',
                    handler: function () {
                        _this.shareFace();
                    }
                },
                // {
                //   text: 'LinkedIn',icon: 'logo-linkedin',
                //   handler: () => {
                //     this.shareLinked();
                //     console.log('Archive clicked');
                //   }
                // }
                {
                    text: 'İptal', role: 'cancel', icon: 'close',
                    handler: function () {
                        //console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    OzgecmisDetayPage.prototype.getAge = function (date) {
        return ~~(((new Date()).getTime() - (new Date(date)).getTime()) / (31557600000));
    };
    OzgecmisDetayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ozgecmis-detay',template:/*ion-inline-start:"C:\Users\7448\Desktop\isgucvarIsveren\src\pages\ozgecmis-detay\ozgecmis-detay.html"*/'<!--\n\n  Generated template for the OzgecmisDetayPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-buttons end>\n\n  <button ion-button icon-only (click)="share()">\n\n    <ion-icon name="share"></ion-icon>\n\n  </button>\n\n</ion-buttons>\n\n    <ion-title>Özgeçmiş Detay</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div *ngIf="ozgecmis">\n\n\n\n  <ion-card class="item">\n\n    <ion-item text-wrap class="item">\n\n    <ion-thumbnail item-left>\n\n      <img class="img-circle" [src]="ozgecmis.resim">\n\n    </ion-thumbnail>\n\n\n\n    <h1>{{ozgecmis.isim}}</h1>\n\n    <p>{{ozgecmis.unvan}}</p>\n\n    <p>{{getAge()}} yaşında, {{ozgecmis.yilTecrube}} yıl tecrübe</p>\n\n    <p>{{ozgecmis.enabled | datePipe: \'aktif\'}}</p>\n\n    <p>Özgeçmiş No: {{ozgecmis.id}}</p>\n\n  </ion-item>\n\n</ion-card>\n\n\n\n<div *ngIf="!aktivite||aktivite==\'okunmadı\'">\n\n<ion-row>\n\n  <ion-col>\n\n<button ion-button block icon-left color="danger" (click)="ozgecmisBegen(\'okundu\', \'begen\')">\n\n  <ion-icon name="thumbs-down"></ion-icon>\n\n  Beğenme</button>\n\n<!-- <div *ngIf="checkBasvuru(ilan)">\n\n<button ion-button block icon-left color="secondary" (click)="deleteBasvur(ilan)">\n\n  <ion-icon name="ios-arrow-dropleft"></ion-icon>\n\n  Başvuru İptal</button>\n\n</div> -->\n\n</ion-col>\n\n<ion-col>\n\n<!-- <div *ngIf="!checkKaydedilen(ilan)"> -->\n\n<button ion-button block icon-left color="yellow" (click)="ozgecmisBegen(\'begen\', \'begen\')">\n\n  <ion-icon name="thumbs-up"></ion-icon>\n\n  Beğen</button>\n\n<!-- </div> -->\n\n<!-- <div *ngIf="checkKaydedilen(ilan)">\n\n<button ion-button block icon-left color="primary" (click)="deleteKaydet(ilan)">\n\n  <ion-icon name="ios-arrow-dropleft"></ion-icon>\n\n  Kayıt İptal</button>\n\n</div> -->\n\n</ion-col>\n\n<ion-col>\n\n  <button ion-button block icon-left color="secondary" (click)="ozgecmisBegen(\'cokbegen\', \'begen\')">\n\n    <ion-icon name="thumbs-up"></ion-icon>\n\n    <ion-icon name="thumbs-up"></ion-icon>\n\n    Çok Beğen</button>\n\n</ion-col>\n\n</ion-row>\n\n</div>\n\n<div *ngIf="aktivite && aktivite!=\'okunmadı\'">\n\n<button ion-button block icon-left color="primary" (click)="ozgecmisBegen(aktivite, \'begenme\')">\n\n  <ion-icon name="ios-arrow-dropleft"></ion-icon>\n\n  Tercih iptal</button>\n\n</div>\n\n\n\n<div [class.ozgecmis]="!ozgecmis.enabled">\n\n\n\n<ion-card>\n\n  <ion-card-header>\n\n  <b>Kişisel Bilgiler</b>\n\n  <!-- <ion-note item-right> -->\n\n</ion-card-header>\n\n\n\n  <ion-item text-wrap>\n\n  <ion-grid no-padding>\n\n  <ion-row><ion-col col-5><h4>Doğum Tarihi:</h4></ion-col> <ion-col><h4>{{ozgecmis.dogumTarihi | date:\'dd/MM/yyyy\'}}</h4></ion-col> </ion-row>\n\n  <ion-row><ion-col col-5><h4>TC Vatandaşı: </h4></ion-col> <ion-col><h4>{{ozgecmis.tc}}</h4></ion-col> </ion-row>\n\n  <ion-row><ion-col col-5><h4>Askerlik: </h4></ion-col> <ion-col><h4> {{ozgecmis.askerlik}}</h4></ion-col> </ion-row>\n\n  <ion-row><ion-col col-5><h4>Medeni Hal:</h4> </ion-col> <ion-col><h4> {{ozgecmis.medeni}}</h4></ion-col> </ion-row>\n\n  <ion-row><ion-col col-5><h4>Ehliyet Cinsi: </h4></ion-col> <ion-col><h4> {{ozgecmis.ehliyet}}</h4></ion-col> </ion-row>\n\n  <ion-row><ion-col col-5><h4>Eğitim: </h4></ion-col> <ion-col><h4> {{ozgecmis.egitimdurum | datePipe:\'egitimdurum\'}}</h4></ion-col> </ion-row>\n\n  <!-- <ion-row><ion-col col-5><h4>Tecrübe: </h4></ion-col> <ion-col><h4> {{ozgecmis.tecrubedurum}}</h4></ion-col> </ion-row> -->\n\n</ion-grid>\n\n</ion-item>\n\n\n\n  </ion-card>\n\n\n\n<ion-card>\n\n  <ion-card-header>\n\n  <b>İletişim Bilgileri</b>\n\n</ion-card-header>\n\n  <ion-item text-wrap>\n\n    <ion-grid no-padding>\n\n  <ion-row><ion-col col-5><h4>Telefon:</h4></ion-col> <ion-col><h4>{{ozgecmis.telefon}}</h4></ion-col> </ion-row>\n\n  <ion-row><ion-col col-5><h4>Email:</h4></ion-col> <ion-col><h4>{{ozgecmis.email}}</h4></ion-col> </ion-row>\n\n  <ion-row><ion-col col-5><h4>Adres:</h4></ion-col> <ion-col><h4>{{ozgecmis.adres}}</h4></ion-col> </ion-row>\n\n</ion-grid>\n\n</ion-item>\n\n</ion-card>\n\n\n\n<ion-card>\n\n  <ion-card-header>\n\n  <b>Tecrübe</b>\n\n</ion-card-header>\n\n<button ion-item *ngFor="let tecrube of (ozgecmis.tecrube | datePipe)">\n\n<h4><b>{{tecrube.firma}}</b></h4> <h4><span style="float:right;">{{tecrube.sehir}}</span></h4>\n\n<h4><b>{{tecrube.pozisyon}}</b></h4>\n\n<h4 style="white-space: pre-wrap;">{{tecrube.isTanimiKisa}}</h4>\n\n<h4><b>{{tecrube.giris | date:\'MM/yyyy\'}} - {{tecrube.cikis | date:\'MM/yyyy\'}}</b></h4>\n\n</button>\n\n</ion-card>\n\n\n\n<ion-card>\n\n  <ion-card-header>\n\n  <b>Eğitim</b>\n\n</ion-card-header>\n\n<button ion-item *ngFor="let egitim of (ozgecmis.egitim | datePipe)" >\n\n<h4><b>{{egitim.okul}}</b> <span ion-text style="float:right;">{{egitim.sehir}}</span></h4>\n\n<h4>{{egitim.bolum}}</h4>\n\n<h4>{{egitim.cikis | date:\'MM/yyyy\'}} - {{egitim.derece | datePipe:\'egitimdurum\'}}</h4>\n\n</button>\n\n</ion-card>\n\n\n\n<ion-card>\n\n  <ion-card-header no-margin>\n\n  <b>Yabancı Dil</b>\n\n\n\n</ion-card-header>\n\n<button no-margin ion-item *ngFor="let yabanciDil of ozgecmis.yabanciDil" >\n\n  <h4><b>{{yabanciDil.dil}} : </b>{{yabanciDil.seviye  | datePipe:\'seviye\'}} </h4>\n\n  <!-- <ion-row><ion-col col-5><h4>{{yabanciDil.dil}} : </h4></ion-col> <ion-col><h4>{{yabanciDil.seviye}}</h4></ion-col> </ion-row> -->\n\n\n\n</button>\n\n</ion-card>\n\n\n\n<ion-card>\n\n  <ion-card-header no-margin>\n\n  <b>Sertifikalar</b>\n\n</ion-card-header>\n\n<button ion-item *ngFor="let sertifika of (ozgecmis.sertifika | datePipe)" >\n\n  <h4><b>{{sertifika.ad}}</b></h4>\n\n  <h4>{{sertifika.kurum}} - {{sertifika.cikis | date:\'MM/yyyy\'}}</h4>\n\n</button>\n\n</ion-card>\n\n\n\n<ion-card>\n\n  <ion-card-header no-margin>\n\n  <b>Bilgisayar Teknolojileri</b>\n\n  <!-- <ion-note item-right> -->\n\n</ion-card-header>\n\n  <!-- <button ion-button small  icon-left clear (click)="itemTapped($event, ozgecmis, \'bilgisayar\')"> -->\n\n  <ion-item no-margin text-wrap>\n\n  <h4>{{ozgecmis.bilgisayar}}</h4>\n\n</ion-item>\n\n<!-- </button> -->\n\n</ion-card>\n\n\n\n</div>\n\n\n\n</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\7448\Desktop\isgucvarIsveren\src\pages\ozgecmis-detay\ozgecmis-detay.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_ozgecmis_ser__["a" /* OzgecmisSerProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_5__providers_user_ser__["a" /* UserSerProvider */]])
    ], OzgecmisDetayPage);
    return OzgecmisDetayPage;
}());

//# sourceMappingURL=ozgecmis-detay.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatePipeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__date_pipe__ = __webpack_require__(322);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { IonicModule } from 'ionic-angular';

var DatePipeModule = /** @class */ (function () {
    function DatePipeModule() {
    }
    DatePipeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__date_pipe__["a" /* DatePipe */]
            ],
            imports: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__date_pipe__["a" /* DatePipe */]
            ]
        })
    ], DatePipeModule);
    return DatePipeModule;
}());

//# sourceMappingURL=date-pipe.module.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DatePipe = /** @class */ (function () {
    function DatePipe() {
    }
    DatePipe.prototype.transform = function (items, arg) {
        // console.log("datepipe"+arg);
        if (arg != undefined && arg == 'seviye') {
            switch (items) {
                case 1:
                    return 'Başlangıç';
                case 2:
                    return 'Orta';
                case 3:
                    return 'İyi';
                case 4:
                    return 'Çok İyi';
                case 5:
                    return 'Mükemmel';
            }
        }
        else if (arg != undefined && arg == 'egitimdurum') {
            switch (items) {
                case 1:
                    return 'İlköğretim';
                case 2:
                    return 'Lise';
                case 3:
                    return 'Lisans';
                case 4:
                    return 'Yüksek Lisans';
                case 5:
                    return 'Doktora';
            }
        }
        else if (arg != undefined && arg == 'aktif') {
            switch (items) {
                case true:
                    return 'Aktif';
                case false:
                    return 'Pasif';
            }
        }
        else {
            if (items == undefined)
                return;
            return items.sort(function (a, b) {
                // console.log(a.cikis+'cikis');
                // console.log(b.cikis+'cikis1');
                var nameA = (new Date(a.cikis)).getTime();
                var nameB = (new Date(b.cikis)).getTime();
                // console.log(nameA+'name');
                // console.log(nameB+'name');
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                // names must be equal
                return 0;
            });
        }
    };
    DatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'datePipe',
            pure: false })
    ], DatePipe);
    return DatePipe;
}());

//# sourceMappingURL=date-pipe.js.map

/***/ })

});
//# sourceMappingURL=5.js.map