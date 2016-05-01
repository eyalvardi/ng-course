/**
 * Created by Eyal on 4/12/2016.
 */
import {Component} from "angular2/core";
import {Global} from "../../ngEx/Global";
import {getComponentMetadata, ngExComponent} from '../../ngEx/metadataUtils';
import {UserProxy} from "./UserProxy";
import {User} from "./User/User";

declare var __moduleName:string;

@Component({
    selector:'users',
    providers:[UserProxy],
    directives: [User],
})
class BaseUser{}

@Global(__moduleName)
@ngExComponent({
    selector:'users',
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
    
    constructor(private proxy: UserProxy){}
    
    load(num){
        this.proxy
            .load(num)
            .then((users)=>{
                this.users = users
            });
    }
}