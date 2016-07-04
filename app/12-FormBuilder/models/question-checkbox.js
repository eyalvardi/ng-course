"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var question_base_1 = require('./question-base');
var CheckboxQuestion = (function (_super) {
    __extends(CheckboxQuestion, _super);
    function CheckboxQuestion(options) {
        if (options === void 0) { options = {}; }
        _super.call(this, options);
        this.controlType = 'checkbox';
    }
    return CheckboxQuestion;
}(question_base_1.QuestionBase));
exports.CheckboxQuestion = CheckboxQuestion;
//# sourceMappingURL=question-checkbox.js.map