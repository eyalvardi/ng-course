System.register(["@angular/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    function getComponentMetadata(component) {
        var result;
        Reflect.getMetadata('annotations', component)
            .forEach(function (metadata) {
            if (metadata.constructor.name === 'ComponentMetadata') {
                result = metadata;
            }
        });
        return result;
    }
    exports_1("getComponentMetadata", getComponentMetadata);
    function ngExComponent(metadata, component) {
        var merageMetadata = component ?
            Object.assign(getComponentMetadata(component), metadata) :
            metadata;
        return core_1.Component(merageMetadata);
    }
    exports_1("ngExComponent", ngExComponent);
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=metadataUtils.js.map