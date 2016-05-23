System.register(["@angular/core", "ngEx/Global", 'ngEx/DynamicLoad'], function(exports_1, context_1) {
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
    var core_1, Global_1, DynamicLoad_1;
    var UserContainer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Global_1_1) {
                Global_1 = Global_1_1;
            },
            function (DynamicLoad_1_1) {
                DynamicLoad_1 = DynamicLoad_1_1;
            }],
        execute: function() {
            UserContainer = (function () {
                function UserContainer(loader, cmpResolver, elementRef, injector) {
                    this.loader = loader;
                    this.cmpResolver = cmpResolver;
                    this.elementRef = elementRef;
                    this.injector = injector;
                }
                Object.defineProperty(UserContainer.prototype, "user", {
                    set: function (value) {
                        this._user = value;
                        this.createComponent(value.name.title == 'miss' ?
                            "<miss-user [user]=\"data\"></miss-user>" :
                            "<mr-user   [user]=\"data\"></mr-user>");
                    },
                    enumerable: true,
                    configurable: true
                });
                UserContainer.prototype.createComponent = function (html) {
                    var _this = this;
                    var cmpType = DynamicLoad_1.compileToComponent(html, ['data:user']);
                    this.cmpResolver.resolveComponent(cmpType)
                        .then(function (cmpFactory) {
                        cmpFactory.create(_this.injector, [], cmpFactory.selector).changeDetectorRef.reattach();
                    });
                };
                __decorate([
                    core_1.Input('source'), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], UserContainer.prototype, "user", null);
                UserContainer = __decorate([
                    Global_1.Global(),
                    core_1.Component({
                        selector: 'user-container',
                        template: "\n    <h3><ng-content></ng-content></h3>\n    <fake></fake>\n    <div  id=\"container\"></div>\n"
                    }), 
                    __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.ComponentResolver, core_1.ElementRef, core_1.Injector])
                ], UserContainer);
                return UserContainer;
            }());
            exports_1("UserContainer", UserContainer);
        }
    }
});
//# sourceMappingURL=UserContainer.js.map