import {bootstrap as bp , BROWSER_APP_PROVIDERS}    from 'angular2/platform/browser';
import {Type, isPresent} from 'angular2/src/facade/lang';
import {
    provide,
    PLATFORM_DIRECTIVES,
    PLATFORM_PIPES, ComponentRef, reflector, platform
} from "angular2/core";
import {ReflectionCapabilities} from "angular2/src/core/reflection/reflection_capabilities";
import {BROWSER_PROVIDERS} from 'angular2/src/platform/browser_common';
import {ngServices} from "./NgServices";

export var files = []; 
export var providers:any[] = [];
var isDebug:boolean = false;

function addPipe(pipe,metadata){
    providers.push(provide(PLATFORM_PIPES, {
        useValue: [pipe],
        multi:true
    }))
}
function addDirective(directive,metadata){
    providers.push(provide(PLATFORM_DIRECTIVES, {
        useValue: [directive],
        multi:true
    }))
}
function addComponent(component,metadata){
    if(isDebug) {
        addDebugStyles(metadata,component);
    }
    providers.push(provide(PLATFORM_DIRECTIVES, {
        useValue: [component],
        multi:true
    }))
}
function addService(service,metadata){
    providers.push(service);
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

export function Global(file?){
    if(file){
        files.push(file);
    }
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

    return bp(type,providers.concat(prvs))
            .then((cmpRef)=>{
                ngServices.injector = cmpRef.injector._view.parentInjector;
            });
}

export function myBootstrap2(type,prvs:any[] = []){
    var promises = [];
    files.forEach((file)=>{
        promises.push(System.import(file));
    });
    return Promise.all(promises)
        .then(()=>{
            return bp(type,providers.concat(prvs))
        })
        .then((cmpRef)=>{
            ngServices.injector = cmpRef.injector.parent;
        });
}

export function bootstrap(appComponentUrl: string,customProviders?: Array<any>): Promise<ComponentRef> {
    //var appComponentType;
    reflector.reflectionCapabilities = new ReflectionCapabilities();
    let appProviders =
        isPresent(customProviders) ?
            [BROWSER_APP_PROVIDERS, customProviders] :
            BROWSER_APP_PROVIDERS;
    
    var application = platform(BROWSER_PROVIDERS).application(appProviders);

    ngServices.injector = application.injector;

    return System.import(appComponentUrl)
                .then(m=> m['App'] )
                .then((appComponentType)=>
                    application
                        .bootstrap(appComponentType,providers));

    //return app.bootstrap(appComponentType);
}