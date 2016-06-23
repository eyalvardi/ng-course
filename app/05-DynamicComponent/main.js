"use strict";
var http_1 = require('@angular/http');
var ngEx_1 = require('ngEx');
var App_1 = require('./App');
var core_1 = require("@angular/core");
core_1.enableProdMode();
ngEx_1.myBootstrap(App_1.App, [http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=main.js.map