System.register(["angular2/core", "angular2/src/core/linker/view_manager"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, view_manager_1;
    var MyAppViewManager;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (view_manager_1_1) {
                view_manager_1 = view_manager_1_1;
            }],
        execute: function() {
            MyAppViewManager = (function (_super) {
                __extends(MyAppViewManager, _super);
                function MyAppViewManager(_renderer, _appId) {
                    _super.call(this, _renderer, _appId);
                }
                MyAppViewManager.prototype.createRootHostView = function (hostViewFactoryRef, overrideSelector, injector, projectableNodes) {
                    console.log("createRootHostView: ");
                    return _super.prototype.createRootHostView.call(this, hostViewFactoryRef, overrideSelector, injector, projectableNodes);
                };
                MyAppViewManager.prototype.createEmbeddedViewInContainer = function (viewContainerLocation, index, templateRef) {
                    console.log("createEmbeddedViewInContainer:\n " + JSON.stringify(viewContainerLocation.nativeElement) + " ");
                    return _super.prototype.createEmbeddedViewInContainer.call(this, viewContainerLocation, index, templateRef);
                };
                MyAppViewManager = __decorate([
                    core_1.Injectable(),
                    __param(1, core_1.Inject(core_1.APP_ID)), 
                    __metadata('design:paramtypes', [core_1.RootRenderer, String])
                ], MyAppViewManager);
                return MyAppViewManager;
            }(view_manager_1.AppViewManager_));
            exports_1("MyAppViewManager", MyAppViewManager);
        }
    }
});
//# sourceMappingURL=MyAppViewManager.js.map