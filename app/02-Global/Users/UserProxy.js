System.register(["@angular/core", "@angular/http", 'rxjs/Rx', "ngEx"], function(exports_1, context_1) {
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
    var core_1, http_1, ngEx_1;
    var UserProxy;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (ngEx_1_1) {
                ngEx_1 = ngEx_1_1;
            }],
        execute: function() {
            UserProxy = (function () {
                function UserProxy(http) {
                    this.http = http;
                }
                UserProxy.prototype.load = function (num) {
                    if (num === void 0) { num = 3; }
                    // Promise
                    return this.http
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
                    ngEx_1.Global(),
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], UserProxy);
                return UserProxy;
            }());
            exports_1("UserProxy", UserProxy);
        }
    }
});
//# sourceMappingURL=UserProxy.js.map