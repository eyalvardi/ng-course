System.register(['@angular/core', '@angular/http', './App', "ngEx"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, http_1, App_1, ngEx_1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (App_1_1) {
                App_1 = App_1_1;
            },
            function (ngEx_1_1) {
                ngEx_1 = ngEx_1_1;
            }],
        execute: function() {
            core_1.enableProdMode();
            ngEx_1.myBootstrap(App_1.App, [http_1.HTTP_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=main.js.map