"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var forms_1 = require('@angular/forms');
var app_component_1 = require("./app.component");
var http_1 = require("@angular/http");
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    http_1.HTTP_PROVIDERS,
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms()
]);
//# sourceMappingURL=main.js.map