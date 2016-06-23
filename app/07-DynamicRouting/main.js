"use strict";
/**
 * Created by Eyal on 4/12/2016.
 */
//import {bootstrap} from 'angular2/platform/browser';
var common_1 = require('angular2/platform/common');
var core_1 = require("angular2/core");
var http_1 = require('angular2/http');
var router_1 = require("angular2/router");
var Global_1 = require('../ngEx/Global');
var App_1 = require('./App');
//enableProdMode()
Global_1.myBootstrap(App_1.App, [
    http_1.HTTP_PROVIDERS,
    router_1.ROUTER_PROVIDERS,
    core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy })
]);
//# sourceMappingURL=main.js.map