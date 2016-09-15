"use strict";
var http_1 = require("@angular/http");
var NgServices_1 = require("../../share/NgServices");
require('rxjs/add/operator/toPromise');
// Private Static fields:
var http;
/*@Injectable()*/
var UserProxy = (function () {
    function UserProxy() {
    }
    //private http:Http;
    UserProxy.prototype.ngExOnInit = function () {
        if (!http) {
            http = NgServices_1.ngServices.get(http_1.Http);
        }
    };
    UserProxy.prototype.load = function (num) {
        if (num === void 0) { num = 3; }
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
    };
    return UserProxy;
}());
exports.UserProxy = UserProxy;
exports.sUserProxy = new UserProxy();
NgServices_1.services.push(exports.sUserProxy);
//# sourceMappingURL=UserProxy.js.map