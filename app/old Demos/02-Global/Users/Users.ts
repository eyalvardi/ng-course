/**
 * Created by Eyal Vardi.
 */
import {Component} from "@angular/core";
import {getComponentMetadata, ngExComponent, Global} from 'ngEx';
import {UserProxy} from "./UserProxy";
import "./User/User";

//declare var __moduleName:string;

/*@Component({
    selector:'users',
    providers:[UserProxy],
    directives: [User],
})
class BaseUser{}*/

//@ngExComponent
@Global()
@Component({
    selector:'users',
    template: `
    Number : <input type="number" #i value="5">
    <button (click)="load(i.value)">Load</button>
    <hr>
    <user-profile
        *ngFor="let user of users" [source]="user">
    </user-profile>
`
})
export class Users{
    
    users:any[];
    
    constructor(private proxy: UserProxy){}
    
    load(num){
        this.proxy
            .load(num)
            .then((users)=>{
                this.users = users
            });
    }
}