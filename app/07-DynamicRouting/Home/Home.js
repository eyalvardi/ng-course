System.register(["angular2/core", "angular2/router", "../../ngEx/DynamicRouteConfigurator"], function(exports_1, context_1) {
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
    var core_1, router_1, DynamicRouteConfigurator_1;
    var Home;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (DynamicRouteConfigurator_1_1) {
                DynamicRouteConfigurator_1 = DynamicRouteConfigurator_1_1;
            }],
        execute: function() {
            Home = (function () {
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
            exports_1("Home", Home);
        }
    }
});
//# sourceMappingURL=Home.js.map