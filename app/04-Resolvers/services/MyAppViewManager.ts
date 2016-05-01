import {
    Injectable, HostViewFactoryRef, HostViewRef, Injector, Inject,
    RootRenderer, APP_ID, EmbeddedViewRef, TemplateRef, ElementRef
} from "angular2/core";
import {AppViewManager_} from "angular2/src/core/linker/view_manager";
@Injectable()
export class MyAppViewManager extends AppViewManager_{

    constructor(_renderer: RootRenderer, @Inject(APP_ID) _appId: string) {
        super(_renderer,_appId); 
    }
    
    createRootHostView(
        hostViewFactoryRef: HostViewFactoryRef, 
        overrideSelector: string, 
        injector: Injector, 
        projectableNodes?: any[][]): HostViewRef{
        console.log(`createRootHostView: `);

        return super.createRootHostView(
            hostViewFactoryRef,
            overrideSelector,
            injector,
            projectableNodes);
    }

    createEmbeddedViewInContainer(viewContainerLocation: ElementRef, index: number,
                                  templateRef: TemplateRef): EmbeddedViewRef {
        console.log(`createEmbeddedViewInContainer:\n ${JSON.stringify(viewContainerLocation.nativeElement) } `);
        return super.createEmbeddedViewInContainer(viewContainerLocation,index,templateRef);
    }
}
