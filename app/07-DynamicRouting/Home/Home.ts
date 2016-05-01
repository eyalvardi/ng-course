/**
 * Created by Eyal on 4/23/2016.
 */
import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, OnActivate, RouteConfig} from "angular2/router";
import {DynamicRouteConfig} from "../../ngEx/DynamicRouteConfigurator";
import {DynamicRouteConfigurator} from "../../ngEx/DynamicRouteConfigurator";

@Component({
    directives: [ROUTER_DIRECTIVES],
    template:`
<div>
    <h1>Home Component</h1>
    <app-nav [routes]="routes"></app-nav>
    <hr>
    <router-outlet></router-outlet>
</div>
`
})
@DynamicRouteConfig('app/07-DynamicRouting/Home/home.json')
/*@RouteConfig([{
    path:'/', name:'Page1', component:Page1, useAsDefault:true
}])*/
export class Home{

    //appRoutes: string[][] = null;

    constructor(/*private drf: DynamicRouteConfigurator*/){}

    get routes(){
        return Home.routes.map(route => {
            return { path: [`./${route.name}`], name: route.name };
        });
    }

    //routerOnActivate
    /*ngOnInit(){
        var routes = Home.routes;//this.drf.getRoutes(Home);
        if(routes){
            this.appRoutes = routes.configs.map(route => {
                return { path: [`./${route.name}`], name: route.name };
            });
        }
    }*/
}