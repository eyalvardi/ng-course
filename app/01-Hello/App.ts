import {Component} from "@angular/core";
import {Users} from "./Users/Users";

@Component({
    selector: 'my-app',
    directives:[Users],
    template: `
    <h1>Hello World</h1>
    <users></users>
`
})
export class App{

}