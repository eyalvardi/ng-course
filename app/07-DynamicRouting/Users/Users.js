System.register(["angular2/core", "angular2/router", "./UserProxy", "../../ngEx/Global", "../../ngEx/DynamicRouteConfigurator"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, UserProxy_1, Global_1, DynamicRouteConfigurator_1;
    var proxy, Users;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (UserProxy_1_1) {
                UserProxy_1 = UserProxy_1_1;
            },
            function (Global_1_1) {
                Global_1 = Global_1_1;
            },
            function (DynamicRouteConfigurator_1_1) {
                DynamicRouteConfigurator_1 = DynamicRouteConfigurator_1_1;
            }],
        execute: function() {
            //import {User} from "./User/User";
            proxy = new UserProxy_1.UserProxy();
            Users = (function () {
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
            exports_1("Users", Users);
        }
    }
});
//# sourceMappingURL=Users.js.map