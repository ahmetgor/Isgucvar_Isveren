webpackJsonp([16],{

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_ser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_ozgecmis_ser__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, authService, loadingCtrl, toastCtrl, camera, ozgecmisSer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.camera = camera;
        this.ozgecmisSer = ozgecmisSer;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.register = function () {
        var _this = this;
        // this.ozgecmisSer.updateAvatar(this.userUrl)
        // .then( (resUrl: any) => {
        //   this.userUrl = resUrl.secure_url;
        //   console.log(resUrl.secure_url+"user cloud url");
        // this.showLoader();
        var userDetails = {
            email: this.email,
            password: this.password,
            firma: this.firma,
            firmaPass: this.firmaPass,
            resim: this.userUrl
        };
        this.authService.createAccount(userDetails).then(function (result) {
            // this.loading.dismiss();
            // console.log(result);
            // this.presentToast('Kaydınız yapıldı, giriş yapabilirsiniz');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        }, function (err) {
        });
        // });
    };
    SignupPage.prototype.getPicture = function (url) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this.camera.getPicture({
                destinationType: this.camera.DestinationType.DATA_URL,
                targetWidth: 96,
                targetHeight: 96
            }).then(function (data) {
                console.log("camera");
                if (url == 'user') {
                    _this.userUrl = 'data:image/jpg;base64,' + data;
                }
                else {
                    _this.firmaUrl = 'data:image/jpg;base64,' + data;
                }
                // this.form.patchValue({ 'profilePic': 'data:image/jpg;base64,' + data });
            }, function (err) {
                // alert('Unable to take photo');
            });
        }
        else {
            console.log("native");
            if (url == 'user') {
                this.userFileInput.nativeElement.click();
            }
            else {
                this.firmaFileInput.nativeElement.click();
            }
        }
    };
    SignupPage.prototype.processWebImage = function (event, url) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (readerEvent) {
            console.log("event");
            var imageData = readerEvent.target.result;
            if (url == 'user') {
                _this.userUrl = imageData;
            }
            else {
                _this.firmaUrl = imageData;
            }
            // console.log(imageData);
            // console.log(JSON.stringify(readerEvent.target));
            // this.form.patchValue({ 'profilePic': imageData });
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    SignupPage.prototype.getProfileImageStyle = function (url) {
        // console.log(url+'  url');
        return 'url(' + url + ')';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('userFileInput'),
        __metadata("design:type", Object)
    ], SignupPage.prototype, "userFileInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('firmaFileInput'),
        __metadata("design:type", Object)
    ], SignupPage.prototype, "firmaFileInput", void 0);
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\7448\Desktop\isgucvarIsveren\src\pages\signup\signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Firma Çalışanı Kayıt</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <form #heroForm="ngForm">\n    <ion-list>\n      <ion-item-divider no-lines color="light">Bilgileriniz:</ion-item-divider>\n      <input type="file" #userFileInput style="visibility: hidden; height: 0px" (change)="processWebImage($event, \'user\')" required/>\n      <div class="profile-image-wrapper">\n        <div class="profile-image-placeholder" *ngIf="!userUrl" (click)="getPicture(\'user\')">\n          <ion-icon name="add"></ion-icon>\n          <div>Profil Resmi</div>\n        </div>\n        <!-- <div class="profile-image" [style.backgroundImage]="getProfileImageStyle(userUrl)" *ngIf="userUrl"></div> -->\n        <div *ngIf="userUrl" >\n            <img class="profile-image" [src]="userUrl" (click)="getPicture(\'user\')">\n        </div>\n      </div>\n      <ion-item>\n          <ion-label><ion-icon name="mail"></ion-icon></ion-label>\n          <ion-input [(ngModel)]="email" placeholder="Email" type="email" #name="ngModel" name="name" required\n          pattern="[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})">\n        </ion-input>\n      </ion-item>\n      <ion-item no-lines *ngIf="name.errors">\n          <p style="color:red;">Lütfen geçerli email giriniz</p>\n      </ion-item>\n      <ion-item>\n          <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n          <ion-input [(ngModel)]="password" placeholder="Şifreniz" type="password" #pass="ngModel" name="pass" minlength="6" required>\n          </ion-input>\n      </ion-item>\n      <ion-item no-lines *ngIf="pass.errors">\n          <p style="color:red;">Şifre minimum 6 karakter olmalı</p>\n      </ion-item>\n      <ion-item>\n          <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n          <ion-input [(ngModel)]="password1" placeholder="Şifre tekrar" type="password" #pass1="ngModel" name="pass1" minlength="6" required>\n          </ion-input>\n      </ion-item>\n      <ion-item no-lines *ngIf="pass1.value != pass.value">\n          <p style="color:red;">Girilen şifreler aynı değil</p>\n      </ion-item>\n      <p>\n\n      </p>\n      <ion-item-divider no-lines color="light">Yöneticinizin paylaştığı firma bilgileri:</ion-item-divider>\n\n        <ion-item>\n            <ion-label><ion-icon name="power"></ion-icon></ion-label>\n            <ion-input [(ngModel)]="firma" placeholder="Firma ismi" type="text" #firmaa="ngModel" name="firma" required></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n            <ion-input [(ngModel)]="firmaPass" placeholder="Firma Şifresi" type="password" #firmaPasss="ngModel" name="firmaPasss" minlength="6" required>\n            </ion-input>\n        </ion-item>\n      </ion-list>\n\n      <button ion-button block (click)="register()" [disabled]="!heroForm.form.valid||pass1.value != pass.value">Kaydol</button>\n    </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\7448\Desktop\isgucvarIsveren\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_ser__["a" /* UserSerProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_5__providers_ozgecmis_ser__["a" /* OzgecmisSerProvider */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupFirmaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_ser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_ozgecmis_ser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupFirmaPage = /** @class */ (function () {
    function SignupFirmaPage(navCtrl, navParams, authService, loadingCtrl, toastCtrl, camera, ozgecmisSer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.camera = camera;
        this.ozgecmisSer = ozgecmisSer;
    }
    SignupFirmaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupFirmaPage');
    };
    SignupFirmaPage.prototype.registerFirma = function () {
        // this.ozgecmisSer.updateAvatar(this.userUrl)
        // .then( (resUrl: any) => {
        //   this.userUrl = resUrl.secure_url;
        //   console.log(resUrl.secure_url+"user cloud url");
        //
        //   this.ozgecmisSer.updateAvatar(this.firmaUrl)
        //   .then( (resUrlfirma: any) => {
        //     this.firmaUrl = resUrlfirma.secure_url;
        //     console.log(resUrlfirma.secure_url + "firma cloud url");
        // console.log(resUrl.secure_url+'secure');
        var _this = this;
        var details = {
            email: this.email,
            password: this.password,
            firma: this.firma,
            firmaPass: this.firmaPass,
            userUrl: this.userUrl,
            firmaUrl: this.firmaUrl,
            telefon: this.telefon
        };
        this.authService.createFirmaAccount(details).then(function (result) {
            // this.presentToast('Kaydınız yapıldı, giriş yapabilirsiniz');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        }, function (err) {
            // let msg = JSON.parse(err._body);
            // console.log(msg.error+'asdasd');
        });
        //   });
        // });
    };
    SignupFirmaPage.prototype.getPicture = function (url) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this.camera.getPicture({
                destinationType: this.camera.DestinationType.DATA_URL,
                targetWidth: 96,
                targetHeight: 96
            }).then(function (data) {
                console.log("camera");
                if (url == 'user') {
                    _this.userUrl = 'data:image/jpg;base64,' + data;
                }
                else {
                    _this.firmaUrl = 'data:image/jpg;base64,' + data;
                }
                // this.form.patchValue({ 'profilePic': 'data:image/jpg;base64,' + data });
            }, function (err) {
                // alert('Unable to take photo');
            });
        }
        else {
            console.log("native");
            if (url == 'user') {
                this.userFileInput.nativeElement.click();
            }
            else {
                this.firmaFileInput.nativeElement.click();
            }
        }
    };
    SignupFirmaPage.prototype.processWebImage = function (event, url) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (readerEvent) {
            console.log("event");
            var imageData = readerEvent.target.result;
            if (url == 'user') {
                _this.userUrl = imageData;
            }
            else {
                _this.firmaUrl = imageData;
            }
            // console.log(imageData);
            // console.log(JSON.stringify(readerEvent.target));
            // this.form.patchValue({ 'profilePic': imageData });
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    SignupFirmaPage.prototype.getProfileImageStyle = function (url) {
        // console.log(url+'  url');
        return 'url(' + url + ')';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('userFileInput'),
        __metadata("design:type", Object)
    ], SignupFirmaPage.prototype, "userFileInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('firmaFileInput'),
        __metadata("design:type", Object)
    ], SignupFirmaPage.prototype, "firmaFileInput", void 0);
    SignupFirmaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup-firma',template:/*ion-inline-start:"C:\Users\7448\Desktop\isgucvarIsveren\src\pages\signup-firma\signup-firma.html"*/'<!--\n  Generated template for the SignupFirmaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Firma Kayıt</ion-title>\n  </ion-navbar>\n  <!-- <script src=\'https://www.google.com/recaptcha/api.js\'></script> -->\n</ion-header>\n\n<!-- <script src="//widget.cloudinary.com/global/all.js" type="text/javascript"></script>\n<script type="text/javascript">\n  document.getElementById("upload_widget_opener").addEventListener("click", function() {\n    cloudinary.openUploadWidget({ cloud_name: \'isgucvar\', upload_preset: \'cod9ui0a\'},\n      function(error, result) { console.log(error, result) });\n  }, false);\n</script> -->\n<ion-content padding>\n  <!-- <a href="#" id="upload_widget_opener">Upload multiple images</a> -->\n\n  <form #heroForm="ngForm">\n            <ion-list>\n              <ion-item-divider no-lines color="light">Yönetici Bilgileri:</ion-item-divider>\n              <input type="file" #userFileInput style="visibility: hidden; height: 0px" (change)="processWebImage($event, \'user\')" required />\n              <div class="profile-image-wrapper">\n                <div class="profile-image-placeholder" *ngIf="!userUrl" (click)="getPicture(\'user\')">\n                  <ion-icon name="add"></ion-icon>\n                  <div>Profil Resmi</div>\n                </div>\n                <!-- <div class="profile-image" [style.backgroundImage]="getProfileImageStyle(userUrl)" *ngIf="userUrl"></div> -->\n                <div *ngIf="userUrl" >\n                    <img class="profile-image" [src]="userUrl" (click)="getPicture(\'user\')">\n                </div>\n              </div>\n                <ion-item>\n                    <ion-label><ion-icon name="mail"></ion-icon></ion-label>\n                    <ion-input [(ngModel)]="email" placeholder="Email" type="email" #name="ngModel" name="name" required\n                    pattern="[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})">\n                  </ion-input>\n                </ion-item>\n                <ion-item no-lines *ngIf="name.errors">\n                    <p style="color:red;">Lütfen geçerli email giriniz</p>\n                </ion-item>\n                <ion-item>\n                    <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n                    <ion-input [(ngModel)]="password" placeholder="Şifre" type="password" #pass="ngModel" name="pass" minlength="6" required>\n                    </ion-input>\n                </ion-item>\n                <ion-item no-lines *ngIf="pass.errors">\n                    <p style="color:red;">Şifre minimum 6 karakter olmalı</p>\n                </ion-item>\n                <ion-item>\n                    <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n                    <ion-input [(ngModel)]="password1" placeholder="Tekrar Şifre" type="password" #pass1="ngModel" name="pass1" minlength="6" required>\n                    </ion-input>\n                </ion-item>\n                <ion-item no-lines *ngIf="pass1.value != pass.value">\n                    <p style="color:red;">Girilen şifreler aynı değil</p>\n                </ion-item>\n\n                <p>\n                </p>\n                <ion-item-divider no-lines color="light">Firma Bilgileri:</ion-item-divider>\n                <input type="file" #firmaFileInput style="visibility: hidden; height: 0px" (change)="processWebImage($event, \'firma\')" required/>\n                <div class="profile-image-wrapper">\n                  <div class="profile-image-placeholder" *ngIf="!firmaUrl" (click)="getPicture(\'firma\')">\n                    <ion-icon name="add"></ion-icon>\n                    <div>Firma Logosu</div>\n                  </div>\n                  <!-- <div class="profile-image" [style.backgroundImage]="getProfileImageStyle(firmaUrl)" *ngIf="firmaUrl"></div> -->\n                  <div *ngIf="firmaUrl" >\n                      <img class="profile-image" [src]="firmaUrl" (click)="getPicture(\'firma\')">\n                  </div>\n                </div>\n                <ion-item>\n                    <ion-label><ion-icon name="power"></ion-icon></ion-label>\n                    <ion-input [(ngModel)]="firma" placeholder="Firma ismi" type="text" #firmaa="ngModel" name="firma" required></ion-input>\n                </ion-item>\n                <ion-item no-lines *ngIf="firmaa.errors">\n                    <p style="color:red;">Lütfen geçerli firma giriniz</p>\n                </ion-item>\n                <ion-item>\n                    <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n                    <ion-input [(ngModel)]="firmaPass" placeholder="Firma Şifresi" type="password" #firmaPasss="ngModel" name="firmaPass" minlength="6" required>\n                    </ion-input>\n                </ion-item>\n                <ion-item no-lines *ngIf="firmaPasss.errors">\n                    <p style="color:red;">Firma Şifresİ minimum 6 karakter olmalı</p>\n                </ion-item>\n                <ion-item>\n                    <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n                    <ion-input [(ngModel)]="firmaPass1" placeholder="Şifre tekrar" type="password" #firmaPasss1="ngModel" name="firmaPass1" minlength="6" required>\n                    </ion-input>\n                </ion-item>\n                <ion-item no-lines *ngIf="firmaPasss1.value != firmaPasss.value">\n                    <p style="color:red;">Girilen firma şifreleri aynı değil</p>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label><ion-icon name="call"></ion-icon></ion-label>\n                    <ion-input  type="number" [(ngModel)]="telefon" placeholder="İrtibat Telefonu" #tel="ngModel" name="telef" required></ion-input>\n                </ion-item>\n                <ion-item no-lines *ngIf="tel.errors">\n                    <p style="color:red;">Lütfen geçerli telefon giriniz</p>\n                </ion-item>\n\n            </ion-list>\n            <div class="g-recaptcha" data-sitekey="6LeWBS4UAAAAAAvIlSnwKqhUq2u4gPuTdLAU6UOZ"></div>\n\n            <button ion-button block (click)="registerFirma()"\n                    [disabled]="!heroForm.form.valid||firmaPasss1.value != firmaPasss.value||pass1.value != pass.value">Kaydol</button>\n          </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\7448\Desktop\isgucvarIsveren\src\pages\signup-firma\signup-firma.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_ser__["a" /* UserSerProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_4__providers_ozgecmis_ser__["a" /* OzgecmisSerProvider */]])
    ], SignupFirmaPage);
    return SignupFirmaPage;
}());

