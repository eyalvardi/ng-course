        /**
 * Created by Eyal on 9/2/2016.
 */
import {Component,Input} from "@angular/core";

@Component({
    selector : 'square',
    styles: [`
                .square {
                    margin: 8px;
                    width: 100px;
                    height: 100px;
                    background: red;
                }
`],
    template: `
<div class="square">{{name}}</div>
`})
export class SquareComponent {
    @Input()name:string;
}