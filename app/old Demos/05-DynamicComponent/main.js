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
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var UserProxy_1 = require("./Users/UserProxy");
var link_to_code_component_1 = require("../share/link-to-code.component");
var App_1 = require('./App');
var UserContainer_1 = require("./Users/UserContainer/UserContainer");
/*import {MissUser, MrUser} from "./Users/User";*/
var Users_1 = require("./Users/Users");
//enableProdMode();
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                App_1.App,
                Users_1.Users,
                UserContainer_1.UserContainer,
                link_to_code_component_1.LinkToCodeComponent
            ],
            /*entryComponents:[MissUser,MrUser],*/
            providers: [
                UserProxy_1.UserProxy,
                core_1.SystemJsNgModuleLoader
            ],
            bootstrap: [App_1.App],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
platform_browser_dynamic_1.platformBrowserDynamic()
    .bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map