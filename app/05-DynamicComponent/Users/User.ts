/**
 * Created by Eyal on 5/03/2016.
 */
import {Component, Input, Renderer, ElementRef, NgZone} from "@angular/core";
import {Global} from "ngEx";
import {UserContainer} from "./UserContainer/UserContainer";


@Global()
@Component({
    selector   :'mr-user',
    moduleId   : module.id,
    styles:[`
        :host{
            display: block;
        }
    `],
    templateUrl:'mruser.html',
    styleUrls  :['user.css']
})
export class MrUser{
    counter:number = 0;
    // Not work...
    _data:any;
    get data(){return this._data;}
    @Input('user')
    set data(value){
        this._data = value;
    }

    constructor(private render:Renderer,
                private elmRef:ElementRef,
                private zone: NgZone
    ){}

    /*constructor(private parent:UserContainer){
        setTimeout(()=>{
            this.data = parent._user;
            console.log(this.data);
        },7000);
    }*/

    ngDoCheck(){
        if(!this.render) return;
        this.render.setElementStyle(
            this.elmRef.nativeElement,'border','2px solid red');
        this.zone.runOutsideAngular(()=>{
            setTimeout(()=>{
                this.render.setElementStyle(
                    this.elmRef.nativeElement,'border','0');
            },700);
        });
    }
}

@Global()
@Component({
    selector   :'miss-user',
    moduleId   : module.id,
    styles:[`
        :host{
            display: block;
        }
    `],
    templateUrl:'missuser.html',
    styleUrls  :['user.css']
})
export class MissUser{

    // Not work...
    _data:any;
    get data(){return this._data;}
    @Input('user')
    set data(value){
        this._data = value;
    }

    /*constructor(private parent:UserContainer){
        setTimeout(()=>{
            this.data = parent._user;
            console.log(this.data);
        },7000);
    }*/
}