/**
 * Created by Eyal on 6/18/2016.
 */
import {Component, ChangeDetectorRef, ElementRef, NgZone, Renderer, Injector, ApplicationRef} from "@angular/core";
import {BaseDemo} from "./BaseDemo";

@Component({
    selector: 'clock',
    styles:[`
        :host{
            display: block;
            position: absolute;
            right: 150px;
            top: 250px; 
            text-align: left;
            margin: 8px;
        } 
        .border{border: 1px solid black;padding: 8px;}
    `],
    template: `
<div>
  <span>{{time}}</span>
</div>
`
})
export class Clock extends BaseDemo{

    time:string = '00:00:00:000';
    isDestroy:boolean = false;

    constructor(render: Renderer,
                zone:   NgZone,
                elmRef: ElementRef,
                cd:     ChangeDetectorRef,
                private app: ApplicationRef
    ) {
        super(cd, elmRef, render, zone, "Clock");
    }
    ngOnInit(){
        this.cd.detach();
        this.zone.runOutsideAngular(()=> {
            this.setTime();
        });
    }
    // @runOutsideAngular()
    setTime(){
        if(this.isDestroy) return;
        let t = new Date();
        this.time = `
            ${t.getHours()}
            :${this.formatNum(t.getMinutes())}
            :${this.formatNum(t.getSeconds())}
            :${t.getMilliseconds()}`;
        this.cd.detectChanges();
        if(t.getSeconds() == 0){
            this.app.tick();
        }
        setTimeout(this.setTime.bind(this),50);
    }
    formatNum(i){ return i < 10 ? `0${i}` : i; }
    ngOnDestroy(){
        this.isDestroy = true;
    }
}