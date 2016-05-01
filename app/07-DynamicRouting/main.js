System.register(['angular2/platform/common', "angular2/core", 'angular2/http', "angular2/router", '../ngEx/Global', './App'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var common_1, core_1, http_1, router_1, Global_1, App_1;
    return {
        setters:[
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (Global_1_1) {
                Global_1 = Global_1_1;
            },
            function (App_1_1) {
                App_1 = App_1_1;
            }],
        execute: function() {
            //enableProdMode()
            Global_1.myBootstrap(App_1.App, [
                http_1.HTTP_PROVIDERS,
                router_1.ROUTER_PROVIDERS,
                core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy })
            ]);
        }
    }
});
//# sourceMappingURL=main.js.map