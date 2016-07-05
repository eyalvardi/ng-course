/**
 * Created by Eyal Vardi on 5/03/2016.
 */
import {Component} from "@angular/core";
import "./Users/Users";
import "./Users/User/User";
import {LinkToCodeComponent} from "../share/link-to-code.component";



@Component({
    selector: 'my-app',
    directives:[LinkToCodeComponent],
    template: `
    <h1>Resolvers <link-to-code></link-to-code></h1>
    <users></users>
`
})
export class App{

}