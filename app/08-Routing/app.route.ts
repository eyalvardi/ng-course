/**
 * Created by Eyal on 6/22/2016.
 */
import { provideRouter, RouterConfig } from '@angular/router';
import {Home} from "./home/Home";
import {Users, CanDeactivateGuard} from "./Users/Users";
import {AuthGuard} from "./auth.guard";
//import {LoginComponent} from "./login.cmp";
import {AuthService} from "./auth.service";
import {User} from "./Users/User/User";
import {Color} from "./Color";
import {forwardRef} from "@angular/core";
import {LoginComponent} from "./login.cmp";

export const routes: RouterConfig = [
    { path:'08-Routing', component: Home},
    {
        path:'home/:id'  ,
        component: Home ,
        //canActivate: [AuthGuard],
        //canDeactivate:[CanDeactivateGuard]
    },
    { path: 'colors/:color', component: Color, outlet: 'nav'},
    { path:'login'     , component: LoginComponent  },
    {
        path:'users',
        component: Users,
        canActivate: [AuthGuard],
        canDeactivate:[CanDeactivateGuard],
        children:[
            { path: ''        , component: User },
            { path: ':first/' , component: User }
        ]
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes,{ enableTracing: true }),
    AuthService,
    AuthGuard,
    CanDeactivateGuard
];