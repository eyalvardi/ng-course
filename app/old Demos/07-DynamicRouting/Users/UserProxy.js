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
var http_1 = require("angular2/http");
require('rxjs/Rx');
var Global_1 = require("../../ngEx/Global");
var NgServices_1 = require("../../ngEx/NgServices");
// Private Static fields:
var http;
var UserProxy = (function () {
    function UserProxy() {
    }
    //private http:Http;    
    UserProxy.prototype.load = function (num) {
        if (num === void 0) { num = 3; }
        if (!http) {
            http = NgServices_1.ngServices.getService(http_1.Http);
        }
        // Promise
        return http
            .get("http://api.randomuser.me/?results=" + num)
            .toPromise()
            .then(function (res) {
            return res.json();
        })
            .then(function (data) {
            return data.results;
        });
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
    UserProxy = __decorate([
        Global_1.Global(),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UserProxy);
    return UserProxy;
}());
exports.UserProxy = UserProxy;
//# sourceMappingURL=UserProxy.js.map