"use strict";
var compiler_1 = require("@angular/compiler");
var http_1 = require('@angular/http');
var ngEx_1 = require('ngEx');
var App_1 = require('./App');
var MobileViewResolver_1 = require("./services/MobileViewResolver");
ngEx_1.myBootstrap(App_1.App, [
    http_1.HTTP_PROVIDERS,
    { provide: compiler_1.ViewResolver, useClass: MobileViewResolver_1.MobileViewResolver }
]);
//# sourceMappingURL=main.js.map