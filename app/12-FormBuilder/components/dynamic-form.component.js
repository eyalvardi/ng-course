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
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var question_control_service_1 = require("./question-control.service");
var dynamic_form_question_component_1 = require("./dynamic-form-question.component");
var DynamicFormComponent = (function () {
    function DynamicFormComponent(qcs) {
        this.qcs = qcs;
        this._questions = [];
        this.payLoad = '';
    }
    Object.defineProperty(DynamicFormComponent.prototype, "questions", {
        get: function () { return this._questions; },
        set: function (value) {
            this._questions = value;
            this.myform = this.qcs.toFormGroup(this._questions);
            this.myform.statusChanges
                .subscribe(function (s) { return console.log("myform.status: " + s); });
        },
        enumerable: true,
        configurable: true
    });
    DynamicFormComponent.prototype.getIsValid = function (valid) {
        if (valid)
            return true;
        var result = true;
        for (var c in this.myform.controls) {
            if (this.myform.controls[c] instanceof forms_1.FormControl) {
                result = result && this.myform.controls[c].valid;
                if (!result)
                    return false;
            }
        }
        return true;
    };
    DynamicFormComponent.prototype.onSubmit = function () {
        this.payLoad = this.myform.value;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], DynamicFormComponent.prototype, "questions", null);
    DynamicFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dynamic-form',
            directives: [dynamic_form_question_component_1.DynamicFormQuestionComponent, forms_1.REACTIVE_FORM_DIRECTIVES],
            providers: [question_control_service_1.QuestionControlService],
            styles: ["\n        .row-margin{\n            margin: 8px;\n        }    \n        .ng-valid {\n          border-left: 5px solid #42A948; /* green */\n        }\n        form.ng-invalid {\n          border: 2px solid #a94442; /* red */          \n        }\n        .ng-invalid {\n          border-left: 5px solid #a94442; /* red */          \n        }\n    "],
            template: "\n<div>\n  <form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\"  style=\"margin: 2px;padding: 2px\"\n    [formGroup]=\"myform\" \n    [class.ng-invalid]=\"!getIsValid(f.valid)\">\n    <div *ngFor=\"let question of questions\" class=\"row-margin\">\n      <df-question [question]=\"question\" [form]=\"myform\"></df-question>\n    </div>\n    \n    <div class=\"form-row\">\n      <button type=\"submit\" [disabled]=\"!myform.valid\" class=\"btn btn-primary\">Save</button>\n    </div>\n    \n  </form>\n  \n  <div *ngIf=\"payLoad\" class=\"form-row\">\n    <strong>Saved the following values</strong><br>\n    <pre>{{payLoad | json}}</pre>\n  </div>\n</div>\n\n" }), 
        __metadata('design:paramtypes', [question_control_service_1.QuestionControlService])
    ], DynamicFormComponent);
    return DynamicFormComponent;
}());
exports.DynamicFormComponent = DynamicFormComponent;
//# sourceMappingURL=dynamic-form.component.js.map