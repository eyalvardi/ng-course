/**
 * Created by Eyal on 9/3/2016.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common'
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {Users} from "./Users";
import {User} from "./User/User";
import {UserProxy} from "./UserProxy";
import {usersRoutes} from "./users.routes";
import {FaceComponent} from "./User/face.component";

@NgModule({
    declarations:[User,Users,FaceComponent],
    providers   :[UserProxy],
    imports     :[
         CommonModule
        ,HttpModule
        ,RouterModule.forChild(usersRoutes)],
    exports     :[Users]
})
export default class UsersModule{}