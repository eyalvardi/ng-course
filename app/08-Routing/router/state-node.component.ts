/**
 * Created by Eyal on 8/14/2016.
 */
import {Component, Input} from "@angular/core";
import {ActivatedRouteSnapshot} from "@angular/router";

@Component({
    selector: 'state-node',
    styles: [],
    template: `
<div>
    <ul>
        <li>{{root?.component?.name}}</li>
        <state-node *ngFor="let r of root?.children" [source]="r"></state-node>        
    </ul>
</div>
`
})
export class StateNodeComponent {
    @Input('source')root:ActivatedRouteSnapshot;
}