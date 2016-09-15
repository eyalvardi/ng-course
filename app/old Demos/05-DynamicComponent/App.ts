import {Component, Renderer, ElementRef, NgZone} from "@angular/core";

@Component({
    selector: 'my-app',
    styles:[`
        :host{
            display: block;
        }
    `],
    template: `
    <h1>Dynamic Component <link-to-code></link-to-code></h1>
    <users></users>
`
})
export class App{
    constructor(private render:Renderer,
                private elmRef:ElementRef,
                private zone: NgZone
    ){}

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