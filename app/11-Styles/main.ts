import {App} from "./App";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {Child} from "./Child";
import {Parent} from "./Parent";
import {ShareModule} from "../share/share.module";
import {LinkToCodeComponent} from "../share/link-to-code.component";


@NgModule({
    declarations:[App,Child,Parent],
    bootstrap   :[App],
    imports     :[BrowserModule,ShareModule]
})
export class AppModule{}

platformBrowserDynamic()
    .bootstrapModule(AppModule);