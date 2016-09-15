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
 * Created by Eyal Vardi on 5/03/2016.
 */
var core_1 = require("@angular/core");
var UserProxy_1 = require("./UserProxy");
var Users = (function () {
    function Users() {
    }
    Users.prototype.load = function (num) {
        var _this = this;
        UserProxy_1.sUserProxy
            .load(num)
            .then(function (users) {
            _this.users = users;
        });
    };
    Users = __decorate([
        core_1.Component({
            selector: 'users',
            //providers:[UserProxy],
            //directives: [User],
            template: "\n    Number : <input type=\"number\" #i value=\"5\">\n    <button (click)=\"load(i.value)\">Load</button>\n    <hr>\n\n    <user-profile *ngFor=\"let user of users\" [source]=\"user\">\n            {{user.name | json}}\n    </user-profile>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], Users);
    return Users;
}());
exports.Users = Users;
//# sourceMappingURL=Users.js.map