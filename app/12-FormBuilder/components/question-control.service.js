"use strict";
var forms_1 = require('@angular/forms');
//@Injectable()
var QuestionControlService = (function () {
    function QuestionControlService() {
    }
    QuestionControlService.prototype.toFormGroup = function (questions) {
        var _this = this;
        var group = {};
        questions.forEach(function (question) {
            var qg = question;
            if (qg.questions) {
                _this.formGroupBuilder(group, qg);
            }
            else {
                _this.formControlBuilder(group, question);
            }
        });
        return new forms_1.FormGroup(group);
    };
    QuestionControlService.prototype.formControlBuilder = function (parentGroup, question) {
        parentGroup[question.key] =
            new forms_1.FormControl(question.value, this.getValidators(question));
    };
    QuestionControlService.prototype.formGroupBuilder = function (parentGroup, questionsGroup) {
        parentGroup[questionsGroup.key] = this.toFormGroup(questionsGroup.questions);
    };
    QuestionControlService.prototype.getValidators = function (question) {
        var vals = [];
        question.validations.forEach(function (v) {
            if (forms_1.Validators[v.type]) {
                if (forms_1.Validators[v.type] === forms_1.Validators.required) {
                    vals.push(forms_1.Validators[v.type]);
                }
                else {
                    vals.push(forms_1.Validators[v.type].apply(forms_1.Validators, v.args));
                }
            }
        });
        return vals;
    };
    return QuestionControlService;
}());
exports.QuestionControlService = QuestionControlService;
//# sourceMappingURL=question-control.service.js.map