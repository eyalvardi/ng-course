import { Component }       from '@angular/core';
import { DynamicFormComponent }     from './components/dynamic-form.component';
import { QuestionService } from './question.service';
import {AddQuestionForm} from "./components/add-question.component";
import {TextboxQuestion} from "./models/question-textbox";
import {QUESTION_MODELS} from "./models/index";
import {LinkToCodeComponent} from "../share/link-to-code.component";
import 'rxjs/add/operator/map';

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
      <div style="text-align: left">
      <h2>Form Builder <link-to-code></link-to-code></h2>
      <add-question-form (addedQuestion)="addQuestion($event)"></add-question-form>
      </div>
      
      <table class="table">        
        <tr>
            <td>
                <dynamic-form [questions]="questions"></dynamic-form>
            </td>        
            <td>
                <h3> Form Metadata</h3>
                <pre style='overflow:scroll; width:400px;height:400px;'>
                    {{questions | json}}
                </pre>
            </td>            
          </tr>
    </table>
  `})
export class AppComponent {
    questions: any[] = [];

    constructor(service: QuestionService) {
        //this.questions = service.getQuestions();
        service.load()
            .subscribe(
                q => { this.questions = q; },
                // error
                ()=>{ this.questions = service.getQuestions(); }
            );
    }

    addQuestion(qs){
        this.questions = [
            ...this.questions,
            new QUESTION_MODELS[qs.controlType](qs)
        ];
    }
}
