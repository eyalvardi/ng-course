/**
 * Created by Eyal Vardi on 5/03/2016.
 */
import {ChangeDetectorRef, Component, ElementRef, Renderer, NgZone,DebugElement} from "@angular/core";
import {BaseDemo} from "./BaseDemo";
import {Global} from "ngEx/Global";
import {DoCheckComp} from "./do-check.cmp";
import {TimerComp} from "./timer.cmp";

@Global()
@Component({
    selector:'default-demo',
    directives:[DoCheckComp,TimerComp],
    styles:[`
:host{display: block; text-align: left;margin: 8px;} 
.border{border: 1px solid black;padding: 8px;}
`],
    //providers:[DebugElement],
    //changeDetection: ChangeDetectionStrategy.Detached,
    template:`    
    <div class="border">
        <do-check [name]="'Default Demo'" [updateName]="name"></do-check>
        <h3>Default Demo</h3>
        Test: <input type="text" [(ngModel)]="test"> {{getTest()}} <br>
        Name: {{getName()}} <br>
        User Name : {{user.name}} <br>
        <button (click)="changeName()">Change</button>
        <button (click)="detach()">Detach</button>
        <button (click)="reattach()">Reattach</button>
        <button (click)="detectChanges()">detectChanges</button>
        <button (click)="markForCheck()">markForCheck</button>
        <br>
        <!--<timer></timer>-->        
    </div>
`
})
export class DefaultDemo extends BaseDemo{
    constructor( cd:ChangeDetectorRef,
                 elmRef:ElementRef,
                 render: Renderer,
                 zone: NgZone
    ){
        super(cd,elmRef,render,zone,'DefaultDemo');
    }
}