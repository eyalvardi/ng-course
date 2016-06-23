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
 * Created by Eyal on 6/15/2016.
 */
var core_1 = require('@angular/core');
var ngEx_1 = require('ngEx');
var BaseDemo_1 = require("./BaseDemo");
var counter = 0;
var MyPipe = (function () {
    function MyPipe() {
        this.calls = 0;
        this.instance = counter++;
    }
    MyPipe.prototype.transform = function (value, name) {
        return "instance :" + this.instance + " input: " + value + " arg name value: " + name + " number of call: " + this.calls++;
    };
    return MyPipe;
}());
exports.MyPipe = MyPipe;
var MyPurePipe = (function (_super) {
    __extends(MyPurePipe, _super);
    function MyPurePipe() {
        _super.call(this);
    }
    MyPurePipe = __decorate([
        ngEx_1.Global(),
        core_1.Pipe({ name: 'myPurePipe', pure: true }), 
        __metadata('design:paramtypes', [])
    ], MyPurePipe);
    return MyPurePipe;
}(MyPipe));
exports.MyPurePipe = MyPurePipe;
var MyImpurePipe = (function (_super) {
    __extends(MyImpurePipe, _super);
    function MyImpurePipe() {
        _super.call(this);
    }
    MyImpurePipe = __decorate([
        ngEx_1.Global(),
        core_1.Pipe({ name: 'myImpurePipe', pure: false }), 
        __metadata('design:paramtypes', [])
    ], MyImpurePipe);
    return MyImpurePipe;
}(MyPipe));
exports.MyImpurePipe = MyImpurePipe;
//Math.floor(Math.random() * (max - min + 1)) + min
var SumRandomPipe = (function (_super) {
    __extends(SumRandomPipe, _super);
    function SumRandomPipe() {
        _super.apply(this, arguments);
        this.sum = 0;
    }
    SumRandomPipe.prototype.transform = function (min, max) {
        this.sum += Math.floor(Math.random() * (max - min + 1)) + min;
        return this.sum;
    };
    SumRandomPipe = __decorate([
        ngEx_1.Global(),
        core_1.Pipe({ name: 'sumRandomPipe', pure: false }), 
        __metadata('design:paramtypes', [])
    ], SumRandomPipe);
    return SumRandomPipe;
}(MyPipe));
exports.SumRandomPipe = SumRandomPipe;
var PipesDemo = (function (_super) {
    __extends(PipesDemo, _super);
    function PipesDemo(cd, elmRef, render, zone) {
        _super.call(this, cd, elmRef, render, zone, 'Pipes demo');
    }
    PipesDemo = __decorate([
        ngEx_1.Global(),
        core_1.Component({
            selector: 'pipes-demo',
            pipes: [MyImpurePipe, MyPurePipe, SumRandomPipe],
            styles: ["\n        :host{display: block; text-align: left;margin: 8px;} \n        .border{border: 1px solid black;padding: 8px;}\n    "],
            template: "\n<pre>\n   <b>{ 1 | myPurePipe  : 'a' }</b> : {{ 1  | myPurePipe  : 'a' }}<br>\n   <b>{ 1 | myPurePipe  : 'a' }</b> : {{ 1  | myPurePipe  : 'a' }}<br>\n   <b>{ 2 | myImpurePipe: 'b' }</b> : {{ 2  | myImpurePipe: 'b' }}<br>\n   <b>{ 1 | sumRandomPipe: 3 } </b> : {{ 1  | sumRandomPipe: 3 }}<br>\n</pre>\n"
        }), 
        __metadata('design:paramtypes', [core_1.ChangeDetectorRef, core_1.ElementRef, core_1.Renderer, core_1.NgZone])
    ], PipesDemo);
    return PipesDemo;
}(BaseDemo_1.BaseDemo));
exports.PipesDemo = PipesDemo;
//# sourceMappingURL=PipeDemo.js.map