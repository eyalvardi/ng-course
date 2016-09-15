/**
 * Created by Eyal on 6/1/2016.
 */
import {
    Component,
    Input,
    ElementRef,
    NgZone,
    Renderer,
    ChangeDetectorRef,
    ApplicationRef
} from "@angular/core";
/*import $ from 'jquery';*/

declare var $:any;

export const logs:string[] = [];
var lastComponent:string;
var lastEvent:string;

function resetLog(){
    logs.length = 0;
    lastComponent = null;
    lastEvent = null;
}


export function logEvent(component:string,event:string){
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
    styles:[`:host{display: block;}`],
    template :`
<div>
    <button class="tick">Tick</button>
    <button class="draw">Draw</button>
    <button class="clear-draw"> Clear Draw {{logs.length}} </button>
    <!--<button class="clear-logs">Clear {{logs.length}}</button>-->
    
    
    <div id="diagram" class="diagram">
        <div>diagram</div>
    </div>
    <!--<ul class="logs">
        <li *ngFor="let log of logs">{{log}}</li>              
    </ul>--> 
</div>    
`
})
export class SequenceDiagram{
    constructor(
        private zone:NgZone,
        private cd: ChangeDetectorRef,
        private elmRef:ElementRef,
        private render:Renderer,
        private app: ApplicationRef
    ){}
    _log:string;
    diagram:any;
    elements:{[k:string]:any} = {};

    ngOnInit(){
        /*var clear =
        this.elmRef.nativeElement
            .getElementsByClassName('clear');
        this.zone.runOutsideAngular(()=>{
            clear[0]
                .addEventListener('click',()=>{
                    clear[0].value += '!';
                });
        });*/

        this.addEventListener('draw','click',()=>{
            this.draw();
        });
        this.addEventListener('clear-draw','click',()=>{
            this.clearDraw();
        });
        /*this.addEventListener('clear-logs','click',()=>{
            this.clearLogs();
        });*/
        this.addEventListener('tick','click',()=>{
            this.tick();
        });
        this.findElementByClass('diagram');
        this.findElementByClass('logs');
    }
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

        this.drawLogs();
    }
    addEventListener(className:string,event:string,fn:Function){
        this.findElementByClass(className);

        this.zone.runOutsideAngular(()=>{
            this.elements[className].addEventListener(event,fn);
        });
    }
    findElementByClass(className:string){
        let results =
            this.elmRef.nativeElement
                .getElementsByClassName(className);
        if(results.length > 0){
            this.elements[className] = results[0];
        } else{
            //debugger;
        }
    }
    clearDivChildElements(div:HTMLDivElement){
        if(!div) return;
        while(div.firstChild){
            div.removeChild(div.firstChild);
        }
    }

    @Input()
    set title(value){
        if(value != this._log){

        }
        this._log = value;
    }
    get logs(){
        return logs
    }

    clearLogs(){
        resetLog();
        let ul = $(this.elements['logs']);
        $('li',ul).remove();
        this.cd.detectChanges();
    }
    drawLogs(){
        let ul = $(this.elements['logs']);
        this.logs.forEach(log=>{
            ul.append(`<li>${log}</li>`)
        });
    }

    tick(){
        this.app.tick();
    }

    clearDraw(div?: HTMLDivElement){
        this.clearLogs();
        div = div || this.elements['diagram'];
        this.clearDivChildElements(div);
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