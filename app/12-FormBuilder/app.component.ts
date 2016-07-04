import { Component }       from '@angular/core';
import { DynamicFormComponent }     from './components/dynamic-form.component';
import { QuestionService } from './question.service';
import {AddQuestionForm} from "./components/add-question.component";
import {TextboxQuestion} from "./models/question-textbox";
import {QUESTION_MODELS} from "./models/index";
@Component({
    selector: 'my-app',
    styles:[`
        .box{
            border: 2px solid black;
            text-align: left;
            margin: 8px;
        }
    `],
    template: `    
      <h2>Form Builder</h2>
      <table class="table">
        <tr>
            <td colspan="2">
                <add-question-form (addedQuestion)="addQuestion($event)"></add-question-form>
            </td>
        </tr>
        <tr>
            <td>
                <dynamic-form [questions]="questions"></dynamic-form>
            </td>        
            <td>
                <h3> Form Metadata</h3>
                <pre>
                    {{questions | json}}
                </pre>
            </td>            
          </tr>
    </table>
  `,
    directives: [DynamicFormComponent,AddQuestionForm],
    providers:  [QuestionService]
})
export class AppComponent {
    questions: any[];

    constructor(service: QuestionService) {
        this.questions = service.getQuestions();
    }

    addQuestion(qs){
        this.questions = [
            ...this.questions,
            new QUESTION_MODELS[qs.controlType](qs)
        ];
    }
}
