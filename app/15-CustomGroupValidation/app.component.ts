/**
 * Created by Eyal on 8/16/2016.
 */
import {Component} from "@angular/core";
import {
    FormArray, FormControl, FormGroup
} from "@angular/forms";

@Component({
    selector: 'my-app',
    styles: [`
    .box{
        border: 1px solid black;
    }
     input.ng-invalid {
            background-color: #FA787E;
     }

     input.ng-valid {
            background-color: #78FA89;
     }
     .ng-invalid{
        border: 2px solid red;
        padding: 5px;
     }
    .left{
        text-align: left;        
    }
    li{
        margin: 3px;
    }
`],
    template: `
<div>
<h3> Custom Group Validation</h3>
<p>
This custom validation (distinct) check the you don't add the same name twice.
</p>
<form [formGroup]="myForm">
    name : <input type="text" formControlName="inputName" >
    <button (click)="add()">Add</button><br>
    <hr>
    <div class="left">
        names: <br>
        <ul formArrayName="names">
            <li *ngFor="let item of namesArray.controls; let i = index">
                <input type="text" [formControlName]="i">
                <button (click)="removeAt(i)">X</button><br>
            </li>
        </ul>        
        <div *ngIf="namesArray.hasError('duplicate')">
            duplicate entries
        </div>
    </div>
</form>
</div>
`})
export class AppComponent {

    add(){
        this.namesArray.push(
            new FormControl(this.myForm.get('inputName').value)
        );
    }

    removeAt(i:number){
        this.namesArray.removeAt(i);
    }

    namesArray:FormArray =  new FormArray( [] , this.customGroupValidation  );

    myForm:FormGroup = new FormGroup({
        inputName: new FormControl(''),
        names: this.namesArray
    });

    customGroupValidation (formArray) {
        let isError = false;

        var result = _.groupBy( formArray.controls , c => c.value );
        for (let prop in result) {
            if (result[prop].length > 1) {
                isError = true;
                _.forEach(result[prop], function (item) {
                    item._status = "INVALID";
                    //item._errors['eyal']={'duplicate':true};
                    //item.ctrl.$setValidity('distinct', false);
                });
            } else {
                result[prop][0]._status = 'VALID';
                //result[prop][0].ctrl.$setValidity('distinct', true);
            }
        }
        if(isError){ return {'duplicate':'duplicate entries'}}
    }
}