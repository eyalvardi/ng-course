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
 * Created by Eyal on 4/12/2016.
 */
var core_1 = require("angular2/core");
var router_1 = require("angular2/router");
require('rxjs/Rx');
require("./Users/User/User");
require('./AppNav');
var DynamicRouteConfigurator_1 = require('../ngEx/DynamicRouteConfigurator');
var App = (function () {
    function App(drf) {
        this.drf = drf;
    }
    App.prototype.ngOnInit = function () {
        var _this = this;
        this.appRoutes = this.getAppRoutes();
        this.drf
            .loadRouteConfig(App)
            .then(function () {
            _this.appRoutes = _this.getAppRoutes();
        });
    };
    App.prototype.getAppRoutes = function () {
        return this.drf
            .getRoutes(App)
            .configs.map(function (route) {
            return { path: [("/" + route.name)], name: route.name };
        });
    };
    App = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [router_1.ROUTER_DIRECTIVES],
            template: "\n    <h1>Hello World</h1>\n    <app-nav [routes]=\"appRoutes\"></app-nav>    \n    <hr>\n    <router-outlet></router-outlet>\n"
        }),
        DynamicRouteConfigurator_1.DynamicRouteConfig('app/07-DynamicRouting/router-config.json'),
        router_1.RouteConfig([]), 
        __metadata('design:paramtypes', [(typeof (_a = typeof DynamicRouteConfigurator_1.DynamicRouteConfigurator !== 'undefined' && DynamicRouteConfigurator_1.DynamicRouteConfigurator) === 'function' && _a) || Object])
    ], App);
    return App;
    var _a;
}());
exports.App = App;
//# sourceMappingURL=App.js.map