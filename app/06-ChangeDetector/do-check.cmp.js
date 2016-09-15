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
var core_1 = require("@angular/core");
var BaseDemo_1 = require("./BaseDemo");
var DoCheckComp = (function (_super) {
    __extends(DoCheckComp, _super);
    function DoCheckComp(render, zone, elmRef, cd) {
        _super.call(this, cd, elmRef, render, zone, "doCheckCmp");
        this.isDetach = false;
        this._counter = 0;
    }
    Object.defineProperty(DoCheckComp.prototype, "updateName", {
        set: function (value) {
            console.log("do-check set name: " + value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoCheckComp.prototype, "counter", {
        get: function () {
            return this._counter;
        },
        set: function (value) { this._counter = value; },
        enumerable: true,
        configurable: true
    });
    DoCheckComp.prototype.ngOnDestroy = function () {
        this.stop();
        _super.prototype.ngOnDestroy.call(this);
    };
    DoCheckComp.prototype.onClick = function () {
        if (this.isStart) {
            this.stop();
            this.isStart = false;
        }
        else {
            this.start();
            this.isStart = true;
        }
    };
    DoCheckComp.prototype.start = function () {
        var _this = this;
        this.counter = 0;
        if (this.isDetach) {
            this.zone.runOutsideAngular(function () {
                _this.internalStart(function () { _this.cd.detectChanges(); });
            });
        }
        else {
            this.internalStart(function () { });
        }
    };
    DoCheckComp.prototype.internalStart = function (fn) {
        var _this = this;
        this.counter = 0;
        this.idInterval = setInterval(function () {
            if (_this.counter % 10 == 0) {
                _this.counter = 0;
            }
            _this.counter++;
            fn();
        }, 1000);
    };
    DoCheckComp.prototype.stop = function () {
        clearInterval(this.idInterval);
        this.counter = 0;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DoCheckComp.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DoCheckComp.prototype, "isDetach", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], DoCheckComp.prototype, "updateName", null);
    DoCheckComp = __decorate([
        core_1.Component({
            selector: 'do-check',
            styles: ["       \n    :host{\n        border: 1px solid black;\n        display: block;        \n        margin-right: 12px;        \n       \n    }\n"],
            template: "\n    <div style=\"border: 1px solid black;padding-left: 3px\">\n        <input type=\"checkbox\" [(ngModel)]=\"isStart\" (change)=\"onClick()\">\n        {{counter}}<br>\n        <span>Mode : {{getCdMode()}}</span><br>\n        <span>State: {{getCdState()}}</span>\n    </div>\n"
        }), 
        __metadata('design:paramtypes', [core_1.Renderer, core_1.NgZone, core_1.ElementRef, core_1.ChangeDetectorRef])
    ], DoCheckComp);
    return DoCheckComp;
}(BaseDemo_1.BaseDemo));
exports.DoCheckComp = DoCheckComp;
//# sourceMappingURL=do-check.cmp.js.map