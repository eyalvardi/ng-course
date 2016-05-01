/**
 * Created by Eyal on 4/12/2016.
 */
import {Component, ChangeDetectorRef} from "angular2/core";
import './BaseDemo';
import './DefaultDemo';
import './PushDemo'

@Component({
    selector: 'my-app',
    template: `
    <div>
        <h3>My App {{1+3}}</h3>
        <button (click)="cd.detach()">Detach</button>
        <button (click)="cd.reattach()">Reattach</button>
        <button (click)="cd.detectChanges()">detectChanges</button>
        <button (click)="cd.markForCheck()">markForCheck</button>
        <br>
        <input type="text" [(ngModel)]="user.name"><br>
        <push-demo [user]="user"></push-demo>
        <default-demo [user]="user"></default-demo>
        <ng-analyzer></ng-analyzer>
    </div>    
`
})
export class App{
    constructor(public cd:ChangeDetectorRef){ }

    user:{name:string} = {name:""};

    ngOnInit(){
        setInterval(()=>{
            this.name = Date.now().toString();
            this.user.name = this.name;
        },1000);
    }
}