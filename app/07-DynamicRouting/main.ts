/**
 * Created by Eyal on 4/12/2016.
 */
//import {bootstrap} from 'angular2/platform/browser';
import {LocationStrategy,HashLocationStrategy} from 'angular2/platform/common';
import {provide, enableProdMode} from "angular2/core";
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from "angular2/router";
import {myBootstrap} from '../ngEx/Global';
import {App} from './App';

//enableProdMode()

myBootstrap(App,[
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(LocationStrategy,{useClass:HashLocationStrategy})
]);