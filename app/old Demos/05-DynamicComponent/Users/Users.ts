/**
 * Created by Eyal Vardi on 5/03/2016.
 */
import {Component} from "@angular/core";
import {UserProxy} from "./UserProxy";

@Component({
    selector:'users',
    template: `
    Number : <input type="number" #i value="5">
    <button (click)="load(i.value)">Load</button>
    <button (click)="tick()">Tick</button>
    <hr>

    <user-container 
        *ngFor="let user of users" [source]="user">
    </user-container>
`})
export class Users{
    
    users:any[];
    
    constructor(private proxy: UserProxy){}

    tick(){}

    load(num){
        this.proxy
            .load(num)
            .then((users)=>{
                this.users = users
            });
    }
}