"use strict";
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
/**
 * Created by Eyal Vardi on 5/3/2016.
 */
var core_1 = require("@angular/core");
var compiler_1 = require("@angular/compiler");
var MobileViewResolver = (function (_super) {
    __extends(MobileViewResolver, _super);
    function MobileViewResolver(_reflector) {
        _super.call(this, _reflector);
    }
    MobileViewResolver.prototype.resolve = function (component) {
        component.prototype.ngDoCheck = function () {
            console.log(component.name + " doCheck :-)");
        };
        var vm;
        try {
            vm = _super.prototype.resolve.call(this, component);
        }
        catch (exp) {
        }
        if (vm.templateUrl) {
            vm.templateUrl = "m." + vm.templateUrl;
        }
        return vm;
    };
    MobileViewResolver = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.Reflector !== 'undefined' && core_1.Reflector) === 'function' && _a) || Object])
    ], MobileViewResolver);
    return MobileViewResolver;
    var _a;
}(compiler_1.ViewResolver));
exports.MobileViewResolver = MobileViewResolver;
//# sourceMappingURL=MobileViewResolver.js.map