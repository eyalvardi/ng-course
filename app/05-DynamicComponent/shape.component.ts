/**
 * Created by Eyal on 9/2/2016.
 */
import {
    Component,
    NgModule,
    ViewEncapsulation,
    Input,
    Compiler,
    ViewContainerRef,
    SystemJsNgModuleLoader,
    ReflectiveInjector,
    NgModuleFactory,
    ViewChild
} from "@angular/core";

@Component({
    selector: 'shape-dynamic-loader',
    exportAs : 'shapeDynamicLoader',
    styles: [],
    template: `
        <span #span></span>
`})
export class ShapeComponent {
    @ViewChild('span', {read: ViewContainerRef}) span;


    constructor(
        private vcRef    : ViewContainerRef ,
        private compiler : Compiler
    ){}

    _shape:string;
    @Input('source')
    set shape(value){
        this._shape = value;
        this.createComponent();
    }

    createComponent(){
        let injector = ReflectiveInjector
            .fromResolvedProviders([], this.vcRef.parentInjector);
        // Create module loader
        let loader = new SystemJsNgModuleLoader(this.compiler);

        loader.load('app/05-DynamicComponent/shapes/shapes.module')
              .then((nmf:NgModuleFactory<any>)=>{
                // create NgModuleRef
                let ngmRef = nmf.create(injector);
                let shape = ngmRef.instance.shapes.get(this._shape);
                // Create component factory
                let cmpFactory = ngmRef
                        .componentFactoryResolver
                        .resolveComponentFactory( shape );
                // Create the component
                let componentRef = this.span.createComponent(cmpFactory,0,injector,[]);
                componentRef.instance.name = this._shape;
                componentRef.changeDetectorRef.detectChanges();
                componentRef.onDestroy(()=> {
                    componentRef.changeDetectorRef.detach();
                });
            });
    }

    createDynamicComponentFromHtml(){

        let injector = ReflectiveInjector
            .fromResolvedProviders([], this.vcRef.parentInjector);

        // Create module loader
        let loader = new SystemJsNgModuleLoader(this.compiler);

        loader.load('app/05-DynamicComponent/shapes/shapes.module')
            .then((ngMdlFactory:NgModuleFactory<any>)=>{

                // Create NgModuleRef class
                let ngMdlRef = ngMdlFactory.create(injector);

                // Create component factory
                this.createDynamicFactory(injector,ngMdlRef.instance.constructor)
                    .then((cmpFactory)=>{
                        // Create the component
                        let componentRef = this.span.createComponent(cmpFactory,0,injector,[]);
                        componentRef.instance.name = this._shape;
                        componentRef.changeDetectorRef.detectChanges();
                        componentRef.onDestroy(()=> {
                            componentRef.changeDetectorRef.detach();
                        });
                    });

            });
    }

    createDynamicFactory(injector,moduleClass){
        @Component({
            selector : 'dynamic-html',
            styles   : [`
                .demo1 {
                     border: 1px solid black;
                     height: 200px;
                }
                .demo1 div {
                    float : left;
                }
            `],
            encapsulation: ViewEncapsulation.None,
            template : `
                <div class="demo1"> 
                    <h3>Dynamic HTML with predefined components</h3>
                    <triangle   name="1"></triangle>
                    <circle     name="2"></circle>
                    <rectangle  name="3"></rectangle>
                    <square     name="4"></square>
                </div>
        `})
        class DynamicHtmlComponent{}

        @NgModule({
            imports: [moduleClass],
            declarations:[DynamicHtmlComponent],
            entryComponents: [DynamicHtmlComponent]
        })
        class DynamicModule{}

        return this.compiler
            .compileModuleAsync(DynamicModule)
            .then((ngMdlFactory)=>{
                let ngMdlRef = ngMdlFactory.create(injector);

                // Create component factory
                let cmpFactory = ngMdlRef.componentFactoryResolver
                    .resolveComponentFactory( DynamicHtmlComponent );

                return cmpFactory;
            });
    }
}