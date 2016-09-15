import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {App}        from "./App";
import {Service}    from "./Service";
import {Parent}     from "./Parent";
import {Child}      from "./Child";
import {NgModule}   from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {LinkToCodeComponent} from "../share/link-to-code.component";

@NgModule({
    declarations:[App,Child,Parent,LinkToCodeComponent],
    providers   :[{provide:Service,useValue:{id:'application'}}],
    bootstrap   :[App],
    imports     :[BrowserModule],
    exports     :[]
})
export class AppModule{}

platformBrowserDynamic()
    .bootstrapModule(AppModule);

