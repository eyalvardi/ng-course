import {bootstrap}      from '@angular/platform-browser-dynamic';
import {enableProdMode, PLATFORM_DIRECTIVES} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {App} from './App';
import {User} from "./Users/User/User";

enableProdMode();
bootstrap(App,[
    HTTP_PROVIDERS
    //,{provide: PLATFORM_DIRECTIVES, useValue: User, multi:true}
]);

