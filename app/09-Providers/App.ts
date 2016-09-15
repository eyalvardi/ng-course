import {Component} from "@angular/core";
import {Service} from "./Service";
import {LinkToCodeComponent} from "../share/link-to-code.component";

@Component({
    selector: 'my-app',
    providers: [{provide:Service,useValue:{id:'app-providers'}}],
    //viewProviders:[{provide:Service,useValue:{id:'app-view-providers'}}],
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
    constructor(private service:Service){
        console.log(`App constructor`);
    }
    ngDoCheck(){
        console.log(`App ngDoCheck`);
    }
    ngOnInit(){
        console.log(`App ngOnInit`);
    }
}