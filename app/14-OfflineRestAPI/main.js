"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var App_1 = require('./App');
var OfflineData_service_1 = require("./OfflineData.service");
core_1.enableProdMode();
platform_browser_dynamic_1.bootstrap(App_1.App, [
    //HTTP_PROVIDERS
    OfflineData_service_1.HTTP_IN_MEMORY
]);
//# sourceMappingURL=main.js.map