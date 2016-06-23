/**
 * Created by Eyal on 6/17/2016.
 */
import {Component, SkipSelf, Host, ViewEncapsulation} from "@angular/core";
import {Child} from "./Child";
import {Service} from "./Service";

@Component({
    selector: 'parent',
    directives: [Child],
    encapsulation : ViewEncapsulation.None,
    styles: [`
        :host{
            display: block;
            padding: 8px;
            border: 1px solid red;
        }
        .box{            
            background-color: blue;
        }
        .size{
            width: 75px;
            height:75px;
        }
    `],
    template: `
    <div>
        <h3>Parent</h3>
        <hr>
        Content Child:<br>
        <ng-content></ng-content>
        
        Template Child:<br>
        <child name="template"></child>
      
    </div>
`
})
export class Parent {}