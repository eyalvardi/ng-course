/**
 * Created by Eyal Vardi on 5/03/2016.
 */
import {Component, ChangeDetectorRef, ElementRef, Renderer, NgZone} from "@angular/core";
import './BaseDemo';
import './DefaultDemo';
import './PushDemo'
import {BaseDemo} from "./BaseDemo";
import {SequenceDiagram} from 'ngEx/SequenceDiagramsService';
import {Clock} from "./Clock";
import {LinkToCodeComponent} from "../share/link-to-code.component";

class User{
    _name:string;

    get name(){
        console.log(`App get user.name: ${this._name}`);
        return this._name;
    }
    set name(value){
        console.log(`App set user.name: ${value}`);
        this._name = value;
    }
}

@Component({
    selector: 'my-app',
    styles:[`:host{display: block;border: 1px solid black; text-align: left}`],
    directives:[SequenceDiagram,Clock,LinkToCodeComponent],
    template: `
    <div style="padding: 8px;">
        <h3>Change Detector Demos <link-to-code></link-to-code><clock *ngIf="isClock.value"></clock></h3>        
        <br>
        <form>
            <input type="checkbox" ngControl="isDefault" #isDefault="ngForm"> Default Component
            <input type="checkbox" ngControl="isPush"    #isPush="ngForm"> Push Component            
            <input type="checkbox" ngControl="isPipe"    #isPipe="ngForm"> Pipes 
            <!--<input type="checkbox" ngControl="isDiagram" #isDiagram="ngForm"> Lifecycle Hooks Diagram-->
            <input type="checkbox" ngControl="isClock"   #isClock="ngForm"> Clock            
        </form>       
        
        <pipes-demo *ngIf="isPipe.value"></pipes-demo>
        <form class="form-inline">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" [(ngModel)]="name" class="form-control">
            </div>
            <div class="form-group">
                <label for="user">User.name</label>
                <input type="text" id="user" [(ngModel)]="user.name" class="form-control">
            </div>
        </form>
        
        <button (click)="changeName()">  Change </button>       
        <button (click)="cd.detach()">   Detach</button>
        <button (click)="cd.reattach()"> Reattach</button>
        <button (click)="cd.detectChanges()"> detectChanges</button>
        <button (click)="cd.markForCheck()">  markForCheck</button><br>
        
        <push-demo 
            *ngIf="isPush.value"
            [user]="user" 
            [name]="name">            
        </push-demo>
        <default-demo 
            *ngIf="isDefault.value"
            [user]="user" 
            [name]="name">        
        </default-demo>
        <!--<ng-analyzer></ng-analyzer>-->
        <br>
        <hr>
        <br>
        <diagram></diagram>
        
    </div>    
`
})
export class App extends BaseDemo{

    constructor( cd:ChangeDetectorRef,
                 elmRef:ElementRef,
                 render: Renderer,
                 zone: NgZone
    ){
        super(cd,elmRef,render,zone,'App');
    }
    _name:string = 'Eyal Vardi';
    
    get name(){
        console.log(`App get name: ${this._name}`);
        return this._name;
    }
    set name(value){
        console.log(`App set name: ${value}`);
        super.setSetter(`set name: ${value}`);
        this._name = value;
    }
    user:{name:string} = new User();
    changeName(){
        this._name = this._name + '*';
        super.setSetter(`set name: ${this._name}`);
    }
}