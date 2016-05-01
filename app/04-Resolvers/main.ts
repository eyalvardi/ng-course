/**
 * Created by Eyal on 4/12/2016.
 */
//import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {myBootstrap} from '../ngEx/Global';
import {App} from './App';
import {provide, ViewResolver, AppViewManager} from "angular2/core";
import {MobileViewResolver} from "./services/MobileViewResolver";
import {MyAppViewManager} from "./services/MyAppViewManager";

myBootstrap(App,[
    HTTP_PROVIDERS,
    provide(ViewResolver,{useClass:MobileViewResolver}),
    provide(AppViewManager,{useClass:MyAppViewManager})
]);