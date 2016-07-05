import {Component, Output, EventEmitter} from "@angular/core";
import {FormGroup, FormControl, REACTIVE_FORM_DIRECTIVES} from '@angular/forms';

@Component({
    selector: 'add-question-form',
    directives: [REACTIVE_FORM_DIRECTIVES],
    providers: [],
    styles: [],
    template: `

<form [formGroup]="form" class="form-inline">
    <fieldset>
      <legend>Metadata to add question</legend>
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
            <option value="textbox">TextBox</option>
            <option value="checkbox">CheckBox</option>
            <option value="radio">Radio</option>
            <option value="dropdown">DropDown</option>
        </select>
      </div>
      <button type="submit" class="btn btn-default" (click)="addQuestion()">Add Question</button>
      <!--<button (click)="test()">Change</button>-->
    </fieldset>
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
    /*test(){
     this.form.controls['key'].updateValue('eyal vardi');
     }*/
    addQuestion(value) {
        console.log(`new question: ${JSON.stringify(this.form.value)}`);
        this.addedQuestion.emit(this.form.value);
    }
}