//# sourceMappingURL=signup-firma.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPage; });
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
 * Generated class for the ResetPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ResetPage = /** @class */ (function () {
    function ResetPage(navCtrl, navParams, authService, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.reset = true;
    }
    ResetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PassResetPage');
    };
    ResetPage.prototype.resetle = function () {
        var _this = this;
        // this.showLoader();
        var user = {
            email: this.email,
            prm: 'firmauser'
        };
        // console.log(JSON.stringify(credentials)+'credentials');
        this.authService.forgot(user).then(function (result) {
            _this.reset = !_this.reset;
            // this.loading.dismiss();
            // this.navCtrl.setRoot(SonucPage);
        }, function (err) {
            // this.loading.dismiss();
            console.log(JSON.stringify(err._body) + 'asdasd');
            // this.presentToast('Girdiğiniz kullanıcı geçersiz veya bağ');
        });
    };
    ResetPage.prototype.setPass = function () {
        var _this = this;
        // this.showLoader();
        var user = {
            email: this.email,
            password: this.password,
            resetPasswordToken: this.resetPasswordToken,
            prm: 'firmauser'
        };
        // console.log(JSON.stringify(credentials)+'credentials');
        this.authService.reset(user).then(function (result) {
            _this.reset = !_this.reset;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            // this.loading.dismiss();
            // this.navCtrl.setRoot(SonucPage);
        }, function (err) {
            // this.loading.dismiss();
            console.log(JSON.stringify(err._body) + 'asdasd');
            // this.presentToast('Girdiğiniz kullanıcı geçersiz veya bağ');
        });
    };
    ResetPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Giriş yapılıyor...'
        });
        this.loading.present();
    };
    ResetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reset',template:/*ion-inline-start:"C:\Users\7448\Desktop\isgucvarIsveren\src\pages\reset\reset.html"*/'<!--\n  Generated template for the PassReset page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title *ngIf="reset">Şifre Resetleme</ion-title>\n    <ion-title *ngIf="!reset">Yeni Şifre</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n<div *ngIf="reset">\n<ion-list>\n    <ion-item>\n        <ion-label><ion-icon name="mail"></ion-icon></ion-label>\n        <ion-input [(ngModel)]="email" placeholder="Email" type="email" required></ion-input>\n    </ion-item>\n</ion-list>\n<button ion-button block (click)="resetle()">Şİfre Gönder</button>\n<button ion-button clear small (click)="reset=false;">Geçİcİ şİfrem geldİ, yenİ şİfre belİrleyeceğİm </button>\n\n</div>\n\n<div *ngIf="!reset">\n<ion-list>\n    <ion-item>\n        <ion-label><ion-icon name="mail"></ion-icon></ion-label>\n        <ion-input [(ngModel)]="email" placeholder="Email" type="email" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n        <ion-input [(ngModel)]="resetPasswordToken" placeholder="Geçici Şifre" type="text" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n        <ion-input [(ngModel)]="password" placeholder="Yeni Şifre" type="password" #firmaPasss="ngModel" minlength="6" required></ion-input>\n    </ion-item>\n    <ion-item no-lines *ngIf="firmaPasss.errors">\n        <p style="color:red;">Firma Şifresİ minimum 6 karakter olmalı</p>\n    </ion-item>\n    <ion-item>\n        <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n        <ion-input [(ngModel)]="password1" placeholder="Şifre tekrar" type="password" #firmaPasss1="ngModel" minlength="6" required>\n        </ion-input>\n    </ion-item>\n    <ion-item no-lines *ngIf="firmaPasss1.value != firmaPasss.value">\n        <p style="color:red;">Girilen firma şifreleri aynı değil</p>\n    </ion-item>\n</ion-list>\n<button ion-button block (click)="setPass()">Yenİ Şİfre Belİrle</button>\n<button ion-button clear small (click)="reset=true;">Emaİlİme geçİcİ şİfre gönder</button>\n\n</div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\7448\Desktop\isgucvarIsveren\src\pages\reset\reset.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_ser__["a" /* UserSerProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], ResetPage);
    return ResetPage;
}());

