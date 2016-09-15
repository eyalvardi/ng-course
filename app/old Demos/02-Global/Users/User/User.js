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
var common_1 = require('@angular/common');
var ngEx_1 = require("ngEx");
//declare var __moduleName:string;
var User = (function () {
    function User() {
        this.isEdit = false;
        this.myForm = new common_1.ControlGroup({
            "fName": new common_1.Control(''),
            "lName": new common_1.Control('')
        });
    }
    User.prototype.ngOnInit = function () {
        this.myForm
            .valueChanges
            .subscribe(function (f) {
            console.log(f);
        });
    };
    Object.defineProperty(User.prototype, "fName", {
        get: function () {
            return this.user.name.first;
        },
        set: function (value) {
            this.user.name.first = value;
        },
        enumerable: true,
        configurable: true
    });
    /*update(value){
        console.log(value);
        this.fName = value.fname;
        this.user.name.last = value.lname;
    }*/
    User.prototype.update = function () {
        this.fName = this.myForm.fName.value;
        this.user.name.last = this.myForm.fName.value;
    };
    __decorate([
        core_1.Input('source'), 
        __metadata('design:type', Object)
    ], User.prototype, "user", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], User.prototype, "isEdit", void 0);
    User = __decorate([
        ngEx_1.Global(),
        core_1.Component({
            selector: 'user-profile',
            moduleId: module.id,
            styleUrls: ['user.css', 'validations.css'],
            templateUrl: 'user.html',
            exportAs: 'user'
        }), 
        __metadata('design:paramtypes', [])
    ], User);
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map