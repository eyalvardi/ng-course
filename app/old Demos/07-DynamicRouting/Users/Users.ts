/**
 * Created by Eyal on 4/12/2016.
 */
import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {UserProxy} from "./UserProxy";
import {Global} from "../../ngEx/Global";
import {DynamicRouteConfig} from "../../ngEx/DynamicRouteConfigurator";

//import {User} from "./User/User";

var proxy = new UserProxy();

@Global()
@Component({
    selector:'users',
    //providers:[UserProxy],
    directives:[ROUTER_DIRECTIVES],
    template: `
    Number : <input type="number" #i value="5">
    <button (click)="load(i.value)">Load</button>
            
    <hr>

    <user-profile *ngFor="let user of users" [source]="user">
            {{user.name | json}}
    </user-profile>
`
})
@DynamicRouteConfig('app/07-DynamicRouting/Users/users.json')
export class Users{
    
    users:any[];
    
    constructor(/*private proxy: UserProxy*/){}
    
    load(num){
        proxy
            .load(num)
            .then((users)=>{
                this.users = users
            });
    }
}