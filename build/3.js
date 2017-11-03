webpackJsonp([3],{

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IlanEklePageModule", function() { return IlanEklePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ilan_ekle__ = __webpack_require__(723);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IlanEklePageModule = /** @class */ (function () {
    function IlanEklePageModule() {
    }
    IlanEklePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ilan_ekle__["a" /* IlanEklePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ilan_ekle__["a" /* IlanEklePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__ilan_ekle__["a" /* IlanEklePage */]
            ]
        })
    ], IlanEklePageModule);
    return IlanEklePageModule;
}());

//# sourceMappingURL=ilan-ekle.module.js.map

/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IlanlarimPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ilan_ser__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ilan_filtrele_ilan_filtrele__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_ser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(48);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_ilan_ser__["a" /* IlanSerProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_5__providers_user_ser__["a" /* UserSerProvider */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]])
    ], IlanlarimPage);
    return IlanlarimPage;
}());

//# sourceMappingURL=ilanlarim.js.map

/***/ }),

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IlanEklePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_ilan_ser__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ilanlarim_ilanlarim__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_ser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(48);
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

/***/ })

});
//# sourceMappingURL=3.js.map