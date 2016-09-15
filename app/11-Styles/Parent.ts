/**
 * Created by Eyal on 6/17/2016.
 */
import {Component, ViewEncapsulation} from "@angular/core";


@Component({
    selector: 'parent',
    encapsulation : ViewEncapsulation.Emulated,
    styles: [`
        :host{
            display: block;
            padding: 8px;
            border: 1px solid red;
        }
        .box{            
            background-color: blue;
        }
        :host/deep/.size{
            width: 75px;
            height:75px;
        }
        :host-context(.size) div {
            width: 500px;
            height:300px;
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
`})
export class Parent {}