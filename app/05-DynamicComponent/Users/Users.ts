/**
 * Created by Eyal on 4/12/2016.
 */
import {Component} from "angular2/core";
import {UserProxy} from "./UserProxy";
import {Global} from "../../ngEx/Global";
//import {User} from "./User/User";

@Global()
@Component({
    selector:'users',
    //providers:[UserProxy],
    //directives: [User],
    template: `
    Number : <input type="number" #i value="5">
    <button (click)="load(i.value)">Load</button>
    <hr>

    <user-container *ngFor="let user of users" [source]="user">
            {{user.name | json}}
    </user-container>
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