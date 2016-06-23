/**
 * Created by Eyal on 6/22/2016.
 */
import { provideRouter, RouterConfig } from '@angular/router';
import {Home} from "./+Home/Home";
import {Users, CanDeactivateGuard} from "./Users/Users";
import {AuthGuard} from "./auth.guard";
import {LoginComponent} from "./login.cmp";
import {AuthService} from "./auth.service";

export const routes: RouterConfig = [
    { path:'08-Routing', component: Home},
    { path:'home/:id'  , component: Home },
    { path:'login'     , component: LoginComponent },
    {
        path:'users',
        component: Users,
        canActivate: [AuthGuard],
        canDeactivate:[CanDeactivateGuard]
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes),
    AuthService,
    AuthGuard,
    CanDeactivateGuard
];