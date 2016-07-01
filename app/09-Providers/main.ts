import {bootstrap} from "@angular/platform-browser-dynamic";
import {App} from "./App";
import {Service} from "./Service";
import {PLATFORM_DIRECTIVES} from "@angular/core";
import {Parent} from "./Parent";
import {Child} from "./Child";

bootstrap(App,[
    {provide:Service,useValue:{id:'application'}}//,
    //globalDirective(Parent),
    //globalDirective(Child)
]);

function globalDirective(component){
    return {
        provide: PLATFORM_DIRECTIVES,
        useValue: component,
        multi:true
    };
}