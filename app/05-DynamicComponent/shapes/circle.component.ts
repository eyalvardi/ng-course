        /**
 * Created by Eyal on 9/2/2016.
 */
import {Component,Input} from "@angular/core";

@Component({
    selector : 'circle',
    styles: [`
                .circle {
                    margin: 8px;
                    width: 100px;
                    height: 100px;
                    background: yellow;
                    -moz-border-radius: 50px;
                    -webkit-border-radius: 50px;
                    border-radius: 50px;
                }
`],
    template: `
<div class="circle">{{name}}</div>
`})
export class CircleComponent {
    @Input()name:string;
}