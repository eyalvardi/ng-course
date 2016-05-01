System.register(['angular2/http', '../ngEx/Global', './App', "angular2/core", "./services/MobileViewResolver", "./services/MyAppViewManager"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var http_1, Global_1, App_1, core_1, MobileViewResolver_1, MyAppViewManager_1;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Global_1_1) {
                Global_1 = Global_1_1;
            },
            function (App_1_1) {
                App_1 = App_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (MobileViewResolver_1_1) {
                MobileViewResolver_1 = MobileViewResolver_1_1;
            },
            function (MyAppViewManager_1_1) {
                MyAppViewManager_1 = MyAppViewManager_1_1;
            }],
        execute: function() {
            Global_1.myBootstrap(App_1.App, [
                http_1.HTTP_PROVIDERS,
                core_1.provide(core_1.ViewResolver, { useClass: MobileViewResolver_1.MobileViewResolver }),
                core_1.provide(core_1.AppViewManager, { useClass: MyAppViewManager_1.MyAppViewManager })
            ]);
        }
    }
});
//# sourceMappingURL=main.js.map