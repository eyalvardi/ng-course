/**
 * Created by Eyal on 9/2/2016.
 */
import {Component} from "@angular/core";

export enum Shapes{
    Circle      = 0,
    Rectangle   = 1,
    Square      = 2,
    Triangle    = 3
}

@Component({
    selector: 'my-app',
    styles:[`
        .right{
             float : left;
        }
    `],
    template: `
<div>
    <h2>Dynamic Component <link-to-code></link-to-code></h2>
    
        <button (click)="sdl.createDynamicComponentFromHtml()">Dynamic HTML</button>
        <button (click)="start()">Dynamic component (Start)</button>
        <button (click)="stop()">Stop</button>
        <button (click)="clear()">Clear</button>
        <br><hr>

        <!-- Dynamic HTML from predefined components -->
        <shape-dynamic-loader #sdl="shapeDynamicLoader"></shape-dynamic-loader>

        <!-- Dynamic components -->
        <shape-dynamic-loader
            *ngFor="let shape of shapes" [source]="shape">        
        </shape-dynamic-loader>
   
</div>
`})
export class AppComponent {
    shapes:string[] = [];
    intervalId:any;

    start(){
        this.intervalId = setInterval(()=>{
            this.shapes.push(Shapes[getRandomInt()])
        },1000);
    }
    stop(){ clearInterval(this.intervalId); }
    clear(){
        this.shapes.length = 0;
    }
}

function getRandomInt(min=0, max=3) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}