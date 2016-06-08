System.register(["@angular/core", './BaseDemo', './DefaultDemo', './PushDemo', 'ngEx/SequenceDiagramsService'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
    var core_1, BaseDemo_1, SequenceDiagramsService_1;
    var User, App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (BaseDemo_1_1) {
                BaseDemo_1 = BaseDemo_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (SequenceDiagramsService_1_1) {
                SequenceDiagramsService_1 = SequenceDiagramsService_1_1;
            }],
        execute: function() {
            User = (function () {
                function User() {
                }
                Object.defineProperty(User.prototype, "name", {
                    get: function () {
                        console.log("App get user.name: " + this._name);
                        return this._name;
                    },
                    set: function (value) {
                        console.log("App set user.name: " + value);
                        this._name = name;
                    },
                    enumerable: true,
                    configurable: true
                });
                return User;
            }());
            App = (function (_super) {
                __extends(App, _super);
                function App(cd, elmRef, render, zone) {
                    _super.call(this, cd, elmRef, render, zone, 'App');
                    this.user = new User();
                    this.logs = SequenceDiagramsService_1.logs;
                    /*setInterval(()=>{
                        console.log('setInterval...');
                        this.name = 'mysetname';
                    },10000);*/
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
                App.prototype.clearLog = function () {
                    SequenceDiagramsService_1.clearLogs();
                };
                App.prototype.getLastLog = function () {
                    if (SequenceDiagramsService_1.logs.length == 0)
                        return;
                    return SequenceDiagramsService_1.logs[SequenceDiagramsService_1.logs.length - 1];
                };
                App = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        styles: [":host{display: block;border: 1px solid black; text-align: left}"],
                        directives: [SequenceDiagramsService_1.SequenceDiagram],
                        template: "\n    <div style=\"padding: 8px;\">\n        <h3>Change Detector Demos</h3>        \n        <br>\n        <!--User name: <input type=\"text\" [(ngModel)]=\"user.name\"><br>\n        Name:      <input type=\"text\" [(ngModel)]=\"name\">-->\n        {{getName()}}<br>\n        <button (click)=\"changeName()\">  Change </button>\n        <button (click)=\"clearLog()\">Clear</button>\n        <button (click)=\"cd.detach()\">   Detach</button>\n        <button (click)=\"cd.reattach()\"> Reattach</button>\n        <button (click)=\"cd.detectChanges()\"> detectChanges</button>\n        <button (click)=\"cd.markForCheck()\">  markForCheck</button><br>\n        \n        <push-demo \n            [user]=\"user\" \n            [name]=\"name\">            \n        </push-demo>\n        <default-demo \n            [user]=\"user\" \n            [name]=\"name\">        \n        </default-demo>\n        <!--<ng-analyzer></ng-analyzer>-->\n        <diagram [title]=\"'AngularJS 2 Lifecycle Hooks'\"></diagram>\n        <ul>\n            <li *ngFor=\"let log of logs\">{{log}}</li>\n        </ul>\n    </div>    \n"
                    }), 
                    __metadata('design:paramtypes', [core_1.ChangeDetectorRef, core_1.ElementRef, core_1.Renderer, core_1.NgZone])
                ], App);
                return App;
            }(BaseDemo_1.BaseDemo));
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=App.js.map