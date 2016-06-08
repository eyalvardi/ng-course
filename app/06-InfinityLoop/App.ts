/**
 * Created by Eyal Vardi on 5/03/2016.
 */
import {Component, ChangeDetectorRef, ElementRef, Renderer, NgZone} from "@angular/core";
import './BaseDemo';
import './DefaultDemo';
import './PushDemo'
import {BaseDemo} from "./BaseDemo";
import {logs,clearLogs,SequenceDiagram} from 'ngEx/SequenceDiagramsService';

class User{
    _name:string;

    get name(){
        console.log(`App get user.name: ${this._name}`);
        return this._name;
    }
    set name(value){
        console.log(`App set user.name: ${value}`);
        this._name = name;
    }
}

@Component({
    selector: 'my-app',
    styles:[`:host{display: block;border: 1px solid black; text-align: left}`],
    directives:[SequenceDiagram],
    template: `
    <div style="padding: 8px;">
        <h3>Change Detector Demos</h3>        
        <br>
        <!--User name: <input type="text" [(ngModel)]="user.name"><br>
        Name:      <input type="text" [(ngModel)]="name">-->
        {{getName()}}<br>
        <button (click)="changeName()">  Change </button>
        <button (click)="clearLog()">Clear</button>
        <button (click)="cd.detach()">   Detach</button>
        <button (click)="cd.reattach()"> Reattach</button>
        <button (click)="cd.detectChanges()"> detectChanges</button>
        <button (click)="cd.markForCheck()">  markForCheck</button><br>
        
        <push-demo 
            [user]="user" 
            [name]="name">            
        </push-demo>
        <default-demo 
            [user]="user" 
            [name]="name">        
        </default-demo>
        <!--<ng-analyzer></ng-analyzer>-->
        <diagram [title]="'AngularJS 2 Lifecycle Hooks'"></diagram>
        <ul>
            <li *ngFor="let log of logs">{{log}}</li>
        </ul>
    </div>    
`
})
export class App extends BaseDemo{
    logs:string[];
    constructor( cd:ChangeDetectorRef,
                 elmRef:ElementRef,
                 render: Renderer,
                 zone: NgZone
    ){
        super(cd,elmRef,render,zone,'App');
        this.logs = logs;
        /*setInterval(()=>{
            console.log('setInterval...');
            this.name = 'mysetname';
        },10000);*/
    }
    _name:string;
    
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
    clearLog(){
        clearLogs();
    }
    getLastLog(){
        if(logs.length == 0 ) return;
        return logs[logs.length -1];
    }

    /*ngOnInit(){
        /!*setInterval(()=>{
            //this.name = Date.now().toString();
            this.user.name = this.name;
        },5000);*!/
    }*/
}