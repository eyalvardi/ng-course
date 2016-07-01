import {Component} from "@angular/core";
import {CheckBoxListComponent} from "./checkBoxList.component";
import {REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl} from "@angular/forms";

@Component({
  selector: 'my-app',
  providers:[],
  viewProviders:[],
  directives:[CheckBoxListComponent,REACTIVE_FORM_DIRECTIVES],
  template: `
<div>
    <h1> Custom Input</h1>
    <form [formGroup]="form">
        <checkBoxList
             size="5"        
             name="test2"            
             [(ngModel)]="test">
        </checkBoxList>
    </form>
    <div>test: {{test}}</div>
     test2: <input type="text" name="iTest2" [(ngModel)]="test"><br>
     
</div>
`
})
export class AppComponent {

    form:FormGroup = new FormGroup({
        test2: new FormControl('')
    });

    test:string = '1,3';

    constructor(){
        this.form.valueChanges.subscribe(v=>{
            console.log(JSON.stringify(v));
        })
    }
}