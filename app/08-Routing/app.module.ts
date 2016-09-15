/**
 * Created by Eyal on 4/12/2016.
 */
import {LocationStrategy,HashLocationStrategy} from '@angular/common';
import {App} from './App';
import {BrowserModule} from "@angular/platform-browser";

import {HttpModule} from "@angular/http";
import {NgModule} from "@angular/core";
import {APP_ROUTER_PROVIDERS, routing} from "./app.route";
import {ShareModule} from "../share/share.module";
import {RouterVisualizrsModule} from "./router/router.module";
import {Home} from "./home/Home";
import {Color} from "./Color";
import {LoginComponent} from "./login.cmp";


@NgModule({
    declarations: [App,Home,Color,LoginComponent],
    imports: [
        BrowserModule
        ,routing
        ,HttpModule
        ,ShareModule

        /*,UsersModule*/
        ,RouterVisualizrsModule
    ],
    providers:[
        APP_ROUTER_PROVIDERS,
        { provide:LocationStrategy, useClass:HashLocationStrategy }],
    bootstrap: [App],
})
export class MyAppModule {}