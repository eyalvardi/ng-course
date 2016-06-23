"use strict";
/**
 * Created by Eyal Vardi on 5/03/2016.
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var App_1 = require('./App');
var ngEx_1 = require("ngEx");
require('./PipeDemo');
core_1.enableProdMode();
console.log = function () { };
ngEx_1.myBootstrap(App_1.App, [http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=main.js.map