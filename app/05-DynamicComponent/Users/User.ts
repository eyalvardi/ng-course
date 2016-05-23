/**
 * Created by Eyal on 5/03/2016.
 */
import {Component, Input} from "@angular/core";
import {Global} from "ngEx";
import {UserContainer} from "./UserContainer/UserContainer";

declare var __moduleName:string;

@Global()
@Component({
    selector   :'mr-user',
    moduleId   : __moduleName,
    template: `+++{{data|json}}+++`,
    //templateUrl:'mruser.html',
    styleUrls  :['user.css']
})
export class MrUser{
    counter:number = 0;
    // Not work...
    //@Input()
    data:any;

    constructor(private parent:UserContainer){
        setTimeout(()=>{
            this.data = parent._user;
            console.log(this.data);
        },5000);
    }
}

@Global()
@Component({
    selector   :'miss-user',
    moduleId   : __moduleName,
    template: `+++ {{data|json}} +++`,
    //templateUrl:'missuser.html',
    styleUrls  :['user.css']
})
export class MissUser{

    // Not work...
    //@Input()
    data:any;

    constructor(private parent:UserContainer){
        setTimeout(()=>{
            this.data = parent._user;
            console.log(this.data);
        },5000);
    }
}

@Global()
@Component({    
    selector:'test',
    template:`
    <div>Test: {{_data}}</div>
`
})
export class Test{
    
    _data:string;

    @Input()
    set data(value){
        console.log(`set _data: ${value}`);
        this._data = value;
    }
    get data(){
        console.log(`get _data: ${this._data}`);
        return this._data;
    }
}