/**
 * Created by Eyal Vardi on 5/03/2016.
 */
import {provide} from "@angular/core";
import {ViewResolver} from "@angular/compiler";
import {HTTP_PROVIDERS} from '@angular/http';
import {myBootstrap} from 'ngEx';
import {App} from './App';
import {MobileViewResolver} from "./services/MobileViewResolver";


myBootstrap(App,[
    HTTP_PROVIDERS,
    provide(ViewResolver,{useClass:MobileViewResolver})
]);