//# sourceMappingURL=reset.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirmaHesapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_ozgecmis_ser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_ser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_ilan_ser__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(41);
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
            selector: 'page-firma-hesap',template:/*ion-inline-start:"C:\Users\7448\Desktop\isgucvarIsveren\src\pages\firma-hesap\firma-hesap.html"*/'<!--\n  Generated template for the FirmaHesapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Firma Hesap</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngIf="user">\n  <form #heroForm="ngForm">\n    <ion-list>\n      <ion-item-divider no-lines color="light">Firma profil resmi değiştirin</ion-item-divider>\n      <input type="file" #userFileInput style="visibility: hidden; height: 0px" (change)="processWebImage($event)" required />\n      <div class="profile-image-wrapper">\n        <div class="profile-image-placeholder" *ngIf="!userUrl">\n          <ion-icon name="add"></ion-icon>\n          <div>Profil Resmi</div>\n        </div>\n        <!-- <div class="profile-image" [style.backgroundImage]= "userUrl" *ngIf="userUrl"></div> -->\n        <div *ngIf="userUrl" >\n            <img class="profile-image" [src]="cloudUrl" (click)="getPicture()">\n        </div>\n      </div>\n\n        <ion-item-divider no-lines color="light">Yeni firma ismi veya şifresi belirleyin</ion-item-divider>\n        <ion-item>\n            <ion-label><ion-icon name="mail"></ion-icon></ion-label>\n            <ion-input [(ngModel)]="user.firma" placeholder="Firma İsmi" type="text" #name="ngModel" name="name">\n          </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n            <ion-input [(ngModel)]="newpassword" placeholder="Yeni firma şifresi" type="password" #pass="ngModel" name="pass" minlength="6">\n            </ion-input>\n        </ion-item>\n        <ion-item no-lines *ngIf="pass.errors">\n            <p style="color:red;">Şifre minimum 6 karakter olmalı</p>\n        </ion-item>\n        <ion-item>\n            <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n            <ion-input [(ngModel)]="newpassword1" placeholder="Yeni firma şifresi tekrar" type="password" #pass1="ngModel" name="pass1" minlength="6">\n            </ion-input>\n        </ion-item>\n        <ion-item no-lines *ngIf="pass1.value != pass.value">\n            <p style="color:red;">Girilen şifreler aynı değil</p>\n        </ion-item>\n        <!-- <ion-item-divider no-lines color="light"></ion-item-divider> -->\n        <div style="padding-top: 20px">\n      </div>\n        <ion-item>\n            <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n            <ion-input [(ngModel)]="password" placeholder="Mevcut kullanıcı şifreniz" type="password" #oldpass="ngModel" name="passwrd" required>\n            </ion-input>\n        </ion-item>\n        <ion-item no-lines *ngIf="oldpass.errors">\n            <p style="color:red;">Lütfen mevcut kullanıcı şifresini girin</p>\n        </ion-item>\n\n    </ion-list>\n\n    <button ion-button block (click)="updateUser()"\n            [disabled]="!heroForm.form.valid||pass1.value != pass.value||heroForm.form.untouched">Güncelle</button>\n    </form>\n\n    <div style="padding-top: 40px">\n  </div>\n\n    <ion-list text-wrap>\n\n      <ion-item-divider no-lines color="light">Firma kullanıcıları aktiflik ayarı</ion-item-divider>\n      <ion-item *ngFor="let usr of userList">\n        <ion-avatar item-start *ngIf="usr && usr.resim">\n          <img class="img-circle" [src]="usr.resim">\n        </ion-avatar>\n        <!-- <ion-row>\n        <ion-col> -->\n\n        <ion-label>\n          <div [class.my-class]="!usr.enabled">{{usr.email}}\n      </div>\n    </ion-label>\n        <ion-toggle [(ngModel)]="usr.enabled" (ionChange)="updateUserEnabled(usr)"></ion-toggle>\n        <!-- </ion-col>\n        <ion-col>\n        </ion-col>\n      </ion-row> -->\n    </ion-item>\n    </ion-list>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\7448\Desktop\isgucvarIsveren\src\pages\firma-hesap\firma-hesap.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__providers_ozgecmis_ser__["a" /* OzgecmisSerProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_user_ser__["a" /* UserSerProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_ilan_ser__["a" /* IlanSerProvider */]])
    ], FirmaHesapPage);
    return FirmaHesapPage;
}());

