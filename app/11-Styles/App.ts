import {Component} from "@angular/core";
import {Parent} from "./Parent";
import {Child} from "./Child";
import {LinkToCodeComponent} from "../share/link-to-code.component";
//import {Service} from "./Service";

@Component({
    selector: 'my-app',
    styles: [`
        :host{
            display: block;
            padding: 8px;
            border: 1px solid red;
        }
        .box{ background-color: blue; }
        .size{ width: 275px; height:75px; } 
    `],
    template: `
    <div>
        <h3>App Component <link-to-code></link-to-code></h3>
        
        <div class="box size"></div>
        <br>
        <parent>
            <child name="child content"></child>
        </parent>
    </div>
`
})
export class App {
}