/**
 * Created by Eyal on 9/2/2016.
 */
import {NgModule,SystemJsNgModuleLoader} from "@angular/core";
import {AppComponent} from "./app.component";
import {LinkToCodeComponent} from "../share/link-to-code.component";
import {BrowserModule}  from "@angular/platform-browser";
import {FormsModule}    from "@angular/forms";
import {ShapeComponent} from "./shape.component";

@NgModule({
    declarations:[
         AppComponent,
         ShapeComponent
        ,LinkToCodeComponent
    ],
    /*entryComponents:[MissUser,MrUser],*/
    providers   :[
        ,SystemJsNgModuleLoader
    ],
    bootstrap   :[AppComponent],
    imports     :[
         BrowserModule
        ,FormsModule
    ]
})
export class AppModule{}