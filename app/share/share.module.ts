/**
 * Created by Eyal on 8/13/2016.
 */
import {NgModule,ApplicationRef} from "@angular/core";
import {LinkToCodeComponent} from "./link-to-code.component";
import {ngServices, services} from "./NgServices";

@NgModule({
    declarations:[LinkToCodeComponent],
    providers   :[],
    imports     :[],
    exports     :[LinkToCodeComponent]
})
export class ShareModule{
    constructor(private appRef : ApplicationRef){
        ngServices.injector = appRef['_injector'];
        services.forEach( (service: {ngExOnInit:Function}) => {
            service.ngExOnInit();
        });
    }
}