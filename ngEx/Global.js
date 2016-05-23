System.register(['@angular/platform-browser-dynamic', "@angular/core", "./NgServices"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, core_1, NgServices_1;
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
        return platform_browser_dynamic_1.bootstrap(type, providers.concat(prvs))
            .then(function (cmpRef) {
            NgServices_1.ngServices.injector = cmpRef.injector._view.parentInjector;
        });
    }
    exports_1("myBootstrap", myBootstrap);
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
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
/*
export function myBootstrap2(type,prvs:any[] = []){
    var promises = [];
    files.forEach((file)=>{
        promises.push(System.import(file));
    });
    return Promise.all(promises)
        .then(()=>{
            return bp(type,providers.concat(prvs))
        })
        .then((cmpRef)=>{
            ngServices.injector = cmpRef.injector.parent;
        });
}
*/
/*
export function bootstrap(appComponentUrl: string,customProviders?: Array<any>): Promise<ComponentRef> {
    //var appComponentType;
    reflector.reflectionCapabilities = new ReflectionCapabilities();
    let appProviders =
        isPresent(customProviders) ?
            [BROWSER_APP_PROVIDERS, customProviders] :
            BROWSER_APP_PROVIDERS;
    
    var application = platform(BROWSER_PROVIDERS).application(appProviders);

    ngServices.injector = application.injector;

    return System.import(appComponentUrl)
                .then(m=> m['App'] )
                .then((appComponentType)=>
                    application
                        .bootstrap(appComponentType,providers));

    //return app.bootstrap(appComponentType);
}
*/
//# sourceMappingURL=Global.js.map