/**
 * Created by Eyal on 4/12/2016.
 */
import {bootstrap,enableDebugTools} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {App} from './App';

bootstrap(App,[HTTP_PROVIDERS])
    .then(enableDebugTools);