import {Component, DoCheck, Renderer, NgZone, ElementRef} from "@angular/core";

@Component({
    selector: 'timer',
    directives: [],
    providers: [],
    styles:[`
    .box{
        margin: -8px -8px;    
        border: 1px solid black;
        width: 24px;
        height: 24px;
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
    <span>{{counter}}</span>
`
})
export class TimerComp implements DoCheck{

    isCheck:boolean;
    counter:number;

    constructor(private render:Renderer,
                private zone:NgZone,
                private elmRef:ElementRef){
        
        this.counter=0;
        
        setInterval(()=>{
            if(this.counter % 100 == 0){ this.counter = 0}
            this.counter++;
        },1500);
    }

    ngDoCheck(){
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
}