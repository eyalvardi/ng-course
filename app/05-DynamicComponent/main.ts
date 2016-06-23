import {HTTP_PROVIDERS} from '@angular/http';
import {myBootstrap} from 'ngEx';
import {App} from './App';
import {enableProdMode} from "@angular/core";

enableProdMode();
myBootstrap(App,[HTTP_PROVIDERS]);