import {bootstrap} from "@angular/platform-browser-dynamic";
import {App} from "./App";
import {Service} from "./Service";

bootstrap(App,[
    {provide:Service,useValue:{id:'application'}}
]);