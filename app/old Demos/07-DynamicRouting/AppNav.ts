import {Input, Component} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {Global} from "../ngEx/Global";

@Global()
@Component({
    selector: 'app-nav',
    directives: [ROUTER_DIRECTIVES],
    template: `
    <nav>
      <a *ngFor="let route of routes"
        [routerLink]="route.path">
        {{route.name}}
      </a>
    </nav>    
  `
})
export class AppNav {
    @Input()
    routes: string[];
}