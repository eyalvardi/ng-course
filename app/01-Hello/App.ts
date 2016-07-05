import {Component, PLATFORM_DIRECTIVES} from "@angular/core";
import {Users} from "./Users/Users";
import {User} from "./Users/User/User";
import {LinkToCodeComponent} from "../share/link-to-code.component";

@Component({
    selector: 'my-app',
    directives:[Users,LinkToCodeComponent],
    template: `
    <h1>Hello World <link-to-code></link-to-code></h1>
    <users></users>
`
})
export class App{

}