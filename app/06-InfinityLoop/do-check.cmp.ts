import {Component, DoCheck, Renderer, NgZone, ElementRef, Input} from "@angular/core";
import {LifeCycleHooksDump} from "./BaseDemo";

@Component({
    selector: 'do-check',
    directives: [],
    providers: [],
    styles:[`
    .box{        
        width: 100%;
        height: 100%;
    }    
    :host{
        border: 1px solid black;
        display: block;
        padding: 8px;
        width: 25px;
        height: 25px;
    }
`],
    template: `
    <span (click)="onClick()">{{getCounter()}}</span>
`
})
export class DoCheckComp extends LifeCycleHooksDump{
    @Input()name:string;
    @Input() set updateName(value){
        console.log(`do-check set name: ${value}`);
    }
    isCheck:boolean;
    isStart:boolean;
    idInterval:any;
    getCounter(){
        console.log(`do-check getCounter(): ${this._counter}`);
        return this._counter;
    }
    _counter:number | string= "X";
    get counter(){
        console.log(`do-check get counter: ${this._counter}`);
        return this._counter;
    }
    set counter(value){ this._counter = value; }


    constructor(private render:Renderer,
                private zone:NgZone,
                private elmRef:ElementRef){
        super("doCheckCmp");
    }

    ngDoCheck(){
        console.log(`do-check DoCheck (tick):  (${this.name})`);
        if(!this.render) return;

        this.render.setElementStyle(
            this.elmRef.nativeElement,'background-color','red');
        this.zone.runOutsideAngular(()=>{
            setTimeout(()=>{
                this.render.setElementStyle(
                    this.elmRef.nativeElement,'background-color','transparent');
            },700);
        });
    }

    onClick(){
        if(this.isStart){
            this.stop();
            this.isStart = false;
        } else {
            this.start();
            this.isStart = true;
        }
    }

    start(){
        this.counter = 0;
        this.idInterval = setInterval(()=>{
            if(this.counter % 10 == 0 ){ this.counter=0; }
            this.counter++;
        },1000);
    }
    stop(){
        clearInterval(this.idInterval);
        this.counter = 'X';
    }
}