webpackJsonp([4],{

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirmaHesapPageModule", function() { return FirmaHesapPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firma_hesap__ = __webpack_require__(725);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FirmaHesapPageModule = /** @class */ (function () {
    function FirmaHesapPageModule() {
    }
    FirmaHesapPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__firma_hesap__["a" /* FirmaHesapPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__firma_hesap__["a" /* FirmaHesapPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__firma_hesap__["a" /* FirmaHesapPage */]
            ]
        })
    ], FirmaHesapPageModule);
    return FirmaHesapPageModule;
}());

//# sourceMappingURL=firma-hesap.module.js.map

/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirmaHesapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_ozgecmis_ser__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_ser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_ilan_ser__ = __webpack_require__(49);
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








var FirmaHesapPage = /** @class */ (function () {
    function FirmaHesapPage(navCtrl, navParams, camera, storage, ozgecmisSer, authService, ilanService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.storage = storage;
        this.ozgecmisSer = ozgecmisSer;
        this.authService = authService;
        this.ilanService = ilanService;
        this.newpassword = "";
        this.newpassword1 = "";
        if (!this.authService.currentUser) {
            this.authService.checkAuthentication().then(function (res) {
            }, function (err) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
            });
        }
        else {
            this.storage.get('user')
                .then(function (user) {
                _this.user = user;
                _this.userUrl = 'url(' + user.firmaresim + ')';
                _this.cloudUrl = user.firmaresim;
                _this.ilanService.getUsers(user.firmaId)
                    .then(function (userList) {
                    _this.userList = userList;
                });
                // console.log(JSON.stringify(user));
            });
        }
    }
    FirmaHesapPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FirmaHesapPage');
        this.newpassword = "";
        this.newpassword1 = "";
    };
    FirmaHesapPage.prototype.updateUser = function () {
        // this.ozgecmisSer.updateAvatar(this.cloudUrl)
        // .then( (resUrl: any) => {
        //   this.cloudUrl = resUrl.secure_url;
        //   console.log(resUrl.secure_url+"user cloud url");
        var _this = this;
        var details = {
            firma: this.user.firma,
            userUrl: this.cloudUrl,
            email: this.user.email
        };
        if (this.newpassword.trim() && this.newpassword.trim() != "") {
            details.newpassword = this.newpassword;
        }
        console.log(JSON.stringify(details));
        this.authService.updateFirma(details).then(function (result) {
            // this.presentToast('Kaydınız yapıldı, giriş yapabilirsiniz');
            _this.authService.logout();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
        }, function (err) {
            // let msg = JSON.parse(err._body);
            // console.log(msg.error+'asdasd');
        });
        // });
    };
    FirmaHesapPage.prototype.getPicture = function (url) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this.camera.getPicture({
                destinationType: this.camera.DestinationType.DATA_URL,
                targetWidth: 96,
                targetHeight: 96
            }).then(function (data) {
                console.log("camera");
                _this.userUrl = 'data:image/jpg;base64,' + data;
                _this.cloudUrl = _this.userUrl;
                // this.form.patchValue({ 'profilePic': 'data:image/jpg;base64,' + data });
            }, function (err) {
                // alert('Unable to take photo');
            });
        }
        else {
            console.log("native");
            this.userFileInput.nativeElement.click();
        }
    };
    FirmaHesapPage.prototype.processWebImage = function (event) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (readerEvent) {
            console.log("event");
            var imageData = readerEvent.target.result;
            _this.userUrl = 'url(' + imageData + ')';
            _this.cloudUrl = imageData;
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    FirmaHesapPage.prototype.updateUserEnabled = function (usr) {
        var details = {
            email: usr.email,
            enabled: usr.enabled,
            en: 'en'
        };
        this.authService.updateUser(details).then(function (result) {
        }, function (err) {
            // console.log(msg.error+'asdasd');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('userFileInput'),
        __metadata("design:type", Object)
    ], FirmaHesapPage.prototype, "userFileInput", void 0);
    FirmaHesapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-firma-hesap',template:/*ion-inline-start:"C:\Users\7448\Desktop\isgucvarIsveren\src\pages\firma-hesap\firma-hesap.html"*/'<!--\n  Generated template for the FirmaHesapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Firma Hesap</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngIf="user">\n  <form #heroForm="ngForm">\n    <ion-list>\n      <ion-item-divider no-lines color="light">Firma profil resmi değiştirin</ion-item-divider>\n      <input type="file" #userFileInput style="visibility: hidden; height: 0px" (change)="processWebImage($event)" required />\n      <div class="profile-image-wrapper" (click)="getPicture()">\n        <div class="profile-image-placeholder" *ngIf="!userUrl">\n          <ion-icon name="add"></ion-icon>\n          <div>Profil Resmi</div>\n        </div>\n        <div class="profile-image" [style.backgroundImage]= "userUrl" *ngIf="userUrl"></div>\n      </div>\n\n        <ion-item-divider no-lines color="light">Yeni firma ismi veya şifresi belirleyin</ion-item-divider>\n        <ion-item>\n            <ion-label><ion-icon name="mail"></ion-icon></ion-label>\n            <ion-input [(ngModel)]="user.firma" placeholder="Firma İsmi" type="text" #name="ngModel" name="name">\n          </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n            <ion-input [(ngModel)]="newpassword" placeholder="Yeni firma şifresi" type="password" #pass="ngModel" name="pass" minlength="6">\n            </ion-input>\n        </ion-item>\n        <ion-item no-lines *ngIf="pass.errors">\n            <p style="color:red;">Şifre minimum 6 karakter olmalı</p>\n        </ion-item>\n        <ion-item>\n            <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n            <ion-input [(ngModel)]="newpassword1" placeholder="Yeni firma şifresi tekrar" type="password" #pass1="ngModel" name="pass1" minlength="6">\n            </ion-input>\n        </ion-item>\n        <ion-item no-lines *ngIf="pass1.value != pass.value">\n            <p style="color:red;">Girilen şifreler aynı değil</p>\n        </ion-item>\n        <!-- <ion-item-divider no-lines color="light"></ion-item-divider> -->\n        <div style="padding-top: 20px">\n      </div>\n        <ion-item>\n            <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n            <ion-input [(ngModel)]="password" placeholder="Mevcut kullanıcı şifreniz" type="password" #oldpass="ngModel" name="passwrd" required>\n            </ion-input>\n        </ion-item>\n        <ion-item no-lines *ngIf="oldpass.errors">\n            <p style="color:red;">Lütfen mevcut kullanıcı şifresini girin</p>\n        </ion-item>\n\n    </ion-list>\n\n    <button ion-button block (click)="updateUser()"\n            [disabled]="!heroForm.form.valid||pass1.value != pass.value||heroForm.form.untouched">Güncelle</button>\n    </form>\n\n    <div style="padding-top: 40px">\n  </div>\n\n    <ion-list text-wrap>\n\n      <ion-item-divider no-lines color="light">Firma kullanıcıları aktiflik ayarı</ion-item-divider>\n      <ion-item *ngFor="let usr of userList">\n        <ion-avatar item-start *ngIf="usr && usr.resim">\n          <img class="img-circle" [src]="usr.resim">\n        </ion-avatar>\n        <!-- <ion-row>\n        <ion-col> -->\n\n        <ion-label>\n          <div [class.my-class]="!usr.enabled">{{usr.email}}\n      </div>\n    </ion-label>\n        <ion-toggle [(ngModel)]="usr.enabled" (ionChange)="updateUserEnabled(usr)"></ion-toggle>\n        <!-- </ion-col>\n        <ion-col>\n        </ion-col>\n      </ion-row> -->\n    </ion-item>\n    </ion-list>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\7448\Desktop\isgucvarIsveren\src\pages\firma-hesap\firma-hesap.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__providers_ozgecmis_ser__["a" /* OzgecmisSerProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_user_ser__["a" /* UserSerProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_ilan_ser__["a" /* IlanSerProvider */]])
    ], FirmaHesapPage);
    return FirmaHesapPage;
}());

//# sourceMappingURL=firma-hesap.js.map

/***/ })

});
//# sourceMappingURL=4.js.map