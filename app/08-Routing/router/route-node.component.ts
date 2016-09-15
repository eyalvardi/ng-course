/**
 * Created by Eyal on 8/14/2016.
 */
import {Component, Input} from "@angular/core";
import {Route} from "@angular/router";

@Component({
    selector: 'route-node',
    styles: [],
    template: `
<div>
    <ul>
        <li>{{route?.path}}</li>
        <route-node 
            [source]="r"
            *ngFor="let r of route?.children" >            
        </route-node>        
    </ul>
</div>
`
})
export class RouteNodeComponent {
    @Input('source')route:Route;
}