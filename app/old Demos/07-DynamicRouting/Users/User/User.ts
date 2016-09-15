/**
 * Created by Eyal on 4/12/2016.
 */
import {Component, Input} from "angular2/core";
import {Global} from "../../../ngEx/Global";

declare var __moduleName:string;
@Global()
@Component({
    selector:'user-profile',
    moduleId: __moduleName,
    styleUrls:['user.css'],
    templateUrl:'user.html'
})
export class User{
    @Input('source')user:any;
}