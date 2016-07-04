"use strict";
var question_base_1 = require("./models/question-base");
var question_dropdown_1 = require("./models/question-dropdown");
var question_textbox_1 = require("./models/question-textbox");
var question_checkbox_1 = require("./models/question-checkbox");
var question_radio_1 = require("./models/question-radio");
var QuestionService = (function () {
    function QuestionService() {
    }
    QuestionService.prototype.getQuestions = function () {
        var questions = [
            new question_dropdown_1.DropdownQuestion({
                key: 'brave',
                label: 'Bravery Rating',
                options: [
                    { key: 'solid', value: 'Solid' },
                    { key: 'great', value: 'Great' },
                    { key: 'good', value: 'Good' },
                    { key: 'unproven', value: 'Unproven' }
                ],
                order: 3
            }),
            new question_radio_1.RadioQuestion({
                key: 'myradio',
                label: 'Radio',
                name: 'test',
                options: [
                    { value: 'Solid' },
                    { value: 'Great' },
                    { value: 'Good' },
                    { value: 'Unproven' }
                ],
                order: 3
            }),
            new question_base_1.QuestionsGroup({
                key: 'fullName',
                label: 'Full Name',
                questions: [
                    new question_textbox_1.TextboxQuestion({
                        key: 'firstName',
                        label: 'First name',
                        value: 'Bombasto',
                        validations: [
                            { type: 'required', errors: [
                                    { key: 'required', msg: 'First name is required' }
                                ]
                            },
                            { type: 'maxLength', args: [5], errors: [
                                    { key: 'maxLength', msg: 'Max length is 5' }
                                ]
                            },
                            { type: 'minLength', args: [2], errors: [
                                    { key: 'minLength', msg: 'Min length is 2' }
                                ]
                            }
                        ],
                        order: 1
                    }),
                    new question_textbox_1.TextboxQuestion({
                        key: 'lastName',
                        label: 'Last name',
                        value: 'Vardi',
                        validations: [
                            { type: 'required', errors: [
                                    { key: 'required', msg: 'First name is required' }
                                ]
                            },
                            { type: 'maxLength', args: [5], errors: [
                                    { key: 'maxLength', msg: 'Max length is 5' }
                                ]
                            },
                            { type: 'minLength', args: [2], errors: [
                                    { key: 'minLength', msg: 'Min length is 2' }
                                ]
                            }
                        ],
                        order: 1
                    }),
                    new question_base_1.QuestionsGroup({
                        key: 'address',
                        label: 'Address',
                        questions: [
                            new question_textbox_1.TextboxQuestion({
                                key: 'street',
                                label: 'Street',
                                value: '',
                                validations: [
                                    { type: 'required', errors: [
                                            { key: 'required', msg: 'First name is required' }
                                        ]
                                    },
                                    { type: 'maxLength', args: [5], errors: [
                                            { key: 'maxLength', msg: 'Max length is 5' }
                                        ]
                                    },
                                    { type: 'minLength', args: [2], errors: [
                                            { key: 'minLength', msg: 'Min length is 2' }
                                        ]
                                    }
                                ],
                                order: 1
                            }),
                            new question_textbox_1.TextboxQuestion({
                                key: 'number',
                                label: 'Number',
                                value: '',
                                validations: [
                                    { type: 'required', errors: [
                                            { key: 'required', msg: 'First name is required' }
                                        ]
                                    },
                                    { type: 'maxLength', args: [5], errors: [
                                            { key: 'maxLength', msg: 'Max length is 5' }
                                        ]
                                    },
                                    { type: 'minLength', args: [2], errors: [
                                            { key: 'minLength', msg: 'Min length is 2' }
                                        ]
                                    }
                                ],
                                order: 1
                            })
                        ]
                    })
                ]
            }),
            new question_checkbox_1.CheckboxQuestion({
                key: 'lastName',
                label: 'Last name',
                value: false,
                validations: [
                    {
                        type: 'required',
                        errors: [
                            { key: 'required', msg: 'First name is required' }
                        ]
                    }
                ],
                order: 1
            }),
            new question_textbox_1.TextboxQuestion({
                key: 'emailAddress',
                label: 'Email',
                type: 'email',
                order: 2
            })
        ];
        return questions; //questions.sort((a, b) => a.order - b.order);
    };
    return QuestionService;
}());
exports.QuestionService = QuestionService;
//# sourceMappingURL=question.service.js.map