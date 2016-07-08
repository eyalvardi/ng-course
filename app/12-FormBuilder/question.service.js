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
var http_1 = require("@angular/http");
var index_1 = require("./models/index");
require('rxjs/add/operator/map');
var path = module.id;
var index = path.lastIndexOf('/');
path = path.substring(0, index);
console.log("path: " + path);
var QuestionService = (function () {
    function QuestionService(http) {
        this.http = http;
        this.url = path + "/form-metadata.json";
        this.questions = [];
    }
    QuestionService.prototype.load = function () {
        var _this = this;
        console.log("++++++++++++ url: " + this.url);
        return this.http.get(this.url)
            .map(function (res) { return res.json(); })
            .map(function (data) {
            _this.data = data;
            return _this.buildQuestions(data);
        });
    };
    QuestionService.prototype.buildQuestions = function (data) {
        var _this = this;
        var questions = [];
        data.forEach(function (item) {
            if (item.controlType == 'group') {
                var group = new index_1.QUESTION_MODELS[item.controlType](item);
                group.questions = _this.buildQuestions(item.questions);
                questions.push(group);
            }
            else {
                questions.push(new index_1.QUESTION_MODELS[item.controlType](item));
            }
        });
        return questions;
    };
    QuestionService.prototype.getQuestions = function () {
        var questions = [
            new index_1.DropdownQuestion({
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
            new index_1.RadioQuestion({
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
            new index_1.QuestionsGroup({
                key: 'fullName',
                label: 'Full Name',
                controlType: 'group',
                questions: [
                    new index_1.TextboxQuestion({
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
                    new index_1.TextboxQuestion({
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
                    new index_1.QuestionsGroup({
                        key: 'address',
                        label: 'Address',
                        controlType: 'group',
                        questions: [
                            new index_1.TextboxQuestion({
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
                            new index_1.TextboxQuestion({
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
            new index_1.CheckboxQuestion({
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
            new index_1.TextboxQuestion({
                key: 'emailAddress',
                label: 'Email',
                type: 'email',
                order: 2
            })
        ];
        return questions; //questions.sort((a, b) => a.order - b.order);
    };
    QuestionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], QuestionService);
    return QuestionService;
}());
exports.QuestionService = QuestionService;
//# sourceMappingURL=question.service.js.map