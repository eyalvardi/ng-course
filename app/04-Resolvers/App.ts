/**
 * Created by Eyal Vardi on 5/03/2016.
 */
import {Component} from "@angular/core";
import "./Users/Users";
import "./Users/User/User";



@Component({
    selector: 'my-app',
    //directives:[Users],
    template: `
    <h1>Resolvers ${new Date().toDateString()}</h1>
    <users></users>
`
})
export class App{

}