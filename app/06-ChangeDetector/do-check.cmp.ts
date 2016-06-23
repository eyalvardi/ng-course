import {Component, DoCheck, Renderer, NgZone, ElementRef, Input, ChangeDetectorRef} from "@angular/core";
import {BaseDemo} from "./BaseDemo";

@Component({
    selector: 'do-check',
    directives: [],
    providers: [],
    styles:[`       
    :host{
        border: 1px solid black;
        display: block;        
        margin-right: 12px;        
       
    }
`],
    template: `
    <div style="border: 1px solid black;padding-left: 3px">
        <input type="checkbox" [(ngModel)]="isStart" (change)="onClick()">
        {{counter}}<br>
        <span>Mode : {{getCdMode()}}</span><br>
        <span>State: {{getCdState()}}</span>
    </div>
`
})
export class DoCheckComp extends BaseDemo{
    @Input()name:string;
    @Input() isDetach:boolean = false;

    @Input() set updateName(value){
        console.log(`do-check set name: ${value}`);
    }

    isStart:boolean;
    idInterval:any;

    _counter:number=0;
    get counter(){
        return this._counter;
    }
    set counter(value){ this._counter = value; }


    constructor( render:Renderer,
                 zone:NgZone,
                 elmRef:ElementRef,
                 cd:ChangeDetectorRef
    ){
        super(cd,elmRef,render,zone,"doCheckCmp");
    }

    ngOnDestroy(){
        this.stop();
        super.ngOnDestroy();
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
        if(this.isDetach){
            this.zone.runOutsideAngular(()=>{
                this.internalStart(()=>{this.cd.detectChanges();});
            });
        } else{
            this.internalStart(()=>{});
        }
    }
    internalStart(fn){
        this.counter = 0;
        this.idInterval = setInterval(()=>{
            if(this.counter % 10 == 0 ){ this.counter=0; }
            this.counter++;
            fn();
        },1000);
    }
    stop(){
        clearInterval(this.idInterval);
        this.counter = 0;
    }
}