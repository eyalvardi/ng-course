import {Component} from "@angular/core";
import {Global} from "../Global";

declare var windows:{__Metadata__:any};

@Global()
@Component({
    selector:'ng-analyzer',
    template:`
    <input type="text" [(ngModel)]="search">
    <button (click)="filter('Component')">Component</button>
    <button (click)="filter('Component')">Directive</button>
    <button (click)="filter('Component')">Service</button>
    <br>
    <pre>
        <div *ngFor="#item of metadata">
            {{item | json}}
        </div>
    </pre>
`,
    styles:[]
})
export class NgAnalyzer{
    metadata:any[] = [];

    ngOnInit(){
        window.__Metadata__.forEach((item)=>{
            item.forEach((key,value)=>{
               // this.metadata.push(value);
                key.forEach((key,value)=>{
                    this.metadata.push({
                        key:key,
                        value:value
                    });
                });
            });
        });
    }
    filter(name){

    }
}

