webpackJsonp([7],{

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HesapPageModule", function() { return HesapPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hesap__ = __webpack_require__(726);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HesapPageModule = /** @class */ (function () {
    function HesapPageModule() {
    }
    HesapPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__hesap__["a" /* HesapPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__hesap__["a" /* HesapPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__hesap__["a" /* HesapPage */]
            ]
        })
    ], HesapPageModule);
    return HesapPageModule;
}());

//# sourceMappingURL=hesap.module.js.map

/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HesapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_ozgecmis_ser__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_ser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HesapPage = /** @class */ (function () {
    function HesapPage(navCtrl, navParams, camera, storage, ozgecmisSer, authService, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.storage = storage;
        this.ozgecmisSer = ozgecmisSer;
        this.authService = authService;
        this.platform = platform;
        this.newpassword = "";
        this.newpassword1 = "";
        if (!this.authService.currentUser) {
            this.authService.checkAuthentication().then(function (res) {
            }, function (err) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
            });
        }
        else {
            this.storage.get('user')
                .then(function (user) {
                _this.user = user;
                _this.userUrl = 'url(' + user.resim + ')';
                _this.cloudUrl = user.resim;
                console.log(JSON.stringify(user));
            });
        }
    }
    HesapPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HesapPage');
        this.newpassword = "";
        this.newpassword1 = "";
    };
    HesapPage.prototype.updateUser = function () {
        // this.ozgecmisSer.updateAvatar(this.cloudUrl)
        // .then( (resUrl: any) => {
        //   this.cloudUrl = resUrl.secure_url;
        //   console.log(resUrl.secure_url+"user cloud url");
        var _this = this;
        var details = {
            email: this.user.email,
            userUrl: this.cloudUrl
        };
        if (this.newpassword.trim() && this.newpassword.trim() != "") {
            details.newpassword = this.newpassword;
        }
        this.authService.updateUser(details).then(function (result) {
            // this.presentToast('Kaydınız yapıldı, giriş yapabilirsiniz');
            _this.authService.logout();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
        }, function (err) {
            // let msg = JSON.parse(err._body);
            // console.log(msg.error+'asdasd');
        });
        // });
    };
    HesapPage.prototype.getPicture = function (url) {
        var _this = this;
        if (!this.platform.is('core')) {
            this.camera.getPicture({
                sourceType: 0,
                destinationType: this.camera.DestinationType.DATA_URL,
                targetWidth: 300,
                targetHeight: 300,
                allowEdit: true,
                quality: 70
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
    HesapPage.prototype.processWebImage = function (event) {
        var _this = this;
        var reader = new FileReader();
        var imageData = new Image();
        var canvas = document.createElement('canvas');
        var dataUrl = undefined;
        reader.onload = function (readerEvent) {
            console.log("event");
            dataUrl = readerEvent.target.result;
            // console.log(imageData.src+"src");
            // canvas.getContext("2d").drawImage(imageData, 0, 0);
            // let dataUrl = canvas.toDataURL('image/jpg');
            console.log(dataUrl);
            console.log(dataUrl.length);
            _this.userUrl = 'url(' + dataUrl + ')';
            _this.cloudUrl = dataUrl;
            // console.log(imageData);
            // console.log(JSON.stringify(readerEvent.target));
            // this.form.patchValue({ 'profilePic': imageData });
        };
        reader.readAsDataURL(event.target.files[0]);
        console.log(event.target.files[0]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('userFileInput'),
        __metadata("design:type", Object)
    ], HesapPage.prototype, "userFileInput", void 0);
    HesapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-hesap',template:/*ion-inline-start:"C:\Users\7448\Desktop\isgucvarIsveren\src\pages\hesap\hesap.html"*/'<!--\n\n  Generated template for the HesapPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Hesap</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form #heroForm="ngForm">\n\n    <div *ngIf="user">\n\n    <ion-list>\n\n      <ion-item-divider no-lines color="light">Profil resmi değiştirin:</ion-item-divider>\n\n      <input type="file" #userFileInput [hidden]="true" (change)="processWebImage($event)" required />\n\n      <!-- style="visibility: hidden; height: 0px"  -->\n\n      <div class="profile-image-wrapper" >\n\n        <div class="profile-image-placeholder" *ngIf="!userUrl">\n\n          <ion-icon name="add"></ion-icon>\n\n          <div>Profil Resmi</div>\n\n        </div>\n\n        <!-- [style.backgroundImage]="userUrl" -->\n\n          <div *ngIf="userUrl" >\n\n              <img class="profile-image" [src]="cloudUrl" (click)="getPicture()">\n\n          </div>\n\n      </div>\n\n\n\n        <ion-item-divider no-lines color="light">Yeni şifre belirleyin:</ion-item-divider>\n\n        <ion-item>\n\n            <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n\n            <ion-input [(ngModel)]="newpassword" placeholder="Yeni Şifre" autocomplete="off" type="password" #pass="ngModel" name="pass" minlength="6">\n\n            </ion-input>\n\n        </ion-item>\n\n        <ion-item no-lines *ngIf="pass.errors">\n\n            <p style="color:red;">Şifre minimum 6 karakter olmalı</p>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n\n            <ion-input [(ngModel)]="newpassword1" placeholder="Yeni Şifre tekrar" autocomplete="off" type="password" #pass1="ngModel" name="pass1" minlength="6">\n\n            </ion-input>\n\n        </ion-item>\n\n        <ion-item no-lines *ngIf="pass1.value != pass.value">\n\n            <p style="color:red;">Girilen şifreler aynı değil</p>\n\n        </ion-item>\n\n        <ion-item-divider no-lines color="light"></ion-item-divider>\n\n        <ion-item>\n\n            <ion-label><ion-icon name="mail"></ion-icon></ion-label>\n\n            <ion-input [(ngModel)]="user.email" placeholder="Email" type="email" #name="ngModel" name="name" disabled>\n\n          </ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n\n            <ion-input [(ngModel)]="password" placeholder="Mevcut Şifre" type="password" #oldpass="ngModel" name="passwrd" required>\n\n            </ion-input>\n\n        </ion-item>\n\n        <ion-item no-lines *ngIf="oldpass.errors">\n\n            <p style="color:red;">Lütfen şifrenizi giriniz</p>\n\n        </ion-item>\n\n\n\n    </ion-list>\n\n\n\n    <button ion-button block (click)="updateUser()"\n\n            [disabled]="!heroForm.form.valid||pass1.value != pass.value||heroForm.form.untouched">Güncelle</button>\n\n  </div>\n\n  </form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\7448\Desktop\isgucvarIsveren\src\pages\hesap\hesap.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__providers_ozgecmis_ser__["a" /* OzgecmisSerProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_user_ser__["a" /* UserSerProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], HesapPage);
    return HesapPage;
}());

//# sourceMappingURL=hesap.js.map

/***/ })

});
//# sourceMappingURL=7.js.map