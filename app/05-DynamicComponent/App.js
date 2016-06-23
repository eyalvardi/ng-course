"use strict";
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
 * Created by Eyal Vardi on 5/03/2016.
 */
var core_1 = require("@angular/core");
require("./Users/Users");
require("./Users/User");
require("./Users/UserContainer/UserContainer");
var App = (function () {
    function App(render, elmRef, zone) {
        this.render = render;
        this.elmRef = elmRef;
        this.zone = zone;
    }
    App.prototype.ngDoCheck = function () {
        var _this = this;
        if (!this.render)
            return;
        this.render.setElementStyle(this.elmRef.nativeElement, 'border', '2px solid red');
        this.zone.runOutsideAngular(function () {
            setTimeout(function () {
                _this.render.setElementStyle(_this.elmRef.nativeElement, 'border', '0');
            }, 700);
        });
    };
    App = __decorate([
        core_1.Component({
            selector: 'my-app',
            styles: ["\n        :host{\n            display: block;\n        }\n    "],
            //directives:[Users],
            template: "\n    <h1>Dynamic Component</h1>\n    <users></users>\n"
        }), 
        __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef, core_1.NgZone])
    ], App);
    return App;
}());
exports.App = App;
//# sourceMappingURL=App.js.map