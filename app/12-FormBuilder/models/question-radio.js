"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var question_base_1 = require('./question-base');
var RadioQuestion = (function (_super) {
    __extends(RadioQuestion, _super);
    function RadioQuestion(options) {
        if (options === void 0) { options = {}; }
        _super.call(this, options);
        this.controlType = 'radio';
        this.options = [];
        this.options = options['options'] || [];
    }
    return RadioQuestion;
}(question_base_1.QuestionBase));
exports.RadioQuestion = RadioQuestion;
//# sourceMappingURL=question-radio.js.map