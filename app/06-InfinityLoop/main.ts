/**
 * Created by Eyal Vardi on 5/03/2016.
 */
import {BrowserModule} from "@angular/platform-browser";
import {enableProdMode} from '@angular/core';
import {NgModule} from "@angular/core";
import {myCounter} from "./myCounter";
import {App} from './App';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {LinkToCodeComponent} from "../share/link-to-code.component";

//enableProdMode();

@NgModule({
    declarations:[myCounter,App,LinkToCodeComponent],
    bootstrap   :[App],
    imports     :[BrowserModule]
})
export class AppModule{}

platformBrowserDynamic()
    .bootstrapModule(AppModule);