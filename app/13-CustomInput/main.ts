import {AppComponent} from "./app.component";
import {enableProdMode} from "@angular/core";
import {NgModule} from "@angular/core";
import {CheckBoxListComponent} from "./checkBoxList.component";
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {LinkToCodeComponent} from "../share/link-to-code.component";

//enableProdMode()

@NgModule({
    declarations:[AppComponent,CheckBoxListComponent,LinkToCodeComponent],
    bootstrap   :[AppComponent],
    imports     :[
        BrowserModule
        ,FormsModule
        ,ReactiveFormsModule
    ]
})
export class AppModule{}

platformBrowserDynamic()
    .bootstrapModule(AppModule);