//# sourceMappingURL=firma-hesap.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HesapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_ozgecmis_ser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_ser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(41);
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

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 175;

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/ayarlar/ayarlar.module": [
		707,
		7
	],
	"../pages/firma-hesap/firma-hesap.module": [
		708,
		15
	],
	"../pages/hesap/hesap.module": [
		709,
		14
	],
	"../pages/ilan-detay/ilan-detay.module": [
		710,
		6
	],
	"../pages/ilan-ekle/ilan-ekle.module": [
		711,
		1
	],
	"../pages/ilan-filtrele/ilan-filtrele.module": [
		712,
		13
	],
	"../pages/ilanlarim/ilanlarim.module": [
		713,
		5
	],
	"../pages/login/login.module": [
		714,
		12
	],
	"../pages/ozgecmis-detay/ozgecmis-detay.module": [
		715,
		0
	],
	"../pages/ozgecmis-filtrele/ozgecmis-filtrele.module": [
		716,
		11
	],
	"../pages/ozgecmislerim/ozgecmislerim.module": [
		718,
		4
	],
	"../pages/reset/reset.module": [
		717,
		10
	],
	"../pages/signup-firma/signup-firma.module": [
		719,
		9
	],
	"../pages/signup/signup.module": [
		720,
		8
	],
	"../pages/tum-ilanlar/tum-ilanlar.module": [
		721,
		2
	],
	"../pages/tum-ozgecmisler/tum-ozgecmisler.module": [
		722,
		3
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 220;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserSerProvider = /** @class */ (function () {
    function UserSerProvider(http, storage, toastCtrl, loadingCtrl, events) {
        this.http = http;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.token = {};
        this.user = {};
        // url : string = window.location.origin+'/api/firmaauth/';
        // url1 : string = window.location.origin+'/api/tools/';
        this.url = 'https://isgucvarisveren.herokuapp.com/api/firmaauth/';
        this.url1 = 'https://isgucvarisveren.herokuapp.com/api/tools/';
        console.log('Hello UserSerProvider Provider');
        // this.checkAuthentication();
    }
    UserSerProvider.prototype.checkAuthentication = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get('token').then(function (value) {
                // console.log(value+' token');
                _this.token = value;
                _this.storage.get('user')
                    .then(function (user) {
                    _this.currentUser = user;
                    _this.events.publish('login:event');
                })
                    .catch(function (err) {
                    console.log("hata");
                });
                var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
                headers.append('Authorization', _this.token);
                _this.http.get(_this.url + 'protected', { headers: headers })
                    .subscribe(function (res) {
                    console.log(JSON.stringify(res) + "success");
                    resolve(res);
                }, function (err) {
                    console.log(JSON.stringify(err) + "err");
                    reject(err);
                });
            });
        });
    };
    UserSerProvider.prototype.createFirmaAccount = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.showLoader();
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post(_this.url + 'register/firma', JSON.stringify(details), { headers: headers })
                .subscribe(function (res) {
                // this.currentUser = details;
                var data = res.json();
                // this.token = data.token;
                // this.storage.set('token', data.token);
                // this.storage.set('user', details);
                _this.loading.dismiss();
                _this.presentToast("Firma hesabı oluşturuldu!");
                resolve(data);
            }, function (err) {
                _this.loading.dismiss();
                var erm = JSON.parse(err._body);
                _this.presentToast("Firma hesabı oluşturulamadı! " + erm.error);
                reject(err);
            });
        });
    };
    UserSerProvider.prototype.createAccount = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.showLoader();
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            console.log("createaccount");
            _this.http.post(_this.url + 'register/user', JSON.stringify(details), { headers: headers })
                .subscribe(function (res) {
                var data = res.json();
                _this.loading.dismiss();
                _this.presentToast("Çalışan hesabı oluşturuldu!");
                resolve(data);
            }, function (err) {
                // console.log(err+"hebe");
                // console.log(JSON.parse(err)+"adsasdad");
                if (err._body) {
                    _this.loading.dismiss();
                    _this.presentToast("Çalışan hesabı oluşturulamadı! Firma bilgileri hatalı!");
                }
                else {
                    _this.loading.dismiss();
                    var erm = JSON.parse(err._body);
                    _this.presentToast("Çalışan hesabı oluşturulamadı! " + erm.error);
                    reject(err);
                }
            });
        });
    };
    UserSerProvider.prototype.login = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.showLoader();
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post(_this.url + 'login', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                var data = res.json();
                _this.token = data.token;
                // console.log(data+'data');
                console.log(JSON.stringify(data) + 'user');
                _this.currentUser = data.user;
                _this.storage.set('token', data.token);
                _this.storage.set('user', data.user);
                _this.events.publish('login:event');
                _this.loading.dismiss();
                resolve(data);
                // resolve(res.json());
            }, function (err) {
                _this.loading.dismiss();
                _this.presentToast('Bilgileriniz hatalı veya hesabınız aktif değil!');
                console.log(JSON.stringify(err) + 'servis err');
                reject(err);
            });
        });
    };
    UserSerProvider.prototype.updateUser = function (user) {
        var _this = this;
        this.showLoader();
        return new Promise(function (resolve, reject) {
            var en = user.en ? user.en : "";
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', _this.token);
            console.log(JSON.stringify(user) + 'order service update user');
            _this.http.put(_this.url + 'updateuser' + en, JSON.stringify(user), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                // this.ozgecmis = kayit;
                // this.storage.set('ozgecmis', kayit);
                console.log(JSON.stringify(res) + "updateuser");
                _this.loading.dismiss();
                _this.presentToast('Kullanıcı güncellendi!');
                resolve(res);
            }, function (err) {
                // reject(err);
                _this.loading.dismiss();
                console.log(JSON.stringify(err));
                _this.presentToast('Kullanıcı güncellenemedi. Bağlantı problemi veya şifre hatalı olabilir!');
            });
        });
    };
    UserSerProvider.prototype.updateFirma = function (user) {
        var _this = this;
        this.showLoader();
        return new Promise(function (resolve, reject) {
            console.log(JSON.stringify(user) + 'order service update firma');
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', _this.token);
            _this.http.put(_this.url + 'updatefirma', JSON.stringify(user), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                console.log(JSON.stringify(res) + "updatefirma");
                _this.loading.dismiss();
                _this.presentToast('Firma güncellendi. Tekrar giriş yaptığınızda geçerli olacak.');
                resolve(res);
            }, function (err) {
                // reject(err);
                console.log(JSON.stringify(err));
                _this.loading.dismiss();
                if (JSON.stringify(err).includes('duplicate'))
                    _this.presentToast('Firma ismi kullanılıyor. Firma güncellenemedi.');
                else
                    _this.presentToast('Firma güncellenemedi. Bağlantı problemi veya şifre hatalı olabilir!');
            });
        });
    };
    UserSerProvider.prototype.forgot = function (user) {
        var _this = this;
        this.showLoader();
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post(_this.url1 + 'forgot', JSON.stringify(user), { headers: headers })
                .subscribe(function (res) {
                resolve(res);
                // resolve(res.json());
                _this.loading.dismiss();
                _this.presentToast('Şifreniz resetlendi. Emailinize 1 saat geçerli geçici şifre gönderildi');
            }, function (err) {
                var erm = JSON.parse(err._body);
                console.log(erm.error + 'forgot err');
                _this.loading.dismiss();
                _this.presentToast("Geçici şifre gönderilemedi. " + erm.error);
            });
        });
    };
    UserSerProvider.prototype.reset = function (user) {
        var _this = this;
        this.showLoader();
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post(_this.url1 + 'reset', JSON.stringify(user), { headers: headers })
                .subscribe(function (res) {
                _this.loading.dismiss();
                resolve(res);
                // resolve(res.json());
                _this.presentToast('Şifreniz değiştirildi.');
            }, function (err) {
                var erm = JSON.parse(err._body);
                console.log(erm.error + 'forgot err');
                _this.loading.dismiss();
                _this.presentToast("Yeni şifre kaydedilemedi. " + erm.error);
            });
        });
    };
    UserSerProvider.prototype.logout = function () {
        this.storage.remove('token');
        this.storage.remove('user');
        this.currentUser = undefined;
        this.token = '';
    };
    UserSerProvider.prototype.presentToast = function (mesaj) {
        var toast = this.toastCtrl.create({
            message: mesaj,
            duration: 5000,
            position: 'top',
            showCloseButton: true,
            closeButtonText: 'OK'
        });
        toast.onDidDismiss(function () {
            // console.log('Dismissed toast');
        });
        toast.present();
    };
    UserSerProvider.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'İşlem yapılıyor...'
        });
        this.loading.present();
    };
    UserSerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* Events */]])
    ], UserSerProvider);
    return UserSerProvider;
}());

//# sourceMappingURL=user-ser.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IlanFiltrelePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ilan_ser__ = __webpack_require__(93);
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
 * Generated class for the IlanFiltrelePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var IlanFiltrelePage = /** @class */ (function () {
    function IlanFiltrelePage(navCtrl, navParams, viewCtrl, events, ilanSer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.events = events;
        this.ilanSer = ilanSer;
        this.sehirler = [];
        this.sehirler = ilanSer.sehirler;
        this.detayAra = navParams.get('detayAra');
        console.log(JSON.stringify(this.detayAra) + 'detay');
        this.sirala = navParams.get('sirala');
        this.ilanlarim = navParams.get('ilanlarim');
    }
    IlanFiltrelePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IlanFiltrelePage' + this.ilanlarim);
    };
    IlanFiltrelePage.prototype.filtrele = function () {
        console.log(this.sirala + 'kapatfiltre');
        console.log(JSON.stringify(this.detayAra) + 'kapatfiltre');
        // console.log(JSON.stringify(this.sirala)+'parsefiltre');
        this.events.publish('ilan:filtered' + this.ilanlarim);
        this.navCtrl.pop();
    };
    IlanFiltrelePage.prototype.clear = function () {
        console.log(JSON.stringify(this.detayAra) + 'clearfiltre');
        this.events.publish('ilan:filtered', 'clear');
        this.navCtrl.pop();
    };
    IlanFiltrelePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ilan-filtrele',template:/*ion-inline-start:"C:\Users\7448\Desktop\isgucvarIsveren\src\pages\ilan-filtrele\ilan-filtrele.html"*/'<!--\n\n  Generated template for the IlanFiltrelePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>İlan Filtrele</ion-title>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div *ngIf="detayAra">\n\n  <!-- <ion-item-group>\n\n    <ion-item-divider color="light"></ion-item-divider>\n\n  <ion-item>\n\n  <ion-label color="secondary">Sırala:</ion-label>\n\n  <ion-select [(ngModel)]="sirala" cancelText="İptal" okText="Tamam">\n\n    <ion-option value=\'{}\'>En Uygun</ion-option>\n\n    <ion-option value=\'{"olusturmaTarih" :-1}\'>En Erken</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n</ion-item-group> -->\n\n\n\n<!-- <ion-item-group>\n\n  <ion-item-divider color="light"></ion-item-divider> -->\n\n  <ion-item>\n\n  <ion-label floating color="primary">İl</ion-label>\n\n  <ion-select [(ngModel)]="detayAra.il" interface="popover" cancelText="İptal" okText="Tamam">\n\n    <!-- <ion-option value=\'Konumum\'>Konumum</ion-option> -->\n\n    <ion-option *ngFor="let item of sehirler" value=\'{{item.sehir}}\'>{{item.sehir}}</ion-option>\n\n\n\n    <!-- <ion-option value=\'İstanbul\'>İstanbul</ion-option>\n\n    <ion-option value=\'Ankara\'>Ankara</ion-option>\n\n    <ion-option value=\'Kahramanmaraş\'>Kahramanmaraş</ion-option> -->\n\n  </ion-select>\n\n  </ion-item>\n\n  <div [hidden]="ilanlarim">\n\n<ion-item>\n\n    <ion-label floating color="primary">İlan Sahibi</ion-label>\n\n    <ion-input type="text" [(ngModel)]="detayAra.olusturan"></ion-input>\n\n</ion-item>\n\n</div>\n\n<ion-item>\n\n  <ion-label floating color="primary">Tecrübe</ion-label>\n\n  <ion-select [(ngModel)]="detayAra.tecrube" multiple="true" cancelText="İptal" okText="Tamam">\n\n    <!-- <ion-option value=\'\' selected="true">Farketmez</ion-option> -->\n\n    <ion-option value=\'Az Tecrübeli (Junior)\'>Az Tecrübeli (Junior)</ion-option>\n\n    <ion-option value=\'Orta Tecrübeli (Midlevel)\'>Orta Tecrübeli (Midlevel)</ion-option>\n\n    <ion-option value=\'Çok Tecrübeli (Senior)\'>Çok Tecrübeli (Senior)</ion-option>\n\n    <ion-option value=\'Yönetici (Manager)\'>Yönetici (Manager)</ion-option>\n\n    <ion-option value=\'Stajyer\'>Stajyer</ion-option>\n\n    <ion-option value=\'Hizmet Personeli - İşçi\'>Hizmet Personeli - İşçi</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n<ion-item>\n\n<ion-label floating color="primary">Eğitim</ion-label>\n\n<ion-select [(ngModel)]="detayAra.egitim" multiple="true" cancelText="İptal" okText="Tamam">\n\n  <ion-option value=\'Lise\'>Lise</ion-option>\n\n  <ion-option value=\'Lisans\'>Lisans</ion-option>\n\n  <ion-option value=\'Yüksek Lisans - Doktora\'>Yüksek Lisans - Doktora</ion-option>\n\n</ion-select>\n\n</ion-item>\n\n\n\n <!-- </ion-item-group> -->\n\n\n\n <ion-row>\n\n <ion-col>\n\n <button ion-button block icon-left color="secondary"  (click)="clear()">\n\n   <ion-icon name="backspace"></ion-icon>\n\n   Temizle</button>\n\n </ion-col>\n\n <ion-col>\n\n <button ion-button block icon-left color="primary" (click)="filtrele()">\n\n   <ion-icon name="search"></ion-icon>\n\n   Filtrele</button>\n\n </ion-col>\n\n</ion-row>\n\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\7448\Desktop\isgucvarIsveren\src\pages\ilan-filtrele\ilan-filtrele.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_2__providers_ilan_ser__["a" /* IlanSerProvider */]])
    ], IlanFiltrelePage);
    return IlanFiltrelePage;
}());

