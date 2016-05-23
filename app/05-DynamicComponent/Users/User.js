System.register(["@angular/core", "ngEx", "./UserContainer/UserContainer"], function(exports_1, context_1) {
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
    var core_1, ngEx_1, UserContainer_1;
    var MrUser, MissUser, Test;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ngEx_1_1) {
                ngEx_1 = ngEx_1_1;
            },
            function (UserContainer_1_1) {
                UserContainer_1 = UserContainer_1_1;
            }],
        execute: function() {
            MrUser = (function () {
                function MrUser(parent) {
                    var _this = this;
                    this.parent = parent;
                    this.counter = 0;
                    setTimeout(function () {
                        _this.data = parent._user;
                        console.log(_this.data);
                    }, 5000);
                }
                MrUser = __decorate([
                    ngEx_1.Global(),
                    core_1.Component({
                        selector: 'mr-user',
                        moduleId: __moduleName,
                        template: "+++{{data|json}}+++",
                        //templateUrl:'mruser.html',
                        styleUrls: ['user.css']
                    }), 
                    __metadata('design:paramtypes', [UserContainer_1.UserContainer])
                ], MrUser);
                return MrUser;
            }());
            exports_1("MrUser", MrUser);
            MissUser = (function () {
                function MissUser(parent) {
                    var _this = this;
                    this.parent = parent;
                    setTimeout(function () {
                        _this.data = parent._user;
                        console.log(_this.data);
                    }, 5000);
                }
                MissUser = __decorate([
                    ngEx_1.Global(),
                    core_1.Component({
                        selector: 'miss-user',
                        moduleId: __moduleName,
                        template: "+++ {{data|json}} +++",
                        //templateUrl:'missuser.html',
                        styleUrls: ['user.css']
                    }), 
                    __metadata('design:paramtypes', [UserContainer_1.UserContainer])
                ], MissUser);
                return MissUser;
            }());
            exports_1("MissUser", MissUser);
            Test = (function () {
                function Test() {
                }
                Object.defineProperty(Test.prototype, "data", {
                    get: function () {
                        console.log("get _data: " + this._data);
                        return this._data;
                    },
                    set: function (value) {
                        console.log("set _data: " + value);
                        this._data = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], Test.prototype, "data", null);
                Test = __decorate([
                    ngEx_1.Global(),
                    core_1.Component({
                        selector: 'test',
                        template: "\n    <div>Test: {{_data}}</div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], Test);
                return Test;
            }());
            exports_1("Test", Test);
        }
    }
});
//# sourceMappingURL=User.js.map