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
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var App_1 = require('./App');
var OfflineData_service_1 = require("./OfflineData.service");
var platform_browser_1 = require("@angular/platform-browser");
var UserProxy_1 = require("./Users/UserProxy");
var Users_1 = require("./Users/Users");
var User_1 = require("./Users/User/User");
var link_to_code_component_1 = require("../share/link-to-code.component");
//enableProdMode();
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [App_1.App, Users_1.Users, User_1.User, link_to_code_component_1.LinkToCodeComponent],
            providers: [OfflineData_service_1.HTTP_IN_MEMORY, UserProxy_1.UserProxy],
            bootstrap: [App_1.App],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
platform_browser_dynamic_1.platformBrowserDynamic()
    .bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map