//# sourceMappingURL=ilan-filtrele.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OzgecmisFiltrelePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
 * Generated class for the OzgecmisFiltrelePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var OzgecmisFiltrelePage = /** @class */ (function () {
    function OzgecmisFiltrelePage(navCtrl, navParams, viewCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.events = events;
        this.sehirler = [
            { "sehir": "İstanbul" }, { "sehir": "Ankara" }, { "sehir": "İzmir" }, { "sehir": "Adana" }, { "sehir": "Adıyaman" }, { "sehir": "Afyonkarahisar" },
            { "sehir": "Ağrı" }, { "sehir": "Aksaray" }, { "sehir": "Amasya" }, { "sehir": "Antalya" }, { "sehir": "Ardahan" }, { "sehir": "Artvin" },
            { "sehir": "Aydın" }, { "sehir": "Balıkesir" }, { "sehir": "Bartın" }, { "sehir": "Batman" }, { "sehir": "Bayburt" }, { "sehir": "Bilecik" },
            { "sehir": "Bingöl" }, { "sehir": "Bitlis" }, { "sehir": "Bolu" }, { "sehir": "Burdur" }, { "sehir": "Bursa" }, { "sehir": "Çanakkale" }, { "sehir": "Çankırı" },
            { "sehir": "Çorum" }, { "sehir": "Denizli" }, { "sehir": "Diyarbakır" }, { "sehir": "Düzce" }, { "sehir": "Edirne" }, { "sehir": "Elazığ" },
            { "sehir": "Erzincan" }, { "sehir": "Erzurum" }, { "sehir": "Eskişehir" }, { "sehir": "Gaziantep" }, { "sehir": "Giresun" }, { "sehir": "Gümüşhane" },
            { "sehir": "Hakkari" }, { "sehir": "Hatay" }, { "sehir": "Iğdır" }, { "sehir": "Isparta" }, { "sehir": "Kahramanmaraş" }, { "sehir": "Karabük" },
            { "sehir": "Karaman" }, { "sehir": "Kars" }, { "sehir": "Kastamonu" }, { "sehir": "Kayseri" }, { "sehir": "Kırıkkale" }, { "sehir": "Kırklareli" },
            { "sehir": "Kırşehir" }, { "sehir": "Kilis" }, { "sehir": "Kocaeli" }, { "sehir": "Konya" }, { "sehir": "Kütahya" }, { "sehir": "Malatya" },
            { "sehir": "Manisa" }, { "sehir": "Mardin" }, { "sehir": "Mersin" }, { "sehir": "Muğla" }, { "sehir": "Muş" }, { "sehir": "Nevşehir" },
            { "sehir": "Niğde" }, { "sehir": "Ordu" }, { "sehir": "Osmaniye" }, { "sehir": "Rize" }, { "sehir": "Sakarya" }, { "sehir": "Samsun" },
            { "sehir": "Siirt" }, { "sehir": "Sinop" }, { "sehir": "Sivas" }, { "sehir": "Şırnak" }, { "sehir": "Tekirdağ" }, { "sehir": "Tokat" },
            { "sehir": "Trabzon" }, { "sehir": "Tunceli" }, { "sehir": "Şanlıurfa" }, { "sehir": "Uşak" }, { "sehir": "Van" }, { "sehir": "Yalova" },
            { "sehir": "Yozgat" }, { "sehir": "Zonguldak" }
        ];
        this.detayAra = navParams.get('detayAra');
        console.log(JSON.stringify(this.detayAra) + 'detay');
        this.sirala = navParams.get('sirala');
        this.page = this.navParams.get('page');
    }
    OzgecmisFiltrelePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OzgecmisFiltrelePage');
    };
    OzgecmisFiltrelePage.prototype.filtrele = function () {
        console.log(this.sirala + 'kapatfiltre');
        console.log(JSON.stringify(this.detayAra) + 'kapatfiltre');
        // console.log(JSON.stringify(this.sirala)+'parsefiltre');
        this.events.publish('ozgecmis:filtered_' + this.navParams.get('page'));
        this.navCtrl.pop();
    };
    OzgecmisFiltrelePage.prototype.clear = function () {
        console.log(JSON.stringify(this.detayAra) + 'clearfiltre');
        this.events.publish('ozgecmis:filtered_' + this.navParams.get('page'), 'clear');
        this.navCtrl.pop();
    };
    OzgecmisFiltrelePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ozgecmis-filtrele',template:/*ion-inline-start:"C:\Users\7448\Desktop\isgucvarIsveren\src\pages\ozgecmis-filtrele\ozgecmis-filtrele.html"*/'<!--\n\n  Generated template for the OzgecmisFiltrelePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Özgeçmiş Filtrele</ion-title>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div *ngIf="detayAra">\n\n    <ion-item>\n\n      <ion-label floating color="primary">Özgeçmiş Sahibi</ion-label>\n\n      <ion-input type="text" [(ngModel)]="detayAra.isim"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label floating color="primary">Ünvan / Son Pozisyon</ion-label>\n\n        <ion-input  type="text" [(ngModel)]="detayAra.unvan"></ion-input>\n\n    </ion-item>\n\n\n\n  <ion-item>\n\n  <ion-label floating color="primary">İl</ion-label>\n\n  <ion-select [(ngModel)]="detayAra.sehir" interface="popover" cancelText="İptal" okText="Tamam">\n\n    <!-- <ion-option value=\'Konumum\'>Konumum</ion-option> -->\n\n    <ion-option *ngFor="let item of sehirler" value=\'{{item.sehir}}\'>{{item.sehir}}</ion-option>\n\n  </ion-select>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n  <ion-label floating color="primary">Eğitim</ion-label>\n\n  <ion-select [(ngModel)]="detayAra.egitimdurum" cancelText="İptal" okText="Tamam">\n\n    <ion-option value="1">İlköğretim</ion-option>\n\n    <ion-option value="2">Lise</ion-option>\n\n    <ion-option value="3">Lisans</ion-option>\n\n    <ion-option value="4">Yüksek Lisans</ion-option>\n\n    <ion-option value="5">Doktora</ion-option>\n\n  </ion-select>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n  <ion-label [hidden]="page != \'tüm\'" floating color="primary">Özgeçmiş Çeşidi</ion-label>\n\n  <ion-select [(ngModel)]="detayAra.tumfirma" cancelText="İptal" okText="Tamam">\n\n    <ion-option value="f">Sadece Firma Özgeçmişleri</ion-option>\n\n    <ion-option value="t">Tüm Özgeçmişler</ion-option>\n\n  </ion-select>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n      <ion-label floating color="primary">Minimum Tecrübe (yıl)</ion-label>\n\n      <ion-input  type="number" [(ngModel)]="detayAra.yilTecrube"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label floating color="primary">Minimum Doğum Tarihi</ion-label>\n\n    <ion-datetime displayFormat="DD/MM/YYYY" pickerFormat="DD MMMM YYYY" [(ngModel)]="detayAra.dogumTarihi" cancelText="İptal" doneText="Tamam">\n\n    </ion-datetime>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n      <ion-label stacked color="primary">Bilgisayar Teknolojileri</ion-label>\n\n      <ion-input  type="text" placeholder="Örn: Excel,Sql" [(ngModel)]="detayAra.bilgisayar"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n      <ion-label floating color="primary">Yabancı Dil:</ion-label>\n\n      <ion-input  type="text" [(ngModel)]="detayAra.dil"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n  <ion-label floating color="primary">Dil Seviye</ion-label>\n\n  <ion-select [(ngModel)]="detayAra.seviye" cancelText="İptal" okText="Tamam">\n\n    <ion-option value="1">Başlangıç</ion-option>\n\n    <ion-option value="2">Orta</ion-option>\n\n    <ion-option value="3">İyi</ion-option>\n\n    <ion-option value="4">Çok İyi</ion-option>\n\n    <ion-option value="5">Mükemmel</ion-option>\n\n  </ion-select>\n\n  </ion-item>\n\n\n\n  <ion-row>\n\n  <ion-col>\n\n  <button ion-button block icon-left color="secondary"  (click)="clear()">\n\n   <ion-icon name="backspace"></ion-icon>\n\n   Temizle</button>\n\n  </ion-col>\n\n  <ion-col>\n\n  <button ion-button block icon-left color="primary" (click)="filtrele()">\n\n   <ion-icon name="search"></ion-icon>\n\n   Filtrele</button>\n\n  </ion-col>\n\n  </ion-row>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\7448\Desktop\isgucvarIsveren\src\pages\ozgecmis-filtrele\ozgecmis-filtrele.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], OzgecmisFiltrelePage);
    return OzgecmisFiltrelePage;
}());

