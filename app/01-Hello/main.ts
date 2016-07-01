import {bootstrap}      from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {App} from './App';

enableProdMode();
bootstrap(App,[HTTP_PROVIDERS]);

