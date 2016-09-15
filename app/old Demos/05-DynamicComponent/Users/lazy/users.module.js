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
/**
 * Created by Eyal on 9/2/2016.
 */
var core_1 = require("@angular/core");
var User_1 = require("./User");
var UsersModule = (function () {
    function UsersModule() {
        this.MissUser = User_1.MissUser;
        this.MrUser = User_1.MrUser;
    }
    UsersModule = __decorate([
        core_1.NgModule({
            declarations: [User_1.MissUser, User_1.MrUser],
            entryComponents: [User_1.MissUser, User_1.MrUser]
        }), 
        __metadata('design:paramtypes', [])
    ], UsersModule);
    return UsersModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UsersModule;
//# sourceMappingURL=users.module.js.map