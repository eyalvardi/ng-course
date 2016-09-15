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
var core_1 = require('@angular/core');
var App_1 = require('./App');
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var Clock_1 = require("./Clock");
var PipeDemo_1 = require("./PipeDemo");
var PushDemo_1 = require("./PushDemo");
var timer_cmp_1 = require("./timer.cmp");
var do_check_cmp_1 = require("./do-check.cmp");
var DefaultDemo_1 = require("./DefaultDemo");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var share_module_1 = require("../share/share.module");
var SequenceDiagramsService_1 = require("../../ngEx/SequenceDiagramsService");
console.log = function () { };
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                App_1.App,
                Clock_1.Clock,
                PipeDemo_1.PipesDemo,
                PipeDemo_1.MyPurePipe,
                PipeDemo_1.MyImpurePipe,
                PipeDemo_1.SumRandomPipe,
                DefaultDemo_1.DefaultDemo,
                PushDemo_1.PushDemo,
                timer_cmp_1.TimerComp,
                do_check_cmp_1.DoCheckComp,
                SequenceDiagramsService_1.SequenceDiagram
            ],
            providers: [],
            bootstrap: [App_1.App],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                share_module_1.ShareModule
            ],
            exports: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
core_1.enableProdMode();
platform_browser_dynamic_1.platformBrowserDynamic()
    .bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map