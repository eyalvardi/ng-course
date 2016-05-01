import {Injectable, Type} from "angular2/core";
import {makeDecorator} from 'angular2/src/core/util/decorators';
import {RouteRegistry, RouteConfig} from "angular2/router";
import {Global} from "../ngEx/Global";
import {Http} from "angular2/http";


interface DynamicRouteConfig{
    path    :string,
    name    :string,
    component:string,
    file    : string
}

@Global()
@Injectable()
export class DynamicRouteConfigurator {
    constructor(private registry: RouteRegistry ,private http:Http) {}

    // Gets the list of registered with @RouteConfig routes
    // associated with given `component`
    getRoutes(component: Type) {
        return Reflect.getMetadata('annotations', component)
            .filter(a => {
                return a.constructor.name === 'RouteConfig';
            }).pop();
    }

    // Updates the metadata added by @RouteConfig associated
    // with given `component`
    updateRouteConfig(component: Type, routeConfig) {
        let annotations = Reflect.getMetadata('annotations', component);
        let routeConfigIndex = -1;
        for (let i = 0; i < annotations.length; i += 1) {
            if (annotations[i].constructor.name === 'RouteConfig') {
                routeConfigIndex = i;
                break;
            }
        }
        if (routeConfigIndex < 0) {
            //throw new Error('No route metadata attached to the component');
            annotations.push(routeConfig)
        }else{
            annotations[routeConfigIndex] = routeConfig; 
        }
       
        Reflect.defineMetadata('annotations', annotations, component);
    }

    // Adds additional `route` to given `component`
    addRoute(component: Type, route) {
        let routeConfig = this.getRoutes(component);
        if(routeConfig){
            routeConfig.configs.push(route);
        }else {
            routeConfig = new RouteConfig([route]);
        }
        this.updateRouteConfig(component, routeConfig);
        this.registry.config(component, route);
    }

    loadRouteConfig(component:Type, url?:string):Promise<void>{
        url = url || readDynamicRouteConfigMetadata(component).url;
        return this.internalLoadRouteConfig(component,url);
    }
    internalLoadRouteConfig(component:Type, url:string){
        return this.http.get(url)
            .map((resp)=> resp.json())
            .map((routes)=>{
                routes.map((route)=>{
                    route.loader = loader(route.file,route.component,this);
                    this.addRoute(
                        component,
                        {
                            path  : route.path,
                            name  : route.name,
                            loader: route.loader,
                            useAsDefault: route.useAsDefault || false
                        }
                    );
                });
            })
            .toPromise();
    }
}

export function loader(path,component,drc:DynamicRouteConfigurator){
    return ()=> System.import(path)
        .then(m=>m[component])
        .then((component)=>{
            var meta = readDynamicRouteConfigMetadata(component);
            if(meta && meta.url){
                return drc.internalLoadRouteConfig(component,meta.url)
                    .then(()=> {
                        component.routes = drc.getRoutes(component).configs;
                        return component;
                    });
            }else {
                return component;
            }            
        });
}
//////////////////////////////////////////
//      Annotation & Decorator         //
/////////////////////////////////////////
export class DynamicRouteConfigMetadata{
    constructor(public url:string){}
}

export var DynamicRouteConfig:(url:string) => ClassDecorator =
    makeDecorator(DynamicRouteConfigMetadata);

function readDynamicRouteConfigMetadata(component){
    return Reflect.getMetadata('annotations', component)
                .filter(item => item.constructor.name === 'DynamicRouteConfigMetadata')
                .pop();
}