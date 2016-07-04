import {bootstrap}      from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {App} from './App';
import {HTTP_IN_MEMORY} from "./OfflineData.service";

enableProdMode();
bootstrap(App,[
    //HTTP_PROVIDERS
    HTTP_IN_MEMORY
]);

