import {
    Component,
    Input,
    ElementRef,
    Injector,
    Compiler,
    ViewContainerRef,
    ComponentFactoryResolver,
    SystemJsNgModuleLoader,
    ReflectiveInjector,
    ViewChild
} from "@angular/core";

import {compileToComponent} from 'ngEx/DynamicLoad';
/*import {MrUser, MissUser} from "../User";*/

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
        private cmpResolver   : ComponentFactoryResolver,
        private compiler      : Compiler
        /*private loader        : SystemJsNgModuleLoader*/
){}

    @Input('source')
    set user(value){
        this._user = value;
        this.createComponent();
    }

    createComponent(html?){

        let injector = ReflectiveInjector.fromResolvedProviders([], this.vcRef.parentInjector);

        /* System.import('app/05-DynamicComponent/Users/lazy/users.module').then(m=>{
         let usersModule = m.UsersModule;
         let ngm = this.compiler.compileModuleAsync(usersModule)
         .then( ngm => {*/

        let loader = new SystemJsNgModuleLoader(this.compiler,{
            factoryPathPrefix: '',
            factoryPathSuffix: '.ngfactory'
        });

        loader
            .load('app/05-DynamicComponent/Users/lazy/users.module')
            .then(nmf=>{
                let ngmRef = nmf.create(injector);
                let cmpFactory = ngmRef.componentFactoryResolver
                    .resolveComponentFactory(
                            this._user.name.title == 'miss'?
                                ngmRef.instance.MissUser :
                                ngmRef.instance.MrUser
                        );

                let componentRef = this.div.createComponent(cmpFactory,0,injector,[]);
                componentRef.instance.data = this._user;
                componentRef.changeDetectorRef.detectChanges();
                componentRef.onDestroy(()=> {
                    componentRef.changeDetectorRef.detach();
                        });
            });
    }
}




