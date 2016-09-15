/**
 * Created by Eyal on 4/12/2016.
 */
import {ChangeDetectorRef, ChangeDetectionStrategy,
    Component, NgZone, Renderer, ElementRef} from "@angular/core";
import {BaseDemo} from "./BaseDemo";
import {DoCheckComp} from "./do-check.cmp";
import {TimerComp} from "./timer.cmp";


@Component({
    selector:'push-demo',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles:[`
:host{display: block;text-align: left;margin: 8px;} 
.border{border: 1px solid black; padding: 8px;}`],
    template:`
    <div class="border">
        <h3>onPush Demo (CheckOnce)</h3>
        Test: <input type="text" [(ngModel)]="test"> {{getTest()}} <br>
        Name: {{getName()}} <br>
        User Name : {{user.name}} <br>
        <button (click)="changeName()">Change</button>        
        <br><br>
        <div style="display: flex">
            <do-check [name]="'Default Demo'" [updateName]="name"></do-check>
            <do-check [isDetach]="true" [name]="'Default Demo'" [updateName]="name"></do-check>
        </div>
        <br>
        <button (click)="detach()">Detach</button>
        <button (click)="reattach()">Reattach</button>
        <button (click)="detectChanges()">detectChanges</button>
        <button (click)="markForCheck()">markForCheck</button>
        <span>State: {{getCdState()}}</span>        
    </div>
`
})
export class PushDemo extends BaseDemo{
    constructor( cd:ChangeDetectorRef,
                 elmRef:ElementRef,
                 render: Renderer,
                 zone: NgZone){
        super(cd,elmRef,render,zone,'PushDemo');
    }
}