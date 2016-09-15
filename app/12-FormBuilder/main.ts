import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {ShareModule} from "../share/share.module";
import {AppComponent} from "./app.component";
import {HttpModule} from "@angular/http";
import {QuestionService} from "./question.service";
import {AddQuestionForm} from "./components/add-question.component";
import {DynamicFormComponent} from "./components/dynamic-form.component";
import {DynamicFormQuestionComponent} from "./components/dynamic-form-question.component";
import {QuestionControlService} from "./components/question-control.service";


@NgModule({
    declarations:[
         AppComponent
        ,DynamicFormComponent
        ,DynamicFormQuestionComponent
        ,AddQuestionForm],
    providers   :[
         QuestionService
        ,QuestionControlService],
    bootstrap   :[AppComponent],
    imports     :[
         BrowserModule
        ,FormsModule
        ,ReactiveFormsModule
        ,HttpModule
        ,ShareModule],
    exports     :[]
})
export class AppModule{}

platformBrowserDynamic()
    .bootstrapModule(AppModule);



