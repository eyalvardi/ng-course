import {
    Component,
    Input,
    ElementRef,
    Injector,
    ViewContainerRef,
    ComponentResolver, ReflectiveInjector, ViewChild
} from "@angular/core";

import {Global} from "ngEx";
import {compileToComponent} from 'ngEx/DynamicLoad';
import {MrUser, MissUser} from "../User";

@Global()
@Component({
    selector : 'user-container',
    template:`
    <h3><ng-content></ng-content></h3>
   <!-- <fake [user]="_user"></fake> -->
   <div #div></div>
`
})
export class UserContainer{

    @ViewChild('div', {read: ViewContainerRef}) div;

    _user:any;
    constructor(
        private vcRef         : ViewContainerRef ,
        private cmpResolver   :ComponentResolver
        //private elementRef  : ElementRef,
        //private injector    : Injector
    ){}

    @Input('source')
    set user(value){
        this._user = value;
        this.createComponent(value.name.title == 'miss'?
            `<miss-user [user]="data"></miss-user>` :
            `<mr-user   [user]="data"></mr-user>
        `);
    }

    createComponent(html){
        var cmpType = compileToComponent(html,['data:user'],[MrUser,MissUser]);
        this.cmpResolver.resolveComponent(cmpType)
            .then((cmpFactory)=>{
                console.log(`Create Fake`);

                let injector = ReflectiveInjector.fromResolvedProviders([], this.vcRef.parentInjector);

                // option 1
                let componentRef = this.div.createComponent(cmpFactory,0,injector,[]);

                componentRef.instance.data = this._user;

                componentRef.changeDetectorRef.detectChanges();
                componentRef.onDestroy(()=> {
                    componentRef.changeDetectorRef.detach();
                });

                // option 2
                //cmpFactory
                //    .create(this.injector, null, cmpFactory.selector);
                    //.changeDetectorRef
                    //.reattach();
            });
    }
}