//# sourceMappingURL=ozgecmis-filtrele.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(373);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_ilan_filtrele_ilan_filtrele__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_ozgecmis_filtrele_ozgecmis_filtrele__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_reset_reset__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signup_firma_signup_firma__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_hesap_hesap__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_firma_hesap_firma_hesap__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_ilan_ser__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_ozgecmis_ser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_user_ser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_aktivite_ser__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__cloudinary_angular_4_x__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__cloudinary_angular_4_x___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20__cloudinary_angular_4_x__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_cloudinary_core__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_cloudinary_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_cloudinary_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_camera__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_social_sharing__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_facebook__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angular_linkedin_sdk__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angular_linkedin_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_angular_linkedin_sdk__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























// import { Deeplinks } from '@ionic-native/deeplinks';



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                // OzgecmislerimPage,
                // OzgecmisDetayPage,
                // TumOzgecmislerPage,
                // IlanlarimPage,
                // IlanDetayPage,
                // TumIlanlarPage,
                // DatePipe,
                __WEBPACK_IMPORTED_MODULE_4__pages_ilan_filtrele_ilan_filtrele__["a" /* IlanFiltrelePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_ozgecmis_filtrele_ozgecmis_filtrele__["a" /* OzgecmisFiltrelePage */],
                // IlanEklePage,
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signup_firma_signup_firma__["a" /* SignupFirmaPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_reset_reset__["a" /* ResetPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_hesap_hesap__["a" /* HesapPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_firma_hesap_firma_hesap__["a" /* FirmaHesapPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/ayarlar/ayarlar.module#AyarlarPageModule', name: 'AyarlarPage', segment: 'ayarlar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/firma-hesap/firma-hesap.module#FirmaHesapPageModule', name: 'FirmaHesapPage', segment: 'firma-hesap', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hesap/hesap.module#HesapPageModule', name: 'HesapPage', segment: 'hesap', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ilan-detay/ilan-detay.module#IlanDetayPageModule', name: 'IlanDetayPage', segment: 'ilandetay/:ilanId', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ilan-ekle/ilan-ekle.module#IlanEklePageModule', name: 'IlanEklePage', segment: 'ilan-ekle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ilan-filtrele/ilan-filtrele.module#IlanFiltrelePageModule', name: 'IlanFiltrelePage', segment: 'ilan-filtrele', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ilanlarim/ilanlarim.module#IlanlarimPageModule', name: 'IlanlarimPage', segment: 'ilanlarim', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ozgecmis-detay/ozgecmis-detay.module#OzgecmisDetayPageModule', name: 'OzgecmisDetayPage', segment: 'ozgecmisdetay/:ozgecmisId', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ozgecmis-filtrele/ozgecmis-filtrele.module#OzgecmisFiltrelePageModule', name: 'OzgecmisFiltrelePage', segment: 'ozgecmis-filtrele', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reset/reset.module#ResetPageModule', name: 'ResetPage', segment: 'reset', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ozgecmislerim/ozgecmislerim.module#OzgecmislerimPageModule', name: 'OzgecmislerimPage', segment: 'ozgecmislerim', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup-firma/signup-firma.module#SignupFirmaPageModule', name: 'SignupFirmaPage', segment: 'signup-firma', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tum-ilanlar/tum-ilanlar.module#TumIlanlarPageModule', name: 'TumIlanlarPage', segment: 'tum-ilanlar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tum-ozgecmisler/tum-ozgecmisler.module#TumOzgecmislerPageModule', name: 'TumOzgecmislerPage', segment: 'tum-ozgecmisler', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_19__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_18__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_20__cloudinary_angular_4_x__["CloudinaryModule"].forRoot(__WEBPACK_IMPORTED_MODULE_21_cloudinary_core__, { cloud_name: 'isgucvar', upload_preset: 'cod9ui0a' }),
                __WEBPACK_IMPORTED_MODULE_25_angular_linkedin_sdk__["LinkedInSdkModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                // OzgecmislerimPage,
                // OzgecmisDetayPage,
                // TumOzgecmislerPage,
                // IlanlarimPage,
                // IlanDetayPage,
                // TumIlanlarPage,
                __WEBPACK_IMPORTED_MODULE_4__pages_ilan_filtrele_ilan_filtrele__["a" /* IlanFiltrelePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_ozgecmis_filtrele_ozgecmis_filtrele__["a" /* OzgecmisFiltrelePage */],
                // IlanEklePage,
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signup_firma_signup_firma__["a" /* SignupFirmaPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_reset_reset__["a" /* ResetPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_hesap_hesap__["a" /* HesapPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_firma_hesap_firma_hesap__["a" /* FirmaHesapPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__providers_user_ser__["a" /* UserSerProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_aktivite_ser__["a" /* AktiviteSerProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_ilan_ser__["a" /* IlanSerProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_ozgecmis_ser__["a" /* OzgecmisSerProvider */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_camera__["a" /* Camera */],
                // Deeplinks,
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_facebook__["a" /* Facebook */],
                { provide: 'apiKey', useValue: '86p3aqpfdryb6f' },
                { provide: 'authorize', useValue: 'true' },
                { provide: 'isServer', useValue: 'true' } // OPTIONAL by default: false
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_ser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_firma_signup_firma__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reset_reset__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { PassResetPage } from '../pass-reset/pass-reset';
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, authService, loadingCtrl, storage, events) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.events = events;
        console.log("loginpage");
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad LoginPage');
        this.storage.get('user')
            .then(function (user) {
            _this.email = user.email;
            _this.password = user.password;
            console.log("storage user");
        })
            .catch(function (err) {
            console.log("hata");
            return;
        });
        this.showLoader('Bilgiler yükleniyor...');
        //Check if already authenticated
        this.authService.checkAuthentication().then(function (res) {
            console.log("Already authorized");
            _this.loading.dismiss();
            if (_this.navCtrl.canGoBack())
                return;
            else
                _this.navCtrl.setRoot('IlanlarimPage');
        }, function (err) {
            // console.log("Not already authorized");
            _this.loading.dismiss();
        });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        // this.showLoader('Giriş Yapılıyor...');
        var credentials = {
            email: this.email,
            password: this.password
        };
        console.log(JSON.stringify(credentials) + 'credentials');
        this.authService.login(credentials).then(function (result) {
            console.log(JSON.stringify(result) + "result");
            // this.loading.dismiss();
            _this.navCtrl.setRoot('IlanlarimPage');
        }, function (err) {
            // this.loading.dismiss();
            console.log(JSON.stringify(err._body) + 'asdasd');
            // let msg = JSON.parse(err._body);
        });
    };
    LoginPage.prototype.launchSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.launchFirmaSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_firma_signup_firma__["a" /* SignupFirmaPage */]);
    };
    LoginPage.prototype.resetPass = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__reset_reset__["a" /* ResetPage */]);
    };
    LoginPage.prototype.showLoader = function (message) {
        this.loading = this.loadingCtrl.create({
            content: message
        });
        this.loading.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\7448\Desktop\isgucvarIsveren\src\pages\login\login.html"*/'<!--\n  Generated template for the Login page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>İşveren Giriş</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <form #heroForm="ngForm">\n\n            <ion-list>\n\n              <ion-item>\n                <ion-label><ion-icon name="mail"></ion-icon></ion-label>\n                <ion-input [(ngModel)]="email" placeholder="Email" type="email" #name="ngModel" name="name"\n                required pattern="[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})"></ion-input>\n              </ion-item>\n              <ion-item no-lines *ngIf="name.errors">\n                  <p style="color:red;">Lütfen geçerli email giriniz</p>\n              </ion-item>\n              <ion-item>\n                <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n                <ion-input [(ngModel)]="password" placeholder="Şifre" type="password" #pass="ngModel" name="pass" required></ion-input>\n              </ion-item>\n            </ion-list>\n\n            <button ion-button block icon-left (click)="login()" color="primary"  [disabled]="!heroForm.form.valid">\n              <ion-icon name="log-in"></ion-icon>\n              GİrİŞ</button>\n          </form>\n\n    <ion-row>\n        <ion-col text-center>\n            <button ion-button round icon-left align="center" color="secondary" (click)="launchSignup()">\n              <ion-icon name="person-add"></ion-icon>\n              Hesap OluŞtur</button>\n        </ion-col>\n        <ion-col text-center>\n            <button ion-button round icon-left align="center" color="yellow" (click)="launchFirmaSignup()">\n              <ion-icon name="power"></ion-icon>\n              Fİrma OluŞtur</button>\n        </ion-col>\n        <ion-col text-center>\n          <button ion-button clear align="center" color="danger"  (click)="resetPass()">Şİfremİ unuttum</button>\n        </ion-col>\n    </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\7448\Desktop\isgucvarIsveren\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_ser__["a" /* UserSerProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_ser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_hesap_hesap__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_firma_hesap_firma_hesap__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, alertCtrl, authService, storage, events) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.storage = storage;
        this.events = events;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.user = {};
        this.username = "";
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'İlan Ekle', component: 'IlanEklePage', icon: "add-circle" },
            { title: 'İlanlarım', component: 'IlanlarimPage', icon: "clipboard" },
            { title: 'Firmanın İlanları', component: 'TumIlanlarPage', icon: "filing" },
            { title: 'Özgeçmişlerim', component: 'OzgecmislerimPage', icon: "person" },
            { title: 'Tüm Özgeçmişler', component: 'TumOzgecmislerPage', icon: "people" },
            { title: 'Ayarlar', component: 'AyarlarPage', icon: "settings" }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.events.subscribe('login:event', function () {
            // this.storage.get('user')
            //     .then((user) => { this.user = user;
            //       this.username = user.email.substring(0, user.email.indexOf('@'));
            //       console.log(JSON.stringify(this.user)+"initial");
            //       // str.substring(0, str.indexOf(":"));
            //     });
            _this.user = _this.authService.currentUser;
            _this.username = _this.user.email.substring(0, _this.user.email.indexOf('@'));
        });
        // this.storage.get('user')
        //     .then((user) => { this.user = user;
        //       this.username = user.email.substring(0, user.email.indexOf('@'));
        //       console.log(JSON.stringify(user));
        //       // str.substring(0, str.indexOf(":"));
        //     });
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.platform.registerBackButtonAction(function () {
                if (_this.nav.canGoBack()) {
                    _this.nav.pop();
                }
                else {
                    if (_this.alert) {
                        _this.alert.dismiss();
                        _this.alert = null;
                    }
                    else {
                        _this.presentLogout('Uygulama kapansın mı?');
                    }
                }
            });
            // this.deeplinks.routeWithNavController(this.nav, {
            //   '/ilanlar/:ilanId': IlanDetayPage,
            //   '/ozgecmisler/:ozgecmisId': OzgecmisDetayPage
            //   // '/products/:productId': ProductPage
            // }).subscribe((match) => {
            //   console.log('Successfully routed', match);
            // }, (nomatch) => {
            //   console.warn('Unmatched Route', nomatch);
            // });
        });
    };
    MyApp.prototype.presentLogout = function (message) {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: message,
            // message: 'Çıkmak istediğinizden emin misiniz?',
            buttons: [
                {
                    text: 'Hayır',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Evet',
                    handler: function () {
                        console.log('Logged out');
                        if (message == 'Uygulama kapansın mı?') {
                            _this.platform.exitApp();
                        }
                        else {
                            _this.authService.logout();
                            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
                        }
                    }
                }
            ]
        });
        this.alert.present();
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.goHesap = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_hesap_hesap__["a" /* HesapPage */]);
    };
    MyApp.prototype.goFirmaHesap = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_firma_hesap_firma_hesap__["a" /* FirmaHesapPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\7448\Desktop\isgucvarIsveren\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <div *ngIf="user">\n\n        <ion-item no-lines>\n\n          <!-- <ion-thumbnail item-start> -->\n\n          <img item-start width="30" height="30" src="/assets/icon/happy.png">\n\n          <!-- </ion-thumbnail> -->\n\n          <p text-wrap style="color:lightgrey;">İşgüçvar İşveren</p>\n\n        </ion-item>\n\n      <ion-item no-lines text-wrap>\n\n        <ion-thumbnail item-start>\n\n        <img class="img-circle" [src]="user.resim">\n\n        </ion-thumbnail>\n\n        <p>Merhaba</p>\n\n        <h2 text-wrap>{{username}}</h2>\n\n      </ion-item>\n\n      <button menuClose ion-item no-lines (click)="goHesap()">\n\n        <ion-icon name="build"></ion-icon>\n\n        Hesabım\n\n      </button>\n\n      <button *ngIf="user.role == \'Manager\'" menuClose ion-item no-lines (click)="goFirmaHesap()">\n\n        <ion-icon name="key"></ion-icon>\n\n        Firma Hesabı\n\n      </button>\n\n      <ion-item-divider color="light"></ion-item-divider>\n\n    </div>\n\n\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        <ion-icon name="{{p.icon}}"></ion-icon>\n\n        {{p.title}}\n\n      </button>\n\n      <button menuClose ion-item no-lines (click)="presentLogout(\'Oturumunuz kapansın mı?\')">\n\n        <ion-icon name="log-out"></ion-icon>\n\n        Çıkış\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\7448\Desktop\isgucvarIsveren\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__providers_user_ser__["a" /* UserSerProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AktiviteSerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AktiviteSerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var AktiviteSerProvider = /** @class */ (function () {
    function AktiviteSerProvider(http) {
        this.http = http;
        console.log('Hello AktiviteSerProvider Provider');
    }
    AktiviteSerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AktiviteSerProvider);
    return AktiviteSerProvider;
}());

