import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {App} from "./App";
import {NgModule} from "@angular/core";
import {Tabs} from "./Tabs";
import {Tab} from "./Tab";
import {LinkToCodeComponent} from "../share/link-to-code.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations:[App,Tabs,Tab,LinkToCodeComponent],
    providers   :[],
    bootstrap   :[App],
    imports     :[BrowserModule,FormsModule],
    exports     :[]
})
export class AppModule{}

platformBrowserDynamic()
    .bootstrapModule(AppModule);