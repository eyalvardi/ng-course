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
var myCounter_1 = require("./myCounter");
var core_private_1 = require("@angular/compiler/core_private");
var App = (function () {
    function App(cd, elmRef, render, zone) {
        this.cd = cd;
        this.elmRef = elmRef;
        this.render = render;
        this.zone = zone;
        this._counter = 0;
        //setInterval(()=>{},500);
    }
    Object.defineProperty(App.prototype, "counter", {
        get: function () {
            return this._counter;
        },
        set: function (value) {
            this._counter = value;
        },
        enumerable: true,
        configurable: true
    });
    App.prototype.updateCounter = function (value) {
        this.counter++;
    };
    App.prototype.getCdMode = function () {
        return core_1.ChangeDetectionStrategy[this.cd._view.cdMode];
    };
    App.prototype.getCdState = function () {
        return core_private_1.ChangeDetectorState[this.cd._view.cdState];
    };
    App = __decorate([
        core_1.Component({
            selector: 'my-app',
            styles: [":host{display: block;border: 1px solid black; text-align: left}"],
            directives: [myCounter_1.myCounter],
            template: "\n    <div style=\"padding: 8px;\">\n        <h3>Infinity Loop counter: {{counter}}</h3>\n        <!--\n        <input type=\"number\" [(ngModel)]=\"counter\">\n        -->\n        <button (click)=\"counter = counter +  0\">Tick</button><br>\n        <!--<div style=\"display: flex\">\n            <span>cdMode : {{getCdMode()}}</span>&nbsp;&nbsp;\n            <span>cdState: {{getCdState()}}</span>\n        </div>-->\n        <div style=\"display: flex\">\n            <my-counter\n                (on-value)=\"updateCounter($event)\"\n                [my-value]=\"counter\"            \n            ></my-counter>\n            <my-counter\n                (on-value-odd)=\"updateCounter($event)\"\n                [my-value]=\"counter\"            \n            ></my-counter>\n        </div>\n    </div>    \n"
        }), 
        __metadata('design:paramtypes', [core_1.ChangeDetectorRef, core_1.ElementRef, core_1.Renderer, core_1.NgZone])
    ], App);
    return App;
}());
exports.App = App;
//# sourceMappingURL=App.js.map