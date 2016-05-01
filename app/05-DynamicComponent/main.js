System.register(['angular2/http', '../ngEx/Global', './App'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var http_1, Global_1, App_1;
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
            }],
        execute: function() {
            Global_1.myBootstrap(App_1.App, [http_1.HTTP_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=main.js.map