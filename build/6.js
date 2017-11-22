webpackJsonp([6],{

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IlanDetayPageModule", function() { return IlanDetayPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ilan_detay__ = __webpack_require__(326);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IlanDetayPageModule = /** @class */ (function () {
    function IlanDetayPageModule() {
    }
    IlanDetayPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ilan_detay__["a" /* IlanDetayPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ilan_detay__["a" /* IlanDetayPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__ilan_detay__["a" /* IlanDetayPage */]
            ]
        })
    ], IlanDetayPageModule);
    return IlanDetayPageModule;
}());

//# sourceMappingURL=ilan-detay.module.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IlanDetayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ilan_ser__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(215);
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
    function IlanDetayPage(navCtrl, navParams, events, ilanSer, storage, socialSharing, actionSheetCtrl, plt) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.ilanSer = ilanSer;
        this.storage = storage;
        this.socialSharing = socialSharing;
        this.actionSheetCtrl = actionSheetCtrl;
        this.plt = plt;
        //console.log("ilandetay");
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
        //console.log('ionViewDidLoad IlanDetayPage');
        this.ilanSer.getIlan(this.ilanId)
            .then(function (ilan) {
            _this.ilan = ilan;
        });
        this.events.subscribe('ilan:guncelle', function () {
            //console.log('ilan ekle event çağrıldı');
            //console.log(this.ilan._id+'  id  '+this.ilan.id);
            _this.ilanSer.getIlan(_this.ilanId)
                .then(function (ilan) {
                _this.ilan = ilan;
            });
        });
    };
    IlanDetayPage.prototype.shareFace = function () {
        //     let options = 	{
        //   method: "share",
        // 	href: window.location.origin+'/#/ilandetay/'+this.ilan._id,
        // 	caption: "Such caption, very feed.",
        // 	description: "Much description"
        // 	// picture: this.ilan.resim
        // }
        //console.log("share face");
        FB.ui({
            method: 'share',
            href: 'https://isgucvarisarayan.herokuapp.com' + '/#/detay/' + this.ilan._id,
        }, function (response) { });
    };
    IlanDetayPage.prototype.share = function () {
        if (!this.plt.is('core') && !this.plt.is('mobilebrowser')) {
            var options = {
                message: "İşgüçvar ilanına göz atın:\n\n",
                // subject: 'the subject', // fi. for email
                // files: [this.ilan.resim], // an array of filenames either locally or remotely
                url: 'https://isgucvarisarayan.herokuapp.com' + "/#/detay/" + this.ilan._id,
                chooserTitle: 'Uygulama seçin:' // Android only, you can override the default share sheet title
            };
            this.socialSharing.shareWithOptions(options)
                .then(function (result) {
                //console.log("Shared to app: " + result.app); // On Android result.app is currently empty. On iOS it's empty when sharing is cancelled (result.completed=false)
            }).catch(function (msg) {
                //console.log("Sharing failed with message: " + msg);
            });
        }
        else
            this.presentActionSheet();
    };
    // public shareLinked(){
    //
    // var payload = {
    //   "comment": "Yeni bir İşgüçvar ilanı!" + window.location.origin+'/#/ilandetay/'+this.ilan._id,
    //   "visibility": {
    //     "code": "anyone"
    //   }
    // };
    //
    // IN.API.Raw("/people/~/shares?format=json")
    //   .method("POST")
    //   .body(JSON.stringify(payload))
    //   .result((onSuccess) =>{})
    //   .error((onError) =>{});
    //   }
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
                },
                // {
                //   text: 'LinkedIn',
                //   icon: 'logo-linkedin',
                //   handler: () => {
                //     console.log('Archive clicked');
                //     this.shareLinked();
                //   }
                // },
                {
                    text: 'İptal',
                    role: 'cancel',
                    icon: 'close',
                    handler: function () {
                        //console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    IlanDetayPage.prototype.toOzgecmis = function () {
        // console.log(JSON.stringify(this.basvuruList)+'sonuc basvuru');
        //console.log(JSON.stringify(this.ilan)+'ilan');
        this.navCtrl.push('OzgecmislerimPage', {
            ilanId: this.ilan._id,
            guncelleyen: this.guncelleyen
        });
    };
    IlanDetayPage.prototype.guncelleIlan = function () {
        //console.log(JSON.stringify(this.ilan)+'ilan');
        this.navCtrl.push('IlanEklePage', {
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
            selector: 'page-ilan-detay',template:/*ion-inline-start:"C:\Users\7448\Desktop\isgucvarIsveren\src\pages\ilan-detay\ilan-detay.html"*/'<!--\n\n  Generated template for the IlanDetayPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <script type="in/Login"></script>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-buttons end>\n\n  <button ion-button icon-only (click)="share()">\n\n    <ion-icon name="share"></ion-icon>\n\n  </button>\n\n</ion-buttons>\n\n    <ion-title>İlan Detayı</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <div *ngIf="ilan && ilan.baslik">\n\n\n\n  <ion-item text-wrap no-lines class="item">\n\n    <ion-thumbnail item-left>\n\n      <img class="img-circle" [src]="ilan.firma.resim">\n\n    </ion-thumbnail>\n\n\n\n    <ion-row>\n\n    <ion-col>\n\n    <h2>{{ilan.baslik}}</h2>\n\n    </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col>\n\n    <div class="firma"><h4>{{ilan.firma.firma}}</h4></div>\n\n    </ion-col>\n\n    <ion-col>\n\n      <h4 align="right" [class.my-class]="getDays(ilan.olusurmaTarih) < 10">\n\n        <ion-icon name="calendar"></ion-icon>\n\n        {{getDays(ilan.olusurmaTarih)}} gün\n\n      </h4>\n\n    </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-auto>\n\n        <ion-icon name="pin"></ion-icon>\n\n          {{ilan.il}}\n\n\n\n    </ion-col>\n\n    <ion-col>\n\n      <p align="right">\n\n    <ion-icon name="briefcase"></ion-icon>\n\n    {{ilan.tip}}\n\n  </p>\n\n</ion-col>\n\n  </ion-row>\n\n</ion-item>\n\n<!-- <ion-toolbar> -->\n\n<button ion-button block icon-left color="primary" (click)="toOzgecmis()">\n\n  <ion-icon name="person"></ion-icon>\n\n  Başvuranlar</button>\n\n<!-- </ion-toolbar> -->\n\n\n\n  <!-- <div *ngIf="ilan"> -->\n\n\n\n  <ion-card>\n\n  <ion-card-header>\n\n    <b>Açıklama</b>\n\n  </ion-card-header>\n\n  <ion-card-content style="white-space: pre-wrap;">{{ilan.aciklama}}\n\n  </ion-card-content>\n\n</ion-card>\n\n\n\n<ion-card>\n\n<ion-card-header>\n\n  <b>Detaylar</b>\n\n</ion-card-header>\n\n<ion-card-content>\n\n  <!-- <ion-list>\n\n    <ion-item> -->\n\n  <p><b>Tecrübe: </b> {{ilan.tecrube}}</p>\n\n    <!-- </ion-item>\n\n    <ion-item> -->\n\n      <p><b>Eğitim: </b> {{ilan.egitim}}</p>\n\n    <!-- </ion-item>\n\n  </ion-list> -->\n\n  <p><b>Askerlik: </b> {{ilan.askerlik}}</p>\n\n  <p><b>Ehliyet: </b> {{ilan.ehliyet}}</p>\n\n  <p><b>İlan Tarihi: </b> {{ilan.olusurmaTarih}}</p>\n\n  <p><b>İlan No: </b> {{ilan.id}}</p>\n\n</ion-card-content>\n\n</ion-card>\n\n\n\n<button ion-button block icon-left color="secondary" (click)="guncelleIlan()">\n\n  <ion-icon name="create"></ion-icon>\n\n  Güncelle</button>\n\n\n\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\7448\Desktop\isgucvarIsveren\src\pages\ilan-detay\ilan-detay.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__providers_ilan_ser__["a" /* IlanSerProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], IlanDetayPage);
    return IlanDetayPage;
}());

//# sourceMappingURL=ilan-detay.js.map

/***/ })

});
//# sourceMappingURL=6.js.map