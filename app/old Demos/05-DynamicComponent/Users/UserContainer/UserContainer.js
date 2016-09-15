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
/*import {MrUser, MissUser} from "../User";*/
var UserContainer = (function () {
    function UserContainer(vcRef, cmpResolver, compiler) {
        this.vcRef = vcRef;
        this.cmpResolver = cmpResolver;
        this.compiler = compiler;
    }
    Object.defineProperty(UserContainer.prototype, "user", {
        set: function (value) {
            this._user = value;
            this.createComponent();
        },
        enumerable: true,
        configurable: true
    });
    UserContainer.prototype.createComponent = function (html) {
        var _this = this;
        var injector = core_1.ReflectiveInjector.fromResolvedProviders([], this.vcRef.parentInjector);
        /* System.import('app/05-DynamicComponent/Users/lazy/users.module').then(m=>{
         let usersModule = m.UsersModule;
         let ngm = this.compiler.compileModuleAsync(usersModule)
         .then( ngm => {*/
        var loader = new core_1.SystemJsNgModuleLoader(this.compiler, {
            factoryPathPrefix: '',
            factoryPathSuffix: '.ngfactory'
        });
        loader
            .load('app/05-DynamicComponent/Users/lazy/users.module')
            .then(function (nmf) {
            var ngmRef = nmf.create(injector);
            var cmpFactory = ngmRef.componentFactoryResolver
                .resolveComponentFactory(_this._user.name.title == 'miss' ?
                ngmRef.instance.MissUser :
                ngmRef.instance.MrUser);
            var componentRef = _this.div.createComponent(cmpFactory, 0, injector, []);
            componentRef.instance.data = _this._user;
            componentRef.changeDetectorRef.detectChanges();
            componentRef.onDestroy(function () {
                componentRef.changeDetectorRef.detach();
            });
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
        core_1.Component({
            selector: 'user-container',
            template: "\n    <h3><ng-content></ng-content></h3>\n   <!-- <fake [user]=\"_user\"></fake> -->\n   <div #div></div>\n"
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.ComponentFactoryResolver, core_1.Compiler])
    ], UserContainer);
    return UserContainer;
}());
exports.UserContainer = UserContainer;
//# sourceMappingURL=UserContainer.js.map