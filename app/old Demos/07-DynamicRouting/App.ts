/**
 * Created by Eyal on 4/12/2016.
 */
import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import 'rxjs/Rx';

import {Home} from './Home/Home';
import "./Users/User/User";
import './AppNav';
import {DynamicRouteConfigurator, DynamicRouteConfig} from'../ngEx/DynamicRouteConfigurator';



@Component({
    selector: 'my-app',
    directives:[ROUTER_DIRECTIVES],
    template: `
    <h1>Hello World</h1>
    <app-nav [routes]="appRoutes"></app-nav>    
    <hr>
    <router-outlet></router-outlet>
`
})
@DynamicRouteConfig('app/07-DynamicRouting/router-config.json')
@RouteConfig([
    /*{ path: '/...', name: 'Home' ,component: Home}*/
])
export class App{
    appRoutes: string[][];
    
    constructor(private drf: DynamicRouteConfigurator){}
    
    ngOnInit(){
        this.appRoutes = this.getAppRoutes();
        this.drf
            .loadRouteConfig(App)
            .then(()=>{
                this.appRoutes = this.getAppRoutes();
            });
    }
    
    private getAppRoutes(): string[][] {
        return this.drf
            .getRoutes(App)
            .configs.map(route => {
                return { path: [`/${route.name}`], name: route.name };
            });
    }
}