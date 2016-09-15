import {NgModule, COMPILER_OPTIONS} from "@angular/core";
import {DirectiveResolver,NgModuleResolver} from "@angular/compiler";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {App} from './App';
import {User} from "./Users/User/User";
import {UserProxy} from "./Users/UserProxy";
import {Users} from "./Users/Users";
import {ShareModule} from "../share/share.module";
import {MobileViewResolver} from "./services/MobileViewResolver";
import {MyNgModuleResolver} from "./services/MyNgModuleResolver";
/*import {MyCompileMetadataResolver} from "./services/MyCompileMetadataResolver";*/

@NgModule({
    declarations:[App,User,Users],
    providers   :[
        UserProxy,
        /*MobileViewResolver,*/
       /* MyCompileMetadataResolver,*/
        {
            provide : DirectiveResolver,
            useClass: MobileViewResolver
        },
        {
            provide : NgModuleResolver,
            useClass: MyNgModuleResolver
        },
        /*{
            provide : CompileMetadataResolver,
            useExisting: MyCompileMetadataResolver
        },*/
        {
            provide: COMPILER_OPTIONS,
            useValue: {
                providers: [
                    MobileViewResolver, {provide: DirectiveResolver, useExisting: MobileViewResolver}
                ]
            },
            multi: true
        },
    ],
    bootstrap   :[App],
    imports     :[
        HttpModule,
        BrowserModule,
        FormsModule,
        ShareModule
    ],
    exports     :[]
})
export class AppModule{}

platformBrowserDynamic()
    .bootstrapModule(AppModule);