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
 * Created by Eyal on 4/23/2016.
 */
var core_1 = require("angular2/core");
var router_1 = require("angular2/router");
var DynamicRouteConfigurator_1 = require("../../ngEx/DynamicRouteConfigurator");
var Home = (function () {
    //appRoutes: string[][] = null;
    function Home() {
    }
    Object.defineProperty(Home.prototype, "routes", {
        get: function () {
            return Home.routes.map(function (route) {
                return { path: [("./" + route.name)], name: route.name };
            });
        },
        enumerable: true,
        configurable: true
    });
    Home = __decorate([
        core_1.Component({
            directives: [router_1.ROUTER_DIRECTIVES],
            template: "\n<div>\n    <h1>Home Component</h1>\n    <app-nav [routes]=\"routes\"></app-nav>\n    <hr>\n    <router-outlet></router-outlet>\n</div>\n"
        }),
        DynamicRouteConfigurator_1.DynamicRouteConfig('app/07-DynamicRouting/Home/home.json'), 
        __metadata('design:paramtypes', [])
    ], Home);
    return Home;
}());
exports.Home = Home;
//# sourceMappingURL=Home.js.map