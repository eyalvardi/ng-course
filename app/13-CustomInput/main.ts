import {bootstrap} from "@angular/platform-browser-dynamic";
import {provideForms,disableDeprecatedForms} from '@angular/forms';
import {AppComponent} from "./app.component";
import {enableProdMode} from "@angular/core";

//enableProdMode()

bootstrap(AppComponent,[
    disableDeprecatedForms(),
    provideForms()
]);