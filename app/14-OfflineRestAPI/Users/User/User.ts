import {Component, Input} from "@angular/core";

//declare var __moduleName:string;

@Component({
    selector:'user-profile',
    moduleId: module.id,
    styleUrls:['user.css'],
    templateUrl:'user.html'
})
export class User{
    @Input('source')user:any;
}