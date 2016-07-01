"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var App_1 = require('./App');
core_1.enableProdMode();
platform_browser_dynamic_1.bootstrap(App_1.App, [http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=main.js.map