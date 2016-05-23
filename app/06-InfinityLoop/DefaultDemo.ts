/**
 * Created by Eyal Vardi on 5/03/2016.
 */
import {ChangeDetectorRef, Component, ElementRef, Renderer, NgZone,DebugElement} from "@angular/core";
import {BaseDemo} from "./BaseDemo";
import {Global} from "ngEx/Global";

@Global()
@Component({
    selector:'default-demo',
    styles:[`:host{display: block;}`],
    //providers:[DebugElement],
    //changeDetection: ChangeDetectionStrategy.Detached,
    template:`
    <div>
        <h3>Default Demo</h3>
        <input type="text" [(ngModel)]="test">
        <button (click)="changeName()">Change</button>
        <button (click)="detach()">Detach</button>
        <button (click)="reattach()">Reattach</button>
        <button (click)="detectChanges()">detectChanges</button>
        <button (click)="markForCheck()">markForCheck</button>
        <br>
        Test: {{test}} <br>
        Name: {{name}}<br>       
        <pre>{{user | json }}</pre>
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