import {Component, Input, forwardRef} from '@angular/core';
import {FormGroup, REACTIVE_FORM_DIRECTIVES, FormControl} from '@angular/forms';
import {QuestionBase} from "../models/question-base";

/*function Component(obj){
    (target)=>{
        // TODO: target.anotation = obj;
        return target;
    }
}*/



@Component({
    selector: 'df-question',
    directives: [
        REACTIVE_FORM_DIRECTIVES,
        forwardRef(() => DynamicFormQuestionComponent)
    ],
    styles:[`
        .ng-valid {
          border-left: 5px solid #42A948; /* green */
        }
        .ng-invalid {
          border-left: 5px solid #a94442; /* red */
        }
        .ng-touched{
            border-bottom: 1px solid dodgerblue;
        }
        .ng-dirty{
                border-bottom: 2px solid #2aabd2;
        }
    `],
    template: `
    <div [formGroup]="form" style="margin: 2px;padding: 2px">
      <!-- Label -->
      <label *ngIf="getIsLabel(question.controlType)" 
             [attr.for]="question.key">
             {{question.label}}
      </label>
      
      <!-- Input type -->
      <div [ngSwitch]="question.controlType" >
        
        <div *ngSwitchCase="'group'" style="padding: 2px">
            <form #f="ngForm"                
                [formGroup]="form.controls[question.key]">
            <fieldset [class.ng-invalid]="!getIsValid(f.valid,form.controls[question.key])">
                <legend> {{question.label}} </legend>                
                <div *ngFor="let q of  question.questions" class="row-margin">
                  <df-question [question]="q" 
                      [form]="form.controls[question.key]">                  
                  </df-question>
                </div>
            </fieldset>
            </form>
        </div>
        
        <input 
            *ngSwitchCase="'textbox'" 
            [formControlName]="question.key"
            [id]="question.key" 
            [type]="question.type">
            
        <div *ngSwitchCase="'checkbox'">
             <input             
                [formControlName]="question.key"
                [id]="question.key" 
                type="checkbox"> {{question.label}}
        </div>
        
        <fieldset *ngSwitchCase="'radio'">
            <legend>{{question.label}}</legend>
            <template ngFor let-v [ngForOf]="question.options" >
                <input
                    [formControlName]="question.key"
                    [name]="question.name" 
                    type="radio" 
                    [value]="v.value"> {{v.value}}<br>
            </template>
            
        </fieldset>            
        
        <select 
            [id]="question.key" 
            *ngSwitchCase="'dropdown'" 
            [formControlName]="question.key">
          <option 
                *ngFor="let opt of question.options" 
                [value]="opt.key">
                {{opt.value}}
          </option>
        </select>
        
      </div> 
      
      <!-- Errors Messages -->
      <!--<div class="errorMessage" *ngIf="!isValid">
        {{question.label}} is required
      </div>-->
      <div class="text-warning" *ngFor="let e of errors">{{e}}</div>
    </div>
`})
export class DynamicFormQuestionComponent {
    @Input() question: QuestionBase<any>;
    @Input() form: FormGroup;

    get isValid() { return this.form.controls[this.question.key].valid; }
    get errors() {
        let result = [];
        let errors = this.form.controls[this.question.key].errors;



        for(let error in errors){
            this.question
                .validations
                .filter(v => error.toLowerCase() == v.type.toLowerCase())
                .forEach(vld =>{
                    vld.errors.forEach(err=>{
                        /*, Function status: ${errors[error]}*/
                        result.push(`Error Message: ${err.msg}`);
                    })
                });
        }
        return result;
    }
    getIsLabel(type){
        let r =  type == 'checkbox' || type == 'group' || type == 'radio'
        return !r;
    }

    getIsValid(valid,form){
        if(valid) return true;

        let result = true;
        for(let c in form.controls){
            if(form.controls[c] instanceof FormControl){
                result = result && form.controls[c].valid;
                if(!result) return false;
            }
        }
        return true;
    }



}
