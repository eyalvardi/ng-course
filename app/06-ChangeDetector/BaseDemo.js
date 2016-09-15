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
var SequenceDiagramsService_1 = require('ngEx/SequenceDiagramsService');
/*import {ChangeDetectorState} from "@angular/compiler/core_private";*/
//var console:{log:Function} = {log:()=>{}};
var LifeCycleHooksDump = (function () {
    function LifeCycleHooksDump(compName) {
        this.compName = compName;
        console.log(this.compName + " constructor");
        SequenceDiagramsService_1.logEvent(this.compName, 'constructor');
    }
    LifeCycleHooksDump.prototype.ngOnInit = function () {
        console.log(this.compName + " - ngOnInit");
        SequenceDiagramsService_1.logEvent(this.compName, 'ngOnInit');
    };
    LifeCycleHooksDump.prototype.ngOnDestroy = function () {
        console.log(this.compName + " - ngOnDestroy");
        SequenceDiagramsService_1.logEvent(this.compName, 'ngOnDestroy');
    };
    LifeCycleHooksDump.prototype.ngOnChanges = function (changes) {
        console.log(this.compName + " - ngOnChanges");
        SequenceDiagramsService_1.logEvent(this.compName, 'ngOnChanges');
        /*for(let p in changes){
            console.log(`${this.name} ${p}: ${changes[p].currentValue}`);
        }*/
    };
    /*ngDoCheck(){
     console.log(`${this.name} - ngDoCheck`);
     }*/
    LifeCycleHooksDump.prototype.ngAfterContentInit = function () {
        console.log(this.compName + " - ngAfterContentInit");
        SequenceDiagramsService_1.logEvent(this.compName, 'ngAfterContentInit');
    };
    LifeCycleHooksDump.prototype.ngAfterContentChecked = function () {
        console.log(this.compName + " - ngAfterContentChecked");
        SequenceDiagramsService_1.logEvent(this.compName, 'ngAfterContentChecked');
    };
    LifeCycleHooksDump.prototype.ngAfterViewInit = function () {
        console.log(this.compName + " - AfterViewInit");
        SequenceDiagramsService_1.logEvent(this.compName, 'AfterViewInit');
    };
    LifeCycleHooksDump.prototype.ngAfterViewChecked = function () {
        console.log(this.compName + " - AfterViewChecked");
        SequenceDiagramsService_1.logEvent(this.compName, 'AfterViewChecked');
    };
    LifeCycleHooksDump.prototype.setSetter = function (property) {
        SequenceDiagramsService_1.logEvent(this.compName, "setter " + property);
    };
    return LifeCycleHooksDump;
}());
exports.LifeCycleHooksDump = LifeCycleHooksDump;
var BaseDemo = (function (_super) {
    __extends(BaseDemo, _super);
    function BaseDemo(cd, elmRef, render, zone, compName) {
        _super.call(this, compName);
        this.cd = cd;
        this.elmRef = elmRef;
        this.render = render;
        this.zone = zone;
        this.isDoCheck = false;
    }
    Object.defineProperty(BaseDemo.prototype, "name", {
        get: function () {
            //console.log(`${this.compName} get name: ${this._name}`);
            return this._name;
        },
        set: function (value) {
            this._name = value;
            _super.prototype.setSetter.call(this, "set name: " + value);
            //console.log(`${this.compName} set name: ${value}`);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDemo.prototype, "test", {
        get: function () {
            //console.log(`${this.compName} get test: ${this._test}`);
            return this._test;
        },
        set: function (value) { this._test = value; },
        enumerable: true,
        configurable: true
    });
    BaseDemo.prototype.getName = function () { return this._name; };
    BaseDemo.prototype.getTest = function () { return this._test; };
    BaseDemo.prototype.ngDoCheck = function () {
        //this._name = 'docheckSet';
        SequenceDiagramsService_1.logEvent(this.compName, 'ngDoCheck');
        this.markPulse();
    };
    BaseDemo.prototype.markPulse = function () {
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
    BaseDemo.prototype.detach = function () { this.cd.detach(); };
    BaseDemo.prototype.reattach = function () { this.cd.reattach(); };
    BaseDemo.prototype.markForCheck = function () { this.cd.markForCheck(); };
    BaseDemo.prototype.detectChanges = function () { this.cd.detectChanges(); };
    BaseDemo.prototype.changeName = function () {
        this.name += '*';
        this.user.name = this.name;
    };
    BaseDemo.prototype.getCdMode = function () {
        return core_1.ChangeDetectionStrategy[this.cd._view.cdMode];
    };
    BaseDemo.prototype.getCdState = function () {
        //return ChangeDetectorState[this.cd._view.cdState];
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], BaseDemo.prototype, "name", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BaseDemo.prototype, "user", void 0);
    return BaseDemo;
}(LifeCycleHooksDump));
exports.BaseDemo = BaseDemo;
//# sourceMappingURL=BaseDemo.js.map