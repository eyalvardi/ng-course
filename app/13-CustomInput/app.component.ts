import {Component} from "@angular/core";
import {FormGroup, FormControl} from "@angular/forms";

@Component({
  selector: 'my-app',
  template: `
<div>
    <h1> Custom Input <link-to-code></link-to-code></h1>
    <form [formGroup]="form">
        <!--<checkBoxList
             size="5"        
             name="test2"            
             formControlName="test2"
             >
        </checkBoxList>-->
        
        <checkBoxList
             size="5"        
             name="test2"            
             [(ngModel)]="test"
             [ngModelOptions]="{standalone: true}"
             >
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