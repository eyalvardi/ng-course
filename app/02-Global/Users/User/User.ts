import {Component, Input} from "@angular/core";
import {ControlGroup,Control} from '@angular/common';
import {Global} from "ngEx";

declare var __moduleName:string;

@Global()
@Component({
    selector:'user-profile',
    moduleId: __moduleName,
    styleUrls:['user.css','validations.css'],
    templateUrl:'user.html',
    exportAs: 'user'
})
export class User{
    @Input('source')user:any;
    @Input()isEdit:boolean = false;
    
    myForm:ControlGroup = new ControlGroup({
        "fName": new Control(''),
        "lName": new Control('')
    });

    ngOnInit(){
        this.myForm
            .valueChanges
            //.filter(f=> f.lName.length > 2)
            .subscribe((f)=>{
            console.log(f);
        })
    }
    
    get fName(){
        return this.user.name.first;
    }
    set fName(value){
        this.user.name.first = value;
    }

    /*update(value){
        console.log(value);
        this.fName = value.fname;
        this.user.name.last = value.lname;
    }*/

    update(){
        this.fName = this.myForm.fName.value;
        this.user.name.last = this.myForm.fName.value;
    }
}