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
var compiler_1 = require("@angular/compiler");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var App_1 = require('./App');
var User_1 = require("./Users/User/User");
var UserProxy_1 = require("./Users/UserProxy");
var Users_1 = require("./Users/Users");
var share_module_1 = require("../share/share.module");
var MobileViewResolver_1 = require("./services/MobileViewResolver");
var MyNgModuleResolver_1 = require("./services/MyNgModuleResolver");
/*import {MyCompileMetadataResolver} from "./services/MyCompileMetadataResolver";*/
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [App_1.App, User_1.User, Users_1.Users],
            providers: [
                UserProxy_1.UserProxy,
                /*MobileViewResolver,*/
                /* MyCompileMetadataResolver,*/
                {
                    provide: compiler_1.DirectiveResolver,
                    useClass: MobileViewResolver_1.MobileViewResolver
                },
                {
                    provide: compiler_1.NgModuleResolver,
                    useClass: MyNgModuleResolver_1.MyNgModuleResolver
                },
                /*{
                    provide : CompileMetadataResolver,
                    useExisting: MyCompileMetadataResolver
                },*/
                {
                    provide: core_1.COMPILER_OPTIONS,
                    useValue: {
                        providers: [
                            MobileViewResolver_1.MobileViewResolver, { provide: compiler_1.DirectiveResolver, useExisting: MobileViewResolver_1.MobileViewResolver }
                        ]
                    },
                    multi: true
                },
            ],
            bootstrap: [App_1.App],
            imports: [
                http_1.HttpModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                share_module_1.ShareModule
            ],
            exports: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
platform_browser_dynamic_1.platformBrowserDynamic()
    .bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map