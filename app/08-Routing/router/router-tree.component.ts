/**
 * Created by Eyal on 8/14/2016.
 */

import {Component, Input}  from "@angular/core";
import {Router, RoutesRecognized, ActivatedRouteSnapshot}     from "@angular/router";
import 'rxjs/add/operator/filter';
import {ISubscription} from "rxjs/Subscription";

@Component({
    selector: 'router-tree',
    styles: [`
        div{
            float: left;
        }
    `],
    template: `
<div>
    <state-node [source]="root"></state-node>
    <hr>
    <route-node [source]="root?.routeConfig"></route-node>
</div>
`
})
export class RouterTreeComponent {

    @Input('source')
    root : ActivatedRouteSnapshot;

    subscriber : ISubscription;

    constructor(private router:Router){
    }

    ngOnInit(){
        this.subscriber =
        this.router
            .events
            .filter( event => event instanceof RoutesRecognized )
            .subscribe( (event:RoutesRecognized) => {
               this.root = event.state.root;
               //this.router.
            });
    }

    ngOnDestroy(){
        this.subscriber.unsubscribe();
    }
}