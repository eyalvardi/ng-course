import {Component,Output,EventEmitter} from "@angular/core";
import { FormGroup, FormControl,REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

@Component({
    selector: 'add-question-form',
    directives: [REACTIVE_FORM_DIRECTIVES],
    providers: [],
    styles: [],
    template: `
<form [formGroup]="form" class="form-inline">
  <div class="form-group">
    <label for="key">Key</label>
    <input formControlName="key" type="text" class="form-control" id="key" placeholder="question key">
  </div>
  <div class="form-group">
    <label for="label">label</label>
    <input formControlName="label" type="text" class="form-control" id="label" placeholder="label">
  </div>
  <div class="form-group">
    <label for="controlType">Control type</label>
    <select formControlName="controlType">
        <option>TextBox</option>
        <option>Dropdown</option>
    </select>
  </div>
  <button type="submit" class="btn btn-default" (click)="addQuestion()">Add Question</button>
</form>
`
})
export class AddQuestionForm {
    form:FormGroup = new FormGroup({
        'key': new FormControl(''),
        'label': new FormControl(''),
        'controlType': new FormControl(''),
    });

    @Output()
    addedQuestion = new EventEmitter();

    addQuestion(value){
        console.log(`new question: ${JSON.stringify(this.form.value)}`);
        this.addedQuestion.emit(this.form.value);
    }
}