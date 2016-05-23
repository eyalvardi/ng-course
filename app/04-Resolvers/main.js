System.register(["@angular/core", "@angular/compiler", '@angular/http', 'ngEx', './App', "./services/MobileViewResolver"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, compiler_1, http_1, ngEx_1, App_1, MobileViewResolver_1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (compiler_1_1) {
                compiler_1 = compiler_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (ngEx_1_1) {
                ngEx_1 = ngEx_1_1;
            },
            function (App_1_1) {
                App_1 = App_1_1;
            },
            function (MobileViewResolver_1_1) {
                MobileViewResolver_1 = MobileViewResolver_1_1;
            }],
        execute: function() {
            ngEx_1.myBootstrap(App_1.App, [
                http_1.HTTP_PROVIDERS,
                core_1.provide(compiler_1.ViewResolver, { useClass: MobileViewResolver_1.MobileViewResolver })
            ]);
        }
    }
});
//# sourceMappingURL=main.js.map