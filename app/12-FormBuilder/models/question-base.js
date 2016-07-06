"use strict";
var QuestionBase = (function () {
    function QuestionBase(options) {
        if (options === void 0) { options = {}; }
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.validations = options.validations || [];
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        this.type = options.type || '';
    }
    return QuestionBase;
}());
exports.QuestionBase = QuestionBase;
//# sourceMappingURL=question-base.js.map