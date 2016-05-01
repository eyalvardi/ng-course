/**
 * Created by Eyal on 4/12/2016.
 */
import {Component, Input} from "angular2/core";
import {Global} from "../../ngEx/Global";
import {UserContainer} from "./UserContainer/UserContainer";

@Global()
@Component({
    selector:'mr-user',
    moduleId : __moduleName,
    templateUrl:'mruser.html',
    styleUrls:['user.css']
})
export class MrUser{
    counter:number = 0;
    
    // Not work...
    @Input()data:any;

    constructor(private parent:UserContainer){
        //this.data = parent._user;
    }
    /*ngOnInit(){
        setInterval(()=>{
            this.counter++;
        },500)
    }*/
}

@Global()
@Component({
    selector:'miss-user',
    moduleId : __moduleName,
    templateUrl:'missuser.html',
    styleUrls:['user.css']
})
export class MissUser{

    // Not work...
    @Input()data:any;

    constructor(private parent:UserContainer){
        this.data = parent._user;
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