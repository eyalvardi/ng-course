/**
 * Created by Eyal Vardi
 */
import {Component, ElementRef} from "@angular/core";
import {Users} from "./Users/Users";
import {LinkToCodeComponent} from "../share/link-to-code.component";

@Component({
    selector: 'my-app',
    directives:[Users,LinkToCodeComponent],
    template: `
    <h1>@Global Decorator <link-to-code></link-to-code></h1>
    <users></users>
`
})
export class App{
    constructor(private elm: ElementRef){}
}