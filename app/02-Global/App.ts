/**
 * Created by Eyal Vardi
 */
import {Component, ElementRef} from "@angular/core";
import {Users} from "./Users/Users";

@Component({
    selector: 'my-app',
    directives:[Users],
    template: `
    <h1>@Global Decorator</h1>
    <users></users>
`
})
export class App{
    constructor(private elm: ElementRef){}
}