import {
    ChangeDetectorRef, Component, ElementRef, Renderer, NgZone
} from "@angular/core";
import {BaseDemo} from "./BaseDemo";



@Component({
    selector:'default-demo',
    styles:[`
        :host{display: block; text-align: left;margin: 8px;} 
        .border{border: 1px solid black;padding: 8px;}
    `],
    //providers:[DebugElement],
    //changeDetection: ChangeDetectionStrategy.Detached,
    template:`    
    <div class="border">
        
        
        <h3>CheckAlways Demo (default)</h3>
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
`})
export class DefaultDemo extends BaseDemo{
    constructor( cd:ChangeDetectorRef,
                 elmRef:ElementRef,
                 render: Renderer,
                 zone: NgZone
    ){
        super(cd,elmRef,render,zone,'DefaultDemo');
    }
}