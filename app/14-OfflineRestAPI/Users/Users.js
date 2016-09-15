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
var UserProxy_1 = require("./UserProxy");
var Users = (function () {
    function Users(proxy) {
        this.proxy = proxy;
        this.users = [];
    }
    Users.prototype.load = function (num) {
        var _this = this;
        this.proxy
            .load(num)
            .then(function (users) {
            var length = users.length - 1;
            var self = _this;
            // for animation
            setTimeout(function fn() {
                self.users.push(users[length--]);
                if (length > 0) {
                    setTimeout(fn, 500);
                }
            }, 500);
        });
    };
    Users = __decorate([
        core_1.Component({
            selector: 'users',
            providers: [UserProxy_1.UserProxy],
            //encapsulation: ViewEncapsulation.Emulated
            styles: ["\n        ul {\n  list-style-type: none;\n  padding: 0;\n}\n\nli {\n  display: block;\n  width: 120px;\n  line-height: 50px;\n  padding: 0 10px;\n  box-sizing: border-box;\n  background-color: #eee;\n  border-radius: 4px;\n  margin: 10px;\n  cursor: pointer;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.active {\n  background-color: #cfd8dc;\n  transform: scale(1.1);\n}\n.inactive {\n  background-color: #eee;\n  transform: scale(1);\n}\n    "],
            animations: [
                core_1.trigger('flyInOut', [
                    core_1.state('in', core_1.style({ transform: 'translateX(0)' })),
                    core_1.transition('void => *', [
                        core_1.style({ transform: 'translateX(-100%)' }),
                        core_1.animate(200)
                    ]),
                    core_1.transition('* => void', [
                        core_1.animate(200, core_1.style({ transform: 'translateX(100%)' }))
                    ])
                ])
            ],
            template: "\n    Number : <input type=\"number\" #i value=\"5\">\n    <button (click)=\"load(i.value)\">Load</button>\n    <hr>\n\n    <user-profile        \n        *ngFor=\"let user of users\" [source]=\"user\">\n            {{user.name | json}}\n    </user-profile>\n" }), 
        __metadata('design:paramtypes', [UserProxy_1.UserProxy])
    ], Users);
    return Users;
}());
exports.Users = Users;
//# sourceMappingURL=Users.js.map