/**
 * Created by Eyal on 8/14/2016.
 */
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {RouterTreeComponent} from "./router-tree.component";
import {StateNodeComponent} from "./state-node.component";
import {RouteNodeComponent} from "./route-node.component";

@NgModule({
    declarations:[RouterTreeComponent,StateNodeComponent,RouteNodeComponent],
    providers   :[],
    bootstrap   :[],
    imports     :[RouterModule,CommonModule],
    exports     :[RouterTreeComponent]
})
export class RouterVisualizrsModule{}