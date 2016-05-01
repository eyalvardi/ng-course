/**
 * Created by Eyal on 4/12/2016.
 */
import {Component, ElementRef} from "angular2/core";
import "./Users/Users";
//import "./Users/User/User";

@Component({
    selector: 'my-app',
    //directives:[Users],
    template: `
    <h1>Hello World</h1>
    <users></users>
`
})
export class App{
    constructor(private elm: ElementRef){}
}