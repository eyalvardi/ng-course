/**
 * Created by Eyal on 4/12/2016.
 */
//import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {myBootstrap} from '../ngEx/Global';
import {App} from './App';

myBootstrap(App,[HTTP_PROVIDERS]);