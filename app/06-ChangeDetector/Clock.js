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
 * Created by Eyal on 6/18/2016.
 */
var core_1 = require("@angular/core");
var BaseDemo_1 = require("./BaseDemo");
var Clock = (function (_super) {
    __extends(Clock, _super);
    function Clock(render, zone, elmRef, cd) {
        _super.call(this, cd, elmRef, render, zone, "Clock");
        this.time = '00:00:00:000';
        this.isDestroy = false;
    }
    Clock.prototype.ngOnInit = function () {
        var _this = this;
        this.cd.detach();
        this.zone.runOutsideAngular(function () {
            _this.setTime();
        });
    };
    Clock.prototype.setTime = function () {
        if (this.isDestroy)
            return;
        var t = new Date();
        this.time = t.getHours() + ":" + this.formatNum(t.getMinutes()) + ":" + this.formatNum(t.getSeconds()) + ":" + t.getMilliseconds();
        this.cd.detectChanges();
        setTimeout(this.setTime.bind(this), 50);
    };
    Clock.prototype.formatNum = function (i) {
        return i < 10 ? "0" + i : i;
    };
    Clock.prototype.ngOnDestroy = function () {
        this.isDestroy = true;
    };
    Clock = __decorate([
        core_1.Component({
            selector: 'clock',
            styles: ["\n        :host{\n            display: block;\n            position: absolute;\n            right: 150px;\n            top: 250px; \n            text-align: left;\n            margin: 8px;\n        } \n        .border{border: 1px solid black;padding: 8px;}\n    "],
            template: "\n<div>\n  <span>{{time}}</span>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [core_1.Renderer, core_1.NgZone, core_1.ElementRef, core_1.ChangeDetectorRef])
    ], Clock);
    return Clock;
}(BaseDemo_1.BaseDemo));
exports.Clock = Clock;
//# sourceMappingURL=Clock.js.map