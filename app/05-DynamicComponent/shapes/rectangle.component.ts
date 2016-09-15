/**
 * Created by Eyal on 9/2/2016.
 */
import {Component,Input} from "@angular/core";

@Component({
    selector : 'rectangle',
    styles: [`
                .rectangle {
                    margin: 8px;
                    width: 200px;
                    height: 100px;
                    background: blue;
                }
`],
    template: `
<div class="rectangle">{{name}}</div>
`})
export class RectangleComponent {
    @Input()name:string
}