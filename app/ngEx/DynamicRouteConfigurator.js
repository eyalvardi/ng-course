System.register(["angular2/core", 'angular2/src/core/util/decorators', "angular2/router", "../ngEx/Global", "angular2/http"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, decorators_1, router_1, Global_1, http_1;
    var DynamicRouteConfigurator, DynamicRouteConfigMetadata, DynamicRouteConfig;
    function loader(path, component, drc) {
        return function () { return System.import(path)
            .then(function (m) { return m[component]; })
            .then(function (component) {
            var meta = readDynamicRouteConfigMetadata(component);
            if (meta && meta.url) {
                return drc.internalLoadRouteConfig(component, meta.url)
                    .then(function () {
                    component.routes = drc.getRoutes(component).configs;
                    return component;
                });
            }
            else {
                return component;
            }
        }); };
    }
    exports_1("loader", loader);
    function readDynamicRouteConfigMetadata(component) {
        return Reflect.getMetadata('annotations', component)
            .filter(function (item) { return item.constructor.name === 'DynamicRouteConfigMetadata'; })
            .pop();
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (decorators_1_1) {
                decorators_1 = decorators_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (Global_1_1) {
                Global_1 = Global_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            DynamicRouteConfigurator = (function () {
                function DynamicRouteConfigurator(registry, http) {
                    this.registry = registry;
                    this.http = http;
                }
                // Gets the list of registered with @RouteConfig routes
                // associated with given `component`
                DynamicRouteConfigurator.prototype.getRoutes = function (component) {
                    return Reflect.getMetadata('annotations', component)
                        .filter(function (a) {
                        return a.constructor.name === 'RouteConfig';
                    }).pop();
                };
                // Updates the metadata added by @RouteConfig associated
                // with given `component`
                DynamicRouteConfigurator.prototype.updateRouteConfig = function (component, routeConfig) {
                    var annotations = Reflect.getMetadata('annotations', component);
                    var routeConfigIndex = -1;
                    for (var i = 0; i < annotations.length; i += 1) {
                        if (annotations[i].constructor.name === 'RouteConfig') {
                            routeConfigIndex = i;
                            break;
                        }
                    }
                    if (routeConfigIndex < 0) {
                        //throw new Error('No route metadata attached to the component');
                        annotations.push(routeConfig);
                    }
                    else {
                        annotations[routeConfigIndex] = routeConfig;
                    }
                    Reflect.defineMetadata('annotations', annotations, component);
                };
                // Adds additional `route` to given `component`
                DynamicRouteConfigurator.prototype.addRoute = function (component, route) {
                    var routeConfig = this.getRoutes(component);
                    if (routeConfig) {
                        routeConfig.configs.push(route);
                    }
                    else {
                        routeConfig = new router_1.RouteConfig([route]);
                    }
                    this.updateRouteConfig(component, routeConfig);
                    this.registry.config(component, route);
                };
                DynamicRouteConfigurator.prototype.loadRouteConfig = function (component, url) {
                    url = url || readDynamicRouteConfigMetadata(component).url;
                    return this.internalLoadRouteConfig(component, url);
                };
                DynamicRouteConfigurator.prototype.internalLoadRouteConfig = function (component, url) {
                    var _this = this;
                    return this.http.get(url)
                        .map(function (resp) { return resp.json(); })
                        .map(function (routes) {
                        routes.map(function (route) {
                            route.loader = loader(route.file, route.component, _this);
                            _this.addRoute(component, {
                                path: route.path,
                                name: route.name,
                                loader: route.loader,
                                useAsDefault: route.useAsDefault || false
                            });
                        });
                    })
                        .toPromise();
                };
                DynamicRouteConfigurator = __decorate([
                    Global_1.Global(),
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [router_1.RouteRegistry, http_1.Http])
                ], DynamicRouteConfigurator);
                return DynamicRouteConfigurator;
            }());
            exports_1("DynamicRouteConfigurator", DynamicRouteConfigurator);
            //////////////////////////////////////////
            //      Annotation & Decorator         //
            /////////////////////////////////////////
            DynamicRouteConfigMetadata = (function () {
                function DynamicRouteConfigMetadata(url) {
                    this.url = url;
                }
                return DynamicRouteConfigMetadata;
            }());
            exports_1("DynamicRouteConfigMetadata", DynamicRouteConfigMetadata);
            exports_1("DynamicRouteConfig", DynamicRouteConfig = decorators_1.makeDecorator(DynamicRouteConfigMetadata));
        }
    }
});
//# sourceMappingURL=DynamicRouteConfigurator.js.map