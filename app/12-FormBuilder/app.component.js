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
var dynamic_form_component_1 = require('./components/dynamic-form.component');
var question_service_1 = require('./question.service');
var add_question_component_1 = require("./components/add-question.component");
var index_1 = require("./models/index");
var link_to_code_component_1 = require("../share/link-to-code.component");
require('rxjs/add/operator/map');
var AppComponent = (function () {
    function AppComponent(service) {
        var _this = this;
        this.questions = [];
        //this.questions = service.getQuestions();
        service.load().subscribe(function (q) {
            _this.questions = q;
        });
    }
    AppComponent.prototype.addQuestion = function (qs) {
        this.questions = this.questions.concat([
            new index_1.QUESTION_MODELS[qs.controlType](qs)
        ]);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            styles: ["\n        .box{\n            border: 2px solid black;\n            text-align: left;\n            margin: 8px;\n        }\n    "],
            template: "    \n      <div style=\"text-align: left\">\n      <h2>Form Builder <link-to-code></link-to-code></h2>\n      <add-question-form (addedQuestion)=\"addQuestion($event)\"></add-question-form>\n      </div>\n      \n      <table class=\"table\">        \n        <tr>\n            <td>\n                <dynamic-form [questions]=\"questions\"></dynamic-form>\n            </td>        \n            <td>\n                <h3> Form Metadata</h3>\n                <pre style='overflow:scroll; width:400px;height:400px;'>\n                    {{questions | json}}\n                </pre>\n            </td>            \n          </tr>\n    </table>\n  ",
            directives: [dynamic_form_component_1.DynamicFormComponent, add_question_component_1.AddQuestionForm, link_to_code_component_1.LinkToCodeComponent],
            providers: [question_service_1.QuestionService]
        }), 
        __metadata('design:paramtypes', [question_service_1.QuestionService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map