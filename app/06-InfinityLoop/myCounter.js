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
var core_1 = require("@angular/core");
var core_private_1 = require("@angular/compiler/core_private");
var myCounter = (function () {
    function myCounter(cd, elmRef, render, zone) {
        this.cd = cd;
        this.elmRef = elmRef;
        this.render = render;
        this.zone = zone;
        this._value = 0;
        this.onValueChange = new core_1.EventEmitter();
        this.onOddValueChange = new core_1.EventEmitter();
    }
    Object.defineProperty(myCounter.prototype, "value", {
        get: function () { return this._value; },
        set: function (value) {
            this._value = value;
            if (value % 2 == 0) {
                this.onValueChange.emit(value);
            }
            else {
                this.onOddValueChange.emit(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    myCounter.prototype.getCdMode = function () {
        return core_1.ChangeDetectionStrategy[this.cd._view.cdMode];
    };
    myCounter.prototype.getCdState = function () {
        return core_private_1.ChangeDetectorState[this.cd._view.cdState];
    };
    __decorate([
        core_1.Input('my-value'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], myCounter.prototype, "value", null);
    __decorate([
        core_1.Output('on-value'), 
        __metadata('design:type', core_1.EventEmitter)
    ], myCounter.prototype, "onValueChange", void 0);
    __decorate([
        core_1.Output('on-value-odd'), 
        __metadata('design:type', core_1.EventEmitter)
    ], myCounter.prototype, "onOddValueChange", void 0);
    myCounter = __decorate([
        core_1.Component({
            selector: 'my-counter',
            styles: [":host{display: block;border: 1px solid red; text-align: left;margin: 16px;padding: 8px;}"],
            template: "\n<div>\n    value: {{value}}<br>\n    <div>cdMode : {{getCdMode()}}</div>&nbsp;&nbsp;\n    <div>cdState: {{getCdState()}}</div>\n</div>\n" }), 
        __metadata('design:paramtypes', [core_1.ChangeDetectorRef, core_1.ElementRef, core_1.Renderer, core_1.NgZone])
    ], myCounter);
    return myCounter;
}());
exports.myCounter = myCounter;
//# sourceMappingURL=myCounter.js.map