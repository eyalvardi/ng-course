import {Component} from "@angular/core";
import "./Parent";
import "./Child";
import {Service} from "./Service";
import {NG_COURSE} from "./ng_course_directives";
import {LinkToCodeComponent} from "../share/link-to-code.component";

@Component({
    selector: 'my-app',
    directives: [NG_COURSE,LinkToCodeComponent],
    providers: [{provide:Service,useValue:{id:'app-providers'}}],
    viewProviders:[{provide:Service,useValue:{id:'app-view-providers'}}],
    styles: [`:host{display: block;padding: 8px;border: 1px solid red}`],
    template: `
<div>
    <h1> Providers vs. ViewProviders <link-to-code></link-to-code></h1>
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