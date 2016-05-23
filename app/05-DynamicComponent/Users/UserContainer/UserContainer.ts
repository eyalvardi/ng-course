/**
 * Created by Eyal Vardi on 5/03/2016.
 */
import {Component, Input, ElementRef, Injector,
    ViewContainerRef,ComponentResolver} from "@angular/core";

import {Global} from "ngEx/Global";
import {compileToComponent} from 'ngEx/DynamicLoad';

@Global()
@Component({
    selector : 'user-container',
    template:`
    <h3><ng-content></ng-content></h3>
    <fake></fake>
    <div  id="container"></div>
`
})
export class UserContainer{
    _user:any;
    constructor(
        private loader: ViewContainerRef ,
        private cmpResolver :ComponentResolver,
        private elementRef: ElementRef,
        private injector: Injector
    ){}

    @Input('source')
    set user(value){
        this._user = value;
        this.createComponent(value.name.title == 'miss'?
            `<miss-user [user]="data"></miss-user>`:
            `<mr-user   [user]="data"></mr-user>`);
    }

    createComponent(html){
        var cmpType = compileToComponent(html,['data:user']);
        this.cmpResolver.resolveComponent(cmpType)
            .then((cmpFactory)=>{
                cmpFactory.create(this.injector, [], cmpFactory.selector).changeDetectorRef.reattach();
            });
    }

}