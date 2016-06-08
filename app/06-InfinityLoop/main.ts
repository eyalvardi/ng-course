/**
 * Created by Eyal Vardi on 5/03/2016.
 */
import {enableProdMode} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {App} from './App';
import {myBootstrap} from "ngEx";

enableProdMode();

myBootstrap(App,[HTTP_PROVIDERS]);