//# sourceMappingURL=aktivite-ser.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OzgecmisSerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_ser__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the OzgecmisSerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var OzgecmisSerProvider = /** @class */ (function () {
    function OzgecmisSerProvider(http, storage, authService, toastCtrl, loadingCtrl) {
        this.http = http;
        this.storage = storage;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        // url : string = window.location.origin+'/api/ozgecmis/';
        // url1 : string = window.location.origin+'/api/tools/avatar/';
        this.url = 'https://isgucvarisveren.herokuapp.com/api/ozgecmis/';
        this.url1 = 'https://isgucvarisveren.herokuapp.com/api/tools/avatar/';
        console.log('Hello OzgecmisSerProvider Provider');
    }
    OzgecmisSerProvider.prototype.getOzgecmis = function (ozgecmisId) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', this.authService.token);
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.url + 'firma/' + ozgecmisId, { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.ozgecmis = data;
                _this.storage.set('ozgecmis', data);
                console.log(JSON.stringify(data) + "data123");
                resolve(data);
            }, function (err) {
                // reject(err);
                _this.presentToast('Özgeçmiş alınamadı. Bağlantı problemi olabilir. Lütfen tekrar deneyin!');
            });
        });
    };
    OzgecmisSerProvider.prototype.getOzgecmisler = function (searchTerm, searchKayit, orderBy, skip, limit) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', this.authService.token);
        // let order = JSON.parse(orderBy);
        // console.log(JSON.stringify(order)+'order service');
        // console.log(order+'order service string');
        var uri = encodeURI(this.url + ("?term=" + searchTerm + "&kayit=" + JSON.stringify(searchKayit) + "&orderBy=" + orderBy + "&skip=" + skip + "&limit=" + limit));
        return new Promise(function (resolve, reject) {
            _this.http.get(uri, { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(JSON.stringify(data));
                resolve(data);
            }, function (err) {
                // reject(err);
                _this.presentToast('Özgeçmiş alınamadı. Bağlantı problemi olabilir. Lütfen tekrar deneyin!');
            });
        });
    };
    OzgecmisSerProvider.prototype.begenOzgecmis = function (ozgecmisId, kayit, begen) {
        var _this = this;
        this.showLoader();
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', _this.authService.token);
            _this.http.post(_this.url + begen + '/' + ozgecmisId, JSON.stringify(kayit), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                _this.loading.dismiss();
                resolve(res);
            }, function (err) {
                _this.loading.dismiss();
                _this.presentToast('Özgeçmiş güncellenemedi. Bağlantı problemi olabilir. Lütfen tekrar deneyin!');
            });
        });
    };
    OzgecmisSerProvider.prototype.updateAvatar = function (resim) {
        var _this = this;
        this.showLoader();
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', _this.authService.token);
            _this.http.post(_this.url1, { "resim": resim }, { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                _this.loading.dismiss();
                resolve(res);
            }, function (err) {
                // reject(err);
                _this.loading.dismiss();
                _this.presentToast('Resim yüklenemedi. Bağlantı problemi olabilir. Lütfen tekrar deneyin!');
            });
        });
    };
    OzgecmisSerProvider.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 4000,
            position: 'top',
            showCloseButton: true,
            closeButtonText: 'OK'
        });
        toast.onDidDismiss(function () {
            // console.log('Dismissed toast');
        });
        toast.present();
    };
    OzgecmisSerProvider.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'İşlem yapılıyor...'
        });
        this.loading.present();
    };
    OzgecmisSerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__user_ser__["a" /* UserSerProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* LoadingController */]])
    ], OzgecmisSerProvider);
    return OzgecmisSerProvider;
}());

//# sourceMappingURL=ozgecmis-ser.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IlanSerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_ser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the IlanSerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var IlanSerProvider = /** @class */ (function () {
    function IlanSerProvider(http, authService, toastCtrl, loadingCtrl, storage) {
        this.http = http;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        // url : string = window.location.origin+'/api/ilanlar/';
        this.url = 'https://isgucvarisveren.herokuapp.com/api/ilanlar/';
        // ozgecmis: any;
        this.sehirler = [
            { "sehir": "İstanbul" }, { "sehir": "Ankara" }, { "sehir": "İzmir" }, { "sehir": "Adana" }, { "sehir": "Adıyaman" }, { "sehir": "Afyonkarahisar" },
            { "sehir": "Ağrı" }, { "sehir": "Aksaray" }, { "sehir": "Amasya" }, { "sehir": "Antalya" }, { "sehir": "Ardahan" }, { "sehir": "Artvin" },
            { "sehir": "Aydın" }, { "sehir": "Balıkesir" }, { "sehir": "Bartın" }, { "sehir": "Batman" }, { "sehir": "Bayburt" }, { "sehir": "Bilecik" },
            { "sehir": "Bingöl" }, { "sehir": "Bitlis" }, { "sehir": "Bolu" }, { "sehir": "Burdur" }, { "sehir": "Bursa" }, { "sehir": "Çanakkale" }, { "sehir": "Çankırı" },
            { "sehir": "Çorum" }, { "sehir": "Denizli" }, { "sehir": "Diyarbakır" }, { "sehir": "Düzce" }, { "sehir": "Edirne" }, { "sehir": "Elazığ" },
            { "sehir": "Erzincan" }, { "sehir": "Erzurum" }, { "sehir": "Eskişehir" }, { "sehir": "Gaziantep" }, { "sehir": "Giresun" }, { "sehir": "Gümüşhane" },
            { "sehir": "Hakkari" }, { "sehir": "Hatay" }, { "sehir": "Iğdır" }, { "sehir": "Isparta" }, { "sehir": "Kahramanmaraş" }, { "sehir": "Karabük" },
            { "sehir": "Karaman" }, { "sehir": "Kars" }, { "sehir": "Kastamonu" }, { "sehir": "Kayseri" }, { "sehir": "Kırıkkale" }, { "sehir": "Kırklareli" },
            { "sehir": "Kırşehir" }, { "sehir": "Kilis" }, { "sehir": "Kocaeli" }, { "sehir": "Konya" }, { "sehir": "Kütahya" }, { "sehir": "Malatya" },
            { "sehir": "Manisa" }, { "sehir": "Mardin" }, { "sehir": "Mersin" }, { "sehir": "Muğla" }, { "sehir": "Muş" }, { "sehir": "Nevşehir" },
            { "sehir": "Niğde" }, { "sehir": "Ordu" }, { "sehir": "Osmaniye" }, { "sehir": "Rize" }, { "sehir": "Sakarya" }, { "sehir": "Samsun" },
            { "sehir": "Siirt" }, { "sehir": "Sinop" }, { "sehir": "Sivas" }, { "sehir": "Şırnak" }, { "sehir": "Tekirdağ" }, { "sehir": "Tokat" },
            { "sehir": "Trabzon" }, { "sehir": "Tunceli" }, { "sehir": "Şanlıurfa" }, { "sehir": "Uşak" }, { "sehir": "Van" }, { "sehir": "Yalova" },
            { "sehir": "Yozgat" }, { "sehir": "Zonguldak" }
        ];
        console.log('Hello IlanSerProvider Provider');
    }
    IlanSerProvider.prototype.getIlanlar = function (searchTerm, searchKayit, orderBy, skip, limit) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', this.authService.token);
        var order = JSON.parse(orderBy);
        console.log(JSON.stringify(order) + 'order service');
        console.log(order + 'order service string');
        return new Promise(function (resolve, reject) {
            var uri = encodeURI(_this.url + ("?term=" + searchTerm + "&kayit=" + JSON.stringify(searchKayit) + "&orderBy=" + JSON.stringify(order) + "&skip=" + skip + "&limit=" + limit));
            _this.http.get(uri, { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                // console.log(JSON.stringify(data));
                resolve(data);
            }, function (err) {
                // reject(err);
                _this.presentToast('İlanlar alınamadı. Bağlantı problemi olabilir. Lütfen tekrar deneyin!');
            });
        });
    };
    IlanSerProvider.prototype.updateIlan = function (kayit) {
        var _this = this;
        this.showLoader();
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', _this.authService.token);
            console.log(JSON.stringify(kayit) + 'order service add ilan');
            _this.http.put(_this.url + kayit._id, JSON.stringify(kayit), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                // this.ozgecmis = kayit;
                // this.storage.set('ozgecmis', kayit);
                console.log(JSON.stringify(res) + "updateall");
                _this.loading.dismiss();
                _this.presentToast('İlan güncellendi!');
                resolve(res);
            }, function (err) {
                // reject(err);
                _this.loading.dismiss();
                _this.presentToast('İlan güncellenemedi. Bağlantı problemi olabilir. Lütfen tekrar deneyin!');
            });
        });
    };
    IlanSerProvider.prototype.getIlan = function (ilanId) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', this.authService.token);
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.url + ilanId, { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                // this.ozgecmis = data;
                // this.storage.set('ozgecmis', data);
                // console.log(JSON.stringify(data)+"data123");
                resolve(data);
            }, function (err) {
                // reject(err);
                _this.presentToast('İlan alınamadı. Bağlantı problemi olabilir. Lütfen tekrar deneyin!');
            });
        });
    };
    IlanSerProvider.prototype.createIlan = function (ilan) {
        var _this = this;
        this.showLoader();
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', _this.authService.token);
            _this.http.post(_this.url, JSON.stringify(ilan), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                // this.currentUser = details;
                _this.loading.dismiss();
                _this.presentToast('İlan eklendi!');
                resolve(data);
            }, function (err) {
                _this.loading.dismiss();
                _this.presentToast('İlan eklenemedi. Bağlantı problemi olabilir. Lütfen tekrar deneyin!');
                reject(err);
            });
        });
    };
    IlanSerProvider.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 4000,
            position: 'top',
            showCloseButton: true,
            closeButtonText: 'OK'
        });
        toast.onDidDismiss(function () {
            // console.log('Dismissed toast');
        });
        toast.present();
    };
    IlanSerProvider.prototype.getUsers = function (id) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', this.authService.token);
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.url + 'getusers/' + id, { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(JSON.stringify(data) + "data123");
                resolve(data);
            }, function (err) {
                // reject(err);
                _this.presentToast('Kullanıcı listesi alınamadı. Bağlantı problemi olabilir. Lütfen tekrar deneyin!');
            });
        });
    };
    IlanSerProvider.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'İşlem yapılıyor...'
        });
        this.loading.present();
    };
    IlanSerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__user_ser__["a" /* UserSerProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_ser__["a" /* UserSerProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]) === "function" && _e || Object])
    ], IlanSerProvider);
    return IlanSerProvider;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=ilan-ser.js.map

/***/ })

},[368]);
//# sourceMappingURL=main.js.map