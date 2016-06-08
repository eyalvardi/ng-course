/**
 * Created by Eyal on 6/1/2016.
 */
import {Component, Input, ElementRef, NgZone} from "@angular/core";

export const logs:string[] = [];

var lastComponent:string;
var lastEvent:string;
var isClean:boolean = false;

function resetLog(){
    logs.length = 0;
    isClean = true;
    lastComponent = null;
    lastEvent = null;
}


export function logEvent(component:string,event:string){
    if(isClean) return;
    if(!lastComponent || lastComponent !== component){
        logs.push(`angular-->${component}:'`);
    }
    logs.push(`${component}->${component}:${lastEvent}`);
    lastComponent = component;
    lastEvent=event;
}
export function clearLogs(){
    logs.length = 0;
}
function getLogs(){
    var log:string='';
    logs.forEach(l=>{
       log += `${l}\n`;
    });
    return log;
}
declare var Diagram:any;

@Component({
    selector: 'diagram',
    template :`
    <button (click)="draw()">Draw</button>
    <button (click)="clearDraw(div)">Clear Draw</button>
    <button (click)="clear()">Clear</button>
    <button class="clear">Clear 2</button>
    <div id="diagram" #div>
        <div>diagram</div>
    </div>
`
})
export class SequenceDiagram{
    constructor(private zone:NgZone, private elmRef:ElementRef){}
    _log:string;
    diagram:any;

    ngOnInit(){
        var clear =
        this.elmRef.nativeElement
            .getElementsByClassName('clear');
        this.zone.runOutsideAngular(()=>{
            clear[0]
                .addEventListener('click',()=>{
                    clear[0].value += '!';
                });
        });
    }

    @Input()
    set title(value){
        if(value != this._log){

        }
        this._log = value;
    }

    clear(){
        resetLog();
        this.zone.runOutsideAngular(()=>{
            setTimeout(()=>{
                isClean = false;
            },1000);
        })
    }

    clearDraw(div?: HTMLDivElement){
        while(div.firstChild){
            div.removeChild(div.firstChild);
        }
    }
    draw(){
        
        /*logs.forEach(l=>{
            diagram = Diagram.parse(l);
        });*/
        this.diagram = Diagram.parse(getLogs());
        this.diagram.setTitle(this.title);
        this.diagram.drawSVG('diagram');
    }
}