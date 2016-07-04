import { Component, Input, OnInit }  from '@angular/core';
import {FormGroup, REACTIVE_FORM_DIRECTIVES, FormControl} from '@angular/forms';
import {QuestionBase} from "../models/question-base";
import {QuestionControlService} from "./question-control.service";
import {DynamicFormQuestionComponent} from "./dynamic-form-question.component";

@Component({
    moduleId: module.id,
    selector: 'dynamic-form',
    styles:[`
        .row-margin{
            margin: 8px;
        }
    `,
        `
        .ng-valid {
          border-left: 5px solid #42A948; /* green */
        }
        .ng-invalid {
          border-left: 5px solid #a94442; /* red */
        }
    `],
    template: `
<div>
  <form (ngSubmit)="onSubmit()" #f="ngForm" 
    [formGroup]="myform" 
    [class.ng-invalid]="!getIsValid(f.valid)">
    <div *ngFor="let question of questions" class="row-margin">
      <df-question [question]="question" [form]="myform"></df-question>
    </div>
    
    <div class="form-row">
      <button type="submit" [disabled]="!myform.valid">Save</button>
    </div>
    
  </form>
  
  <div *ngIf="payLoad" class="form-row">
    <strong>Saved the following values</strong><br>
    <pre>{{payLoad | json}}</pre>
  </div>
</div>

`,
    directives: [DynamicFormQuestionComponent, REACTIVE_FORM_DIRECTIVES],
    providers:  [QuestionControlService]
})
export class DynamicFormComponent{
    _questions: QuestionBase<any>[] = [];

    @Input()
    set questions(value){
        this._questions = value;
        this.myform = this.qcs.toFormGroup(this._questions);
        this.myform.statusChanges
            .subscribe(s=>console.log(`myform.status: ${s}`));
    }
    get questions(){ return this._questions;}

    myform: FormGroup;
    payLoad = '';

    constructor(private qcs: QuestionControlService) {  }

    getIsValid(valid){
        if(valid) return true;

        let result = true;
        for(let c in this.myform.controls){
            if(this.myform.controls[c] instanceof FormControl){
                result = result && this.myform.controls[c].valid;
                if(!result) return false;
            }
        }
        return result;

    }

    onSubmit() {
        this.payLoad = this.myform.value;
    }
}
