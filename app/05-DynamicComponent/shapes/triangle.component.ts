        /**
 * Created by Eyal on 9/2/2016.
 */
import {Component,Input} from "@angular/core";

@Component({
    selector : 'triangle',
    styles: [`
                .triangle {
                    margin: 8px;
                    width: 0;
                    height: 0;
                    border-left: 50px solid transparent;
                    border-right: 50px solid transparent;
                    border-bottom: 100px solid green;
                }
`],
    template: `
<div class="triangle">{{name}}</div>
`})
export class TriangleComponent {
    @Input()name:string;
}