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
var http_1 = require("@angular/http");
require('rxjs/add/operator/toPromise');
var UserProxy = (function () {
    function UserProxy(http) {
        this.http = http;
        this.url = 'app/users'; //'http://api.randomuser.me/?results=${num}';
    }
    UserProxy.prototype.load = function (num) {
        if (num === void 0) { num = 3; }
        // Promise
        return this.http
            .get(this.url)
            .toPromise()
            .then(function (res) { return res.json(); })
            .then(function (res) { return res.data; })
            .catch(this.handleError);
        /*.then((data)=>{
            return data.results;
        });*/
        // Obsr...
        /*
         return this.http
         .get(`http://api.randomuser.me/?results=${num}`)
         .map((res)=>{
         return res.json();
         })
         .map((data)=>{
         return data.results;
         });
         */
    };
    UserProxy.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    UserProxy = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserProxy);
    return UserProxy;
}());
exports.UserProxy = UserProxy;
//# sourceMappingURL=UserProxy.js.map