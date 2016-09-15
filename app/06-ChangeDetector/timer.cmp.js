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
var TimerComp = (function () {
    function TimerComp(render, zone, elmRef) {
        var _this = this;
        this.render = render;
        this.zone = zone;
        this.elmRef = elmRef;
        this.counter = 0;
        setInterval(function () {
            if (_this.counter % 100 == 0) {
                _this.counter = 0;
            }
            _this.counter++;
        }, 1500);
    }
    TimerComp.prototype.ngDoCheck = function () {
        var _this = this;
        if (!this.render)
            return;
        this.render.setElementStyle(this.elmRef.nativeElement, 'background-color', 'red');
        this.zone.runOutsideAngular(function () {
            setTimeout(function () {
                _this.render.setElementStyle(_this.elmRef.nativeElement, 'background-color', 'transparent');
            }, 700);
        });
    };
    TimerComp = __decorate([
        core_1.Component({
            selector: 'timer',
            styles: ["\n    .box{\n        margin: -8px -8px;    \n        border: 1px solid black;\n        width: 24px;\n        height: 24px;\n    }    \n    :host{\n        border: 1px solid black;\n        display: block;\n        padding: 8px;\n        width: 25px;\n        height: 25px;\n    }\n"],
            template: "\n    <span>{{counter}}</span>\n"
        }), 
        __metadata('design:paramtypes', [core_1.Renderer, core_1.NgZone, core_1.ElementRef])
    ], TimerComp);
    return TimerComp;
}());
exports.TimerComp = TimerComp;
//# sourceMappingURL=timer.cmp.js.map