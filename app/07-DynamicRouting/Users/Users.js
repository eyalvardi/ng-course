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
 * Created by Eyal on 4/12/2016.
 */
var core_1 = require("angular2/core");
var router_1 = require("angular2/router");
var UserProxy_1 = require("./UserProxy");
var Global_1 = require("../../ngEx/Global");
var DynamicRouteConfigurator_1 = require("../../ngEx/DynamicRouteConfigurator");
//import {User} from "./User/User";
var proxy = new UserProxy_1.UserProxy();
var Users = (function () {
    function Users() {
    }
    Users.prototype.load = function (num) {
        var _this = this;
        proxy
            .load(num)
            .then(function (users) {
            _this.users = users;
        });
    };
    Users = __decorate([
        Global_1.Global(),
        core_1.Component({
            selector: 'users',
            //providers:[UserProxy],
            directives: [router_1.ROUTER_DIRECTIVES],
            template: "\n    Number : <input type=\"number\" #i value=\"5\">\n    <button (click)=\"load(i.value)\">Load</button>\n            \n    <hr>\n\n    <user-profile *ngFor=\"let user of users\" [source]=\"user\">\n            {{user.name | json}}\n    </user-profile>\n"
        }),
        DynamicRouteConfigurator_1.DynamicRouteConfig('app/07-DynamicRouting/Users/users.json'), 
        __metadata('design:paramtypes', [])
    ], Users);
    return Users;
}());
exports.Users = Users;
//# sourceMappingURL=Users.js.map