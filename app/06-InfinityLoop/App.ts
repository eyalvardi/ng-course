/**
 * Created by Eyal Vardi on 5/03/2016.
 */
import {Component, ChangeDetectorRef, ElementRef, Renderer, NgZone, ChangeDetectionStrategy} from "@angular/core";
import {myCounter} from "./myCounter";
import {ChangeDetectorState} from "@angular/compiler/core_private";


@Component({
    selector: 'my-app',
    styles:[`:host{display: block;border: 1px solid black; text-align: left}`],
    directives:[myCounter],
    template: `
    <div style="padding: 8px;">
        <h3>Infinity Loop counter: {{counter}}</h3>
        <!--
        <input type="number" [(ngModel)]="counter">
        -->
        <button (click)="counter = counter +  0">Tick</button><br>
        <!--<div style="display: flex">
            <span>cdMode : {{getCdMode()}}</span>&nbsp;&nbsp;
            <span>cdState: {{getCdState()}}</span>
        </div>-->
        <div style="display: flex">
            <my-counter
                (on-value)="updateCounter($event)"
                [my-value]="counter"            
            ></my-counter>
            <my-counter
                (on-value-odd)="updateCounter($event)"
                [my-value]="counter"            
            ></my-counter>
        </div>
    </div>    
`
})
export class App{

    _counter:number = 0;

    get counter(){
        return this._counter;
    }
    set counter(value){
        this._counter = value;
    }

    constructor( public cd:ChangeDetectorRef,
                 public elmRef:ElementRef,
                 public render: Renderer,
                 public zone: NgZone
    ){
        //setInterval(()=>{},500);
    }
    updateCounter(value){
        this.counter++;
    }
    getCdMode(){
        return ChangeDetectionStrategy[this.cd._view.cdMode];
    }
    getCdState(){
        return ChangeDetectorState[this.cd._view.cdState];
    }
}