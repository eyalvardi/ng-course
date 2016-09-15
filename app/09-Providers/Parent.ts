/**
 * Created by Eyal on 6/17/2016.
 */
import {Component, SkipSelf, Host} from "@angular/core";
import {Child} from "./Child";
import {Service} from "./Service";

@Component({
    selector        : 'parent',
    providers       : [{provide:Service,useValue:{id:'parent-providers'}}],
    viewProviders   : [{provide:Service,useValue:{id:'parent-view-providers'}}],
    styles: [`:host{display: block;padding: 8px;border: 1px solid red}`],
    template: `
<div>
    Parent service id: <b>{{service.id}}</b>
    <hr>
    Content Child:<br>
    <ng-content></ng-content>
    
    Template Child:<br>
    <child name="template"></child>  
</div>
`
})
export class Parent {
    constructor( /*@Host()*/ private service:Service){
        console.log(`Parent constructor`);
    }
    ngOnInit(){
        console.log(`Parent ngOnInit`);
    }
}