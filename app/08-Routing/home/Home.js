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
var router_1 = require("@angular/router");
//import {Observable} from 'rxjs';
var Home = (function () {
    function Home(router, route) {
        this.router = router;
        this.route = route;
    }
    Home.prototype.ngOnInit = function () {
        var _this = this;
        // Observable
        this.sub = this
            .route
            .params
            .map(function (params) { return params['id']; })
            .subscribe(function (id) {
            _this.id = id;
        });
        // snapshot
        //this.route.snapshot.params.id
    };
    Home.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    Home = __decorate([
        core_1.Component({
            template: "\n<div>\n    <h3>Home Component, id: {{id}}</h3>\n</div>\n" }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute])
    ], Home);
    return Home;
}());
exports.Home = Home;
//# sourceMappingURL=Home.js.map