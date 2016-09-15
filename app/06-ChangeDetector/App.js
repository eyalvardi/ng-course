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
 * Created by Eyal Vardi on 5/03/2016.
 */
var core_1 = require("@angular/core");
require('./BaseDemo');
require('./DefaultDemo');
require('./PushDemo');
var BaseDemo_1 = require("./BaseDemo");
var User = (function () {
    function User() {
    }
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            console.log("App get user.name: " + this._name);
            return this._name;
        },
        set: function (value) {
            console.log("App set user.name: " + value);
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
var App = (function (_super) {
    __extends(App, _super);
    function App(cd, elmRef, render, zone) {
        _super.call(this, cd, elmRef, render, zone, 'App');
        this._name = 'Eyal Vardi';
        this.user = new User();
    }
    Object.defineProperty(App.prototype, "name", {
        get: function () {
            console.log("App get name: " + this._name);
            return this._name;
        },
        set: function (value) {
            console.log("App set name: " + value);
            _super.prototype.setSetter.call(this, "set name: " + value);
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    App.prototype.changeName = function () {
        this._name = this._name + '*';
        _super.prototype.setSetter.call(this, "set name: " + this._name);
    };
    App = __decorate([
        core_1.Component({
            selector: 'my-app',
            styles: [":host{display: block;border: 1px solid black; text-align: left}"],
            template: "\n    <div style=\"padding: 8px;\">\n        <h3>\n            Change Detector Demos \n            <link-to-code></link-to-code>\n            <clock *ngIf=\"isClock\"></clock>\n        </h3>        \n        <br>\n        <div>\n            <input type=\"checkbox\" [(ngModel)]=\"isDefault\"> Default Component\n            <input type=\"checkbox\" [(ngModel)]=\"isPush\" > Push Component            \n            <input type=\"checkbox\" [(ngModel)]=\"isPipe\" > Pipes \n            <!--<input type=\"checkbox\" ngControl=\"isDiagram\" #isDiagram=\"ngForm\"> Lifecycle Hooks Diagram-->\n            <input type=\"checkbox\" [(ngModel)]=\"isClock\" > Clock            \n        </div>       \n        \n        <pipes-demo *ngIf=\"isPipe\"></pipes-demo>\n        <form class=\"form-inline\">\n            <div class=\"form-group\">\n                <label for=\"name\">Name</label>\n                <input type=\"text\" name=\"name\" [(ngModel)]=\"name\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"user\">User.name</label>\n                <input type=\"text\" name=\"user\" [(ngModel)]=\"user.name\" class=\"form-control\">\n            </div>\n        </form>\n        \n        <button (click)=\"changeName()\">  Change </button>       \n        <button (click)=\"cd.detach()\">   Detach</button>\n        <button (click)=\"cd.reattach()\"> Reattach</button>\n        <button (click)=\"cd.detectChanges()\"> detectChanges</button>\n        <button (click)=\"cd.markForCheck()\">  markForCheck</button><br>\n        \n        <push-demo \n            *ngIf=\"isPush\"\n            [user]=\"user\" \n            [name]=\"name\">            \n        </push-demo>\n        <default-demo \n            *ngIf=\"!isDefault\"\n            [user]=\"user\" \n            [name]=\"name\">        \n        </default-demo>\n        <!--<ng-analyzer></ng-analyzer>-->\n        <br>\n        <hr>\n        <br>\n        <diagram></diagram>        \n    </div>    \n"
        }), 
        __metadata('design:paramtypes', [core_1.ChangeDetectorRef, core_1.ElementRef, core_1.Renderer, core_1.NgZone])
    ], App);
    return App;
}(BaseDemo_1.BaseDemo));
exports.App = App;
//# sourceMappingURL=App.js.map