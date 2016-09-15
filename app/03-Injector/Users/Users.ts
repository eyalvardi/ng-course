/**
 * Created by Eyal Vardi on 5/03/2016.
 */
import {Component}  from "@angular/core";
import {sUserProxy}  from "./UserProxy";

@Component({
    selector:'users',
    //providers:[UserProxy],
    //directives: [User],
    template: `
    Number : <input type="number" #i value="5">
    <button (click)="load(i.value)">Load</button>
    <hr>

    <user-profile *ngFor="let user of users" [source]="user">
            {{user.name | json}}
    </user-profile>
`
})
export class Users{
    
    users:any[];
    
    constructor(/*private proxy: UserProxy*/){}
    
    load(num){
        sUserProxy
            .load(num)
            .then((users)=>{
                this.users = users
            });
    }
}