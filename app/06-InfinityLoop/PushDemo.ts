/**
 * Created by Eyal on 4/12/2016.
 */
import {ChangeDetectorRef, ChangeDetectionStrategy,
    Component, NgZone, Renderer, ElementRef} from "@angular/core";
import {BaseDemo} from "./BaseDemo";
import {Global} from "ngEx/Global";

@Global()
@Component({
    selector:'push-demo',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles:[`:host{display: block;}`],
    template:`
    <div>
        <h3>Push Demo</h3>
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
export class PushDemo extends BaseDemo{
    constructor( cd:ChangeDetectorRef,
                 elmRef:ElementRef,
                 render: Renderer,
                 zone: NgZone){
        super(cd,elmRef,render,zone,'PushDemo');
    }
}