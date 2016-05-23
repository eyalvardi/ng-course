System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ngServices;
    return {
        setters:[],
        execute: function() {
            exports_1("ngServices", ngServices = {
                injector: null,
                get: function (token) {
                    return this.injector.get(token);
                }
            });
        }
    }
});
//# sourceMappingURL=NgServices.js.map