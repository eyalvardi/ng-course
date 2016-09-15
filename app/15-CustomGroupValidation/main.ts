/**
 * Created by Eyal on 8/16/2016.
 */

import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

@NgModule({
    // components, directives & pipes
    declarations:[AppComponent],
    bootstrap   :[AppComponent],
    imports     :[
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class AppModule{}

platformBrowserDynamic()
    .bootstrapModule(AppModule);