import {bootstrap as bp} from '@angular/platform-browser-dynamic';
import {
    PLATFORM_DIRECTIVES,
    PLATFORM_PIPES
} from "@angular/core";
import {ngServices} from "./NgServices";

export const providers:any[]  = [];
export const servicesProviders:any[] = [];
var isDebug:boolean         = false;

function addPipe(pipe,metadata){
    providers.push({provide:PLATFORM_PIPES,useValue: [pipe], multi:true})
}
function addDirective(directive,metadata){
    providers.push({provide:PLATFORM_DIRECTIVES,useValue: [directive],multi:true})
}
function addComponent(component,metadata){
    if(isDebug) {
        addDebugStyles(metadata,component);
    }
    providers.push({provide:PLATFORM_DIRECTIVES,useValue: [component],multi:true})
}
function addService(service,metadata){
    servicesProviders.push(service);
    //providers.push(service);
}

function addDebugStyles(metadata,target){
    if(!metadata.styles){
        metadata.styles = [];
    }
    metadata.styles.push(`
        :host{
            display: block;
            border: 3px solid red;
        }
    `);
    Reflect.defineMetadata('annotations', [metadata], target);
}


export function debugMode(){
    isDebug = true;
}

export function Global(){
    return (target)=>{
        Reflect.getMetadata('annotations', target)
            .forEach(a => {
                if( a.constructor.name === 'InjectableMetadata'){
                    addService(target,a);
                } else if (a.constructor.name === 'PipeMetadata'){
                    addPipe(target,a);
                } else if (a.constructor.name === 'DirectiveMetadata'){
                    addDirective(target,a);
                } else if (a.constructor.name === 'ComponentMetadata'){
                    addComponent(target,a);
                }
            });
        return target;
    };
}

export function myBootstrap(type,prvs:any[] = []){
    providers.push(servicesProviders);
    return bp(type,providers.concat(prvs))
            .then((cmpRef)=>{
                ngServices.injector = cmpRef.injector._view.parentInjector;
                //ngExOnInit
                servicesProviders.forEach((serviceClass)=>{
                    let service = ngServices.injector.get(serviceClass);
                    if(service.ngExOnInit){
                        service.ngExOnInit();
                    }
                })
            });
}