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
var forms_1 = require('@angular/forms');
var AddQuestionForm = (function () {
    function AddQuestionForm() {
        this.form = new forms_1.FormGroup({
            'key': new forms_1.FormControl(''),
            'label': new forms_1.FormControl(''),
            'controlType': new forms_1.FormControl(''),
        });
        this.addedQuestion = new core_1.EventEmitter();
    }
    /*test(){
        this.form.controls['key'].updateValue('eyal vardi');
    }*/
    AddQuestionForm.prototype.addQuestion = function (value) {
        console.log("new question: " + JSON.stringify(this.form.value));
        this.addedQuestion.emit(this.form.value);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AddQuestionForm.prototype, "addedQuestion", void 0);
    AddQuestionForm = __decorate([
        core_1.Component({
            selector: 'add-question-form',
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES],
            providers: [],
            styles: [],
            template: "\n<form [formGroup]=\"form\" class=\"form-inline\">\n  <div class=\"form-group\">\n    <label for=\"key\">Key</label>\n    <input formControlName=\"key\" type=\"text\" class=\"form-control\" id=\"key\" placeholder=\"question key\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"label\">label</label>\n    <input formControlName=\"label\" type=\"text\" class=\"form-control\" id=\"label\" placeholder=\"label\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"controlType\">Control type</label>\n    <select formControlName=\"controlType\">\n        <option value=\"textbox\">TextBox</option>\n        <option value=\"checkbox\">CheckBox</option>\n        <option value=\"radio\">Radio</option>\n        <option value=\"dropdown\">DropDown</option>\n    </select>\n  </div>\n  <button type=\"submit\" class=\"btn btn-default\" (click)=\"addQuestion()\">Add Question</button>\n  <!--<button (click)=\"test()\">Change</button>-->\n</form>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], AddQuestionForm);
    return AddQuestionForm;
}());
exports.AddQuestionForm = AddQuestionForm;
//# sourceMappingURL=add-question.component.js.map