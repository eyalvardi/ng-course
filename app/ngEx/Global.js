System.register(['angular2/platform/browser', 'angular2/src/facade/lang', "angular2/core", "angular2/src/core/reflection/reflection_capabilities", 'angular2/src/platform/browser_common', "./NgServices"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, lang_1, core_1, reflection_capabilities_1, browser_common_1, NgServices_1;
    var files, providers, isDebug;
    function addPipe(pipe, metadata) {
        providers.push(core_1.provide(core_1.PLATFORM_PIPES, {
            useValue: [pipe],
            multi: true
        }));
    }
    function addDirective(directive, metadata) {
        providers.push(core_1.provide(core_1.PLATFORM_DIRECTIVES, {
            useValue: [directive],
            multi: true
        }));
    }
    function addComponent(component, metadata) {
        if (isDebug) {
            addDebugStyles(metadata, component);
        }
        providers.push(core_1.provide(core_1.PLATFORM_DIRECTIVES, {
            useValue: [component],
            multi: true
        }));
    }
    function addService(service, metadata) {
        providers.push(service);
    }
    function addDebugStyles(metadata, target) {
        if (!metadata.styles) {
            metadata.styles = [];
        }
        metadata.styles.push("\n        :host{\n            display: block;\n            border: 3px solid red;\n        }\n    ");
        Reflect.defineMetadata('annotations', [metadata], target);
    }
    function debugMode() {
        isDebug = true;
    }
    exports_1("debugMode", debugMode);
    function Global(file) {
        if (file) {
            files.push(file);
        }
        return function (target) {
            Reflect.getMetadata('annotations', target)
                .forEach(function (a) {
                if (a.constructor.name === 'InjectableMetadata') {
                    addService(target, a);
                }
                else if (a.constructor.name === 'PipeMetadata') {
                    addPipe(target, a);
                }
                else if (a.constructor.name === 'DirectiveMetadata') {
                    addDirective(target, a);
                }
                else if (a.constructor.name === 'ComponentMetadata') {
                    addComponent(target, a);
                }
            });
            return target;
        };
    }
    exports_1("Global", Global);
    function myBootstrap(type, prvs) {
        if (prvs === void 0) { prvs = []; }
        return browser_1.bootstrap(type, providers.concat(prvs))
            .then(function (cmpRef) {
            NgServices_1.ngServices.injector = cmpRef.injector._view.parentInjector;
        });
    }
    exports_1("myBootstrap", myBootstrap);
    function myBootstrap2(type, prvs) {
        if (prvs === void 0) { prvs = []; }
        var promises = [];
        files.forEach(function (file) {
            promises.push(System.import(file));
        });
        return Promise.all(promises)
            .then(function () {
            return browser_1.bootstrap(type, providers.concat(prvs));
        })
            .then(function (cmpRef) {
            NgServices_1.ngServices.injector = cmpRef.injector.parent;
        });
    }
    exports_1("myBootstrap2", myBootstrap2);
    function bootstrap(appComponentUrl, customProviders) {
        //var appComponentType;
        core_1.reflector.reflectionCapabilities = new reflection_capabilities_1.ReflectionCapabilities();
        var appProviders = lang_1.isPresent(customProviders) ?
            [browser_1.BROWSER_APP_PROVIDERS, customProviders] :
            browser_1.BROWSER_APP_PROVIDERS;
        var application = core_1.platform(browser_common_1.BROWSER_PROVIDERS).application(appProviders);
        NgServices_1.ngServices.injector = application.injector;
        return System.import(appComponentUrl)
            .then(function (m) { return m['App']; })
            .then(function (appComponentType) {
            return application
                .bootstrap(appComponentType, providers);
        });
        //return app.bootstrap(appComponentType);
    }
    exports_1("bootstrap", bootstrap);
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (reflection_capabilities_1_1) {
                reflection_capabilities_1 = reflection_capabilities_1_1;
            },
            function (browser_common_1_1) {
                browser_common_1 = browser_common_1_1;
            },
            function (NgServices_1_1) {
                NgServices_1 = NgServices_1_1;
            }],
        execute: function() {
            exports_1("files", files = []);
            exports_1("providers", providers = []);
            isDebug = false;
        }
    }
});
//# sourceMappingURL=Global.js.map