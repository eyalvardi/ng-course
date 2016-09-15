import {enableProdMode,NgModule,SystemJsNgModuleLoader} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule}  from "@angular/platform-browser";
import {FormsModule}    from "@angular/forms";
import {HttpModule}     from "@angular/http";

import {UserProxy}      from "./Users/UserProxy";
import {LinkToCodeComponent} from "../share/link-to-code.component";
import {App}            from './App';
import {UserContainer}  from "./Users/UserContainer/UserContainer";
/*import {MissUser, MrUser} from "./Users/User";*/
import {Users}          from "./Users/Users";

//enableProdMode();

@NgModule({
    declarations:[
        App
        ,Users
        ,UserContainer
        ,LinkToCodeComponent
        /*,MissUser
        ,MrUser*/
    ],
    /*entryComponents:[MissUser,MrUser],*/
    providers   :[
        UserProxy
        ,SystemJsNgModuleLoader
    ],
    bootstrap   :[App],
    imports     :[
         BrowserModule
        ,FormsModule
        ,HttpModule
    ]
})
export class AppModule{}

platformBrowserDynamic()
    .bootstrapModule(AppModule);