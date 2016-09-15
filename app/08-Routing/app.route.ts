/**
 * Created by Eyal on 6/22/2016.
 */
import {Routes, RouterModule} from '@angular/router';
import {Home} from "./home/Home";
import {CanDeactivateGuard} from "./Users/Users";
import {AuthGuard} from "./auth.guard";
import {AuthService} from "./auth.service";
import {Color} from "./Color";
import {LoginComponent} from "./login.cmp";

export const appRoutes: Routes = [
    { path:'08-Routing', children:[
            { path: '' , component: Home },
            { path: '' , component: Color, outlet: 'nav'}
        ]
    },
    {
        path:'home/:id'  ,
        component: Home,
        canActivate: [AuthGuard],
        canDeactivate:[CanDeactivateGuard]
    },
    { path: 'colors/:color' , component: Color, outlet: 'nav'},
    { path: 'login' , component: LoginComponent  },
    { path: 'users' ,
        canActivate: [AuthGuard],
        canDeactivate:[CanDeactivateGuard],
        loadChildren : 'app/08-Routing/Users/users.module.js' }
    /*{
        path:'users',
        component: Users,
        canActivate: [AuthGuard],
        canDeactivate:[CanDeactivateGuard],
        children:[
            { path: ''        , component: User },
            { path: ':first/' , component: User }
        ]
    }*/
];
export const routing = RouterModule.forRoot(appRoutes);

export const APP_ROUTER_PROVIDERS = [
    AuthService,
    AuthGuard,
    CanDeactivateGuard
];