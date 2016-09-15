"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var MrUser = (function () {
    function MrUser(render, elmRef, zone) {
        this.render = render;
        this.elmRef = elmRef;
        this.zone = zone;
        this.counter = 0;
    }
    Object.defineProperty(MrUser.prototype, "data", {
        get: function () { return this._data; },
        set: function (value) {
            this._data = value;
        },
        enumerable: true,
        configurable: true
    });
    /*constructor(private parent:UserContainer){
        setTimeout(()=>{
            this.data = parent._user;
            console.log(this.data);
        },7000);
    }*/
    MrUser.prototype.ngDoCheck = function () {
        var _this = this;
        if (!this.render)
            return;
        this.render.setElementStyle(this.elmRef.nativeElement, 'border', '2px solid red');
        this.zone.runOutsideAngular(function () {
            setTimeout(function () {
                _this.render.setElementStyle(_this.elmRef.nativeElement, 'border', '0');
            }, 700);
        });
    };
    __decorate([
        core_1.Input('user'), 
        __metadata('design:type', Object)
    ], MrUser.prototype, "data", null);
    MrUser = __decorate([
        core_1.Component({
            selector: 'mr-user',
            moduleId: module.id,
            styles: ["\n        :host{\n            display: block;\n        }\n    "],
            templateUrl: 'mruser.html',
            styleUrls: ['user.css']
        }), 
        __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef, core_1.NgZone])
    ], MrUser);
    return MrUser;
}());
exports.MrUser = MrUser;
var MissUser = (function () {
    function MissUser() {
    }
    Object.defineProperty(MissUser.prototype, "data", {
        get: function () { return this._data; },
        set: function (value) {
            this._data = value;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input('user'), 
        __metadata('design:type', Object)
    ], MissUser.prototype, "data", null);
    MissUser = __decorate([
        core_1.Component({
            selector: 'miss-user',
            moduleId: module.id,
            styles: ["\n        :host{\n            display: block;\n        }\n    "],
            templateUrl: 'missuser.html',
            styleUrls: ['user.css']
        }), 
        __metadata('design:paramtypes', [])
    ], MissUser);
    return MissUser;
}());
exports.MissUser = MissUser;
//# sourceMappingURL=User.js.map