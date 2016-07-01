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
var checkBoxList_component_1 = require("./checkBoxList.component");
var forms_1 = require("@angular/forms");
var AppComponent = (function () {
    function AppComponent() {
        this.form = new forms_1.FormGroup({
            test2: new forms_1.FormControl('')
        });
        this.test = '1,3';
        this.form.valueChanges.subscribe(function (v) {
            console.log(JSON.stringify(v));
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            providers: [],
            viewProviders: [],
            directives: [checkBoxList_component_1.CheckBoxListComponent, forms_1.REACTIVE_FORM_DIRECTIVES],
            template: "\n<div>\n    <h1> Custom Input</h1>\n    <form [formGroup]=\"form\">\n        <checkBoxList\n             size=\"5\"        \n             name=\"test2\"            \n             [(ngModel)]=\"test\">\n        </checkBoxList>\n    </form>\n    <div>test: {{test}}</div>\n     test2: <input type=\"text\" name=\"iTest2\" [(ngModel)]=\"test\"><br>\n     \n</div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map