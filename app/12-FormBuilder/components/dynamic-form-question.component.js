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
var question_base_1 = require("../models/question-base");
/*function Component(obj){
    (target)=>{
        // TODO: target.anotation = obj;
        return target;
    }
}*/
var DynamicFormQuestionComponent = (function () {
    function DynamicFormQuestionComponent() {
    }
    Object.defineProperty(DynamicFormQuestionComponent.prototype, "isValid", {
        get: function () { return this.form.controls[this.question.key].valid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormQuestionComponent.prototype, "errors", {
        get: function () {
            var result = [];
            var errors = this.form.controls[this.question.key].errors;
            var _loop_1 = function(error) {
                this_1.question
                    .validations
                    .filter(function (v) { return error.toLowerCase() == v.type.toLowerCase(); })
                    .forEach(function (vld) {
                    vld.errors.forEach(function (err) {
                        /*, Function status: ${errors[error]}*/
                        result.push("Error Message: " + err.msg);
                    });
                });
            };
            var this_1 = this;
            for (var error in errors) {
                _loop_1(error);
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', question_base_1.QuestionBase)
    ], DynamicFormQuestionComponent.prototype, "question", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', forms_1.FormGroup)
    ], DynamicFormQuestionComponent.prototype, "form", void 0);
    DynamicFormQuestionComponent = __decorate([
        core_1.Component({
            selector: 'df-question',
            directives: [
                forms_1.REACTIVE_FORM_DIRECTIVES,
                core_1.forwardRef(function () { return DynamicFormQuestionComponent; })
            ],
            styles: ["\n        .ng-valid {\n          border-left: 5px solid #42A948; /* green */\n        }\n        .ng-invalid {\n          border-left: 5px solid #a94442; /* red */\n        }\n    "],
            template: "\n    <div [formGroup]=\"form\">\n      <!-- Label -->\n      <label    *ngIf=\"question.controlType != 'checkbox'\" \n                [attr.for]=\"question.key\">\n                    {{question.label}}\n      </label>\n      \n      <!-- Input type -->\n      <div [ngSwitch]=\"question.controlType\" >\n        \n        <div *ngSwitchCase=\"'group'\">\n            <form #f=\"ngForm\"\n                [class.ng-invalid]=\"!f.valid\"\n                [formGroup]=\"form.controls[question.key]\">\n            <fieldset>\n                <legend> {{question.label}} </legend>                \n                <div *ngFor=\"let q of  question.questions\" class=\"row-margin\">\n                  <df-question [question]=\"q\" \n                      [form]=\"form.controls[question.key]\">                  \n                  </df-question>\n                </div>\n            </fieldset>\n            </form>\n        </div>\n        \n        <input \n            *ngSwitchCase=\"'textbox'\" \n            [formControlName]=\"question.key\"\n            [id]=\"question.key\" \n            [type]=\"question.type\">\n            \n        <div *ngSwitchCase=\"'checkbox'\">\n             <input             \n                [formControlName]=\"question.key\"\n                [id]=\"question.key\" \n                type=\"checkbox\"> {{question.label}}\n        </div>\n        \n        <fieldset *ngSwitchCase=\"'radio'\">\n            <legend>Bla Bla</legend>\n            <template ngFor let-v [ngForOf]=\"question.options\" >\n                <input\n                    [formControlName]=\"question.key\"\n                    [name]=\"question.name\" \n                    type=\"radio\" \n                    [value]=\"v.value\"> {{v.value}}<br>\n            </template>\n            \n        </fieldset>            \n        \n        <select \n            [id]=\"question.key\" \n            *ngSwitchCase=\"'dropdown'\" \n            [formControlName]=\"question.key\">\n          <option \n                *ngFor=\"let opt of question.options\" \n                [value]=\"opt.key\">\n                {{opt.value}}\n          </option>\n        </select>\n        \n      </div> \n      \n      <!-- Errors Messages -->\n      <!--<div class=\"errorMessage\" *ngIf=\"!isValid\">\n        {{question.label}} is required\n      </div>-->\n      <div *ngFor=\"let e of errors\">{{e}}</div>\n    </div>\n" }), 
        __metadata('design:paramtypes', [])
    ], DynamicFormQuestionComponent);
    return DynamicFormQuestionComponent;
}());
exports.DynamicFormQuestionComponent = DynamicFormQuestionComponent;
//# sourceMappingURL=dynamic-form-question.component.js.map