import {platformBrowserDynamic}     from '@angular/platform-browser-dynamic';
import {enableProdMode,NgModule}    from '@angular/core';
import {HttpModule}                 from '@angular/http';
import {App}                        from './App';
import {HTTP_IN_MEMORY}             from "./OfflineData.service";
import {BrowserModule}              from "@angular/platform-browser";
import {UserProxy} from "./Users/UserProxy";
import {Users} from "./Users/Users";
import {User} from "./Users/User/User";
import {LinkToCodeComponent} from "../share/link-to-code.component";

//enableProdMode();

@NgModule({
    declarations:[App,Users,User,LinkToCodeComponent],
    providers   :[HTTP_IN_MEMORY,UserProxy],
    bootstrap   :[App],
    imports     :[
        BrowserModule
        ,HttpModule
    ]
})
class AppModule{}

platformBrowserDynamic()
    .bootstrapModule(AppModule);

