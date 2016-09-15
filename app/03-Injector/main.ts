import {NgModule} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

import {BrowserModule} from "@angular/platform-browser";
import { HttpModule}   from '@angular/http';
import {ShareModule}   from "../share/share.module";

import {User}  from "./Users/User/User";
import {Users} from "./Users/Users";
import {AppComponent}  from './App';
import {UserProxy} from "./Users/UserProxy";


@NgModule({
    declarations:[AppComponent,User,Users],
    providers   :[UserProxy],
    bootstrap   :[AppComponent],
    imports     :[
         HttpModule
        ,BrowserModule
        ,ShareModule
    ],
    exports     :[]
})
export class AppModule{}

platformBrowserDynamic()
    .bootstrapModule(AppModule);