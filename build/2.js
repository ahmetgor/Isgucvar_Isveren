webpackJsonp([2],{

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TumIlanlarPageModule", function() { return TumIlanlarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tum_ilanlar__ = __webpack_require__(731);
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

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IlanDetayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ilan_ser__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__ = __webpack_require__(366);
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
        //     let options = 	{
        //   method: "share",
        // 	href: window.location.origin+'/#/ilandetay/'+this.ilan._id,
        // 	caption: "Such caption, very feed.",
        // 	description: "Much description"
        // 	// picture: this.ilan.resim
        // }
        console.log("share face");
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
                console.log("Shared to app: " + result.app); // On Android result.app is currently empty. On iOS it's empty when sharing is cancelled (result.completed=false)
            }).catch(function (msg) {
                console.log("Sharing failed with message: " + msg);
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
        this.navCtrl.push('OzgecmislerimPage', {
            ilanId: this.ilan._id,
            guncelleyen: this.guncelleyen
        });
    };
    IlanDetayPage.prototype.guncelleIlan = function () {
        console.log(JSON.stringify(this.ilan) + 'ilan');
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */]])
    ], IlanDetayPage);
    return IlanDetayPage;
}());

//# sourceMappingURL=ilan-detay.js.map

/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TumIlanlarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ilan_ser__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ilan_detay_ilan_detay__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_ser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ilan_filtrele_ilan_filtrele__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(41);
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
                console.log('tumilan constructor');
                _this.detayAra.firma = _this.userAuth.currentUser.firma;
                _this.ilanListele();
            }, function (err) {
                console.log('tumilan constructor1');
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
            });
        }
        else {
            // this.storage.get('user')
            //     .then((user) => { this.user = user;
            console.log(this.userAuth.currentUser.firma);
            this.detayAra.firma = this.userAuth.currentUser.firma;
            this.ilanListele();
            console.log('tumilan constructor');
            // });
            // this.detayAra.firma = this.userAuth.user.firma;
            // this.detayAra.firma = "I2I-Systems";
        }
        console.log('tumilan constructor3');
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
                _this.detayAra.firma = _this.userAuth.currentUser.firma;
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