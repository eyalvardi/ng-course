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
var ngEx_1 = require("ngEx");
var DynamicLoad_1 = require('ngEx/DynamicLoad');
var User_1 = require("../User");
var UserContainer = (function () {
    function UserContainer(vcRef, cmpResolver) {
        this.vcRef = vcRef;
        this.cmpResolver = cmpResolver;
    }
    Object.defineProperty(UserContainer.prototype, "user", {
        set: function (value) {
            this._user = value;
            this.createComponent(value.name.title == 'miss' ?
                "<miss-user [user]=\"data\"></miss-user>" :
                "<mr-user   [user]=\"data\"></mr-user>\n        ");
        },
        enumerable: true,
        configurable: true
    });
    UserContainer.prototype.createComponent = function (html) {
        var _this = this;
        var cmpType = DynamicLoad_1.compileToComponent(html, ['data:user'], [User_1.MrUser, User_1.MissUser]);
        this.cmpResolver.resolveComponent(cmpType)
            .then(function (cmpFactory) {
            console.log("Create Fake");
            var injector = core_1.ReflectiveInjector.fromResolvedProviders([], _this.vcRef.parentInjector);
            // option 1
            var componentRef = _this.div.createComponent(cmpFactory, 0, injector, []);
            componentRef.instance.data = _this._user;
            componentRef.changeDetectorRef.detectChanges();
            componentRef.onDestroy(function () {
                componentRef.changeDetectorRef.detach();
            });
            // option 2
            //cmpFactory
            //    .create(this.injector, null, cmpFactory.selector);
            //.changeDetectorRef
            //.reattach();
        });
    };
    __decorate([
        core_1.ViewChild('div', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', Object)
    ], UserContainer.prototype, "div", void 0);
    __decorate([
        core_1.Input('source'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], UserContainer.prototype, "user", null);
    UserContainer = __decorate([
        ngEx_1.Global(),
        core_1.Component({
            selector: 'user-container',
            template: "\n    <h3><ng-content></ng-content></h3>\n   <!-- <fake [user]=\"_user\"></fake> -->\n   <div #div></div>\n"
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.ComponentResolver])
    ], UserContainer);
    return UserContainer;
}());
exports.UserContainer = UserContainer;
//# sourceMappingURL=UserContainer.js.map