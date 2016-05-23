System.register(["@angular/core", "./Global"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Global_1;
    var FormDebugger;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Global_1_1) {
                Global_1 = Global_1_1;
            }],
        execute: function() {
            FormDebugger = (function () {
                function FormDebugger() {
                    this.ngControls = [];
                }
                Object.defineProperty(FormDebugger.prototype, "form", {
                    set: function (val) {
                        this.ngControls = [];
                        this._form = val;
                    },
                    enumerable: true,
                    configurable: true
                });
                FormDebugger.prototype.ngDoCheck = function () {
                    for (var ctl in this._form.controls) {
                        this.ngControls.push({
                            name: ctl,
                            value: this._form.controls[ctl]
                        });
                    }
                };
                __decorate([
                    core_1.Input('source'), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], FormDebugger.prototype, "form", null);
                FormDebugger = __decorate([
                    Global_1.Global(),
                    core_1.Component({
                        selector: 'form-debugger',
                        template: "\n    <table>\n    <tr>\n        <td>controls:</td>\n        <td>\n        ngControls: {{ngControls?.length}}\n            <ul>\n                <li *ngFor=\"#ctl of ngControls\">\n                {{ctl?.name}} - {{ctl?.value}}\n                </li>\n            </ul>\n        </td>\n    </tr>\n</table>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], FormDebugger);
                return FormDebugger;
            }());
            exports_1("FormDebugger", FormDebugger);
        }
    }
});
//# sourceMappingURL=FormDebuger.js.map