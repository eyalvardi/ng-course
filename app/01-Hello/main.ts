import {enableProdMode, NgModule}   from '@angular/core';
import {platformBrowserDynamic}     from "@angular/platform-browser-dynamic";
import {HttpModule}                 from "@angular/http";
import {BrowserModule}              from "@angular/platform-browser";
import {App}                        from './App';
import {User}                       from "./Users/User/User";
import {LinkToCodeComponent} from "../share/link-to-code.component";
import {Users} from "./Users/Users";
import {UserProxy} from "./Users/UserProxy";

enableProdMode();

@NgModule({
    declarations:[User,Users,LinkToCodeComponent,App],
    providers   :[UserProxy],
    bootstrap   :[App],
    imports     :[HttpModule,BrowserModule],
    exports     :[]
})
export class AppModule{}

platformBrowserDynamic()
    .bootstrapModule(AppModule);

