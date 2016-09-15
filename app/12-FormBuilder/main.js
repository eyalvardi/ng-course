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
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var share_module_1 = require("../share/share.module");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/http");
var question_service_1 = require("./question.service");
var add_question_component_1 = require("./components/add-question.component");
var dynamic_form_component_1 = require("./components/dynamic-form.component");
var dynamic_form_question_component_1 = require("./components/dynamic-form-question.component");
var question_control_service_1 = require("./components/question-control.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                dynamic_form_component_1.DynamicFormComponent,
                dynamic_form_question_component_1.DynamicFormQuestionComponent,
                add_question_component_1.AddQuestionForm],
            providers: [
                question_service_1.QuestionService,
                question_control_service_1.QuestionControlService],
            bootstrap: [app_component_1.AppComponent],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                share_module_1.ShareModule],
            exports: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
platform_browser_dynamic_1.platformBrowserDynamic()
    .bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map