import {Component} from "@angular/core";
import {Parent} from "./Parent";
import {Child} from "./Child";
import {Service} from "./Service";

@Component({
    selector: 'my-app',
    directives: [Parent,Child],
    //providers: [{provide:Service,useValue:{id:'app-providers'}}],
    //viewProviders:[{provide:Service,useValue:{id:'app-view-providers'}}],
    styles: [`:host{display: block;padding: 8px;border: 1px solid red}`],
    template: `
<div>
    App service id: <b>{{service.id}}</b>
    <hr>
    <parent>
        <child name="child"></child>
    </parent>
</div>
`
})
export class App {
    constructor(private service:Service){}
}