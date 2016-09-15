/**
 * Created by Eyal on 9/3/2016.
 */
import {Component} from "@angular/core";
import {Router,ActivatedRoute} from '@angular/router';
import {User} from "./User";

@Component({
    selector: 'face',
    moduleId: module.id,
    styleUrls:['user.css'],
    template: `
        <div class="media">
            <a class="pull-left"  routerLink="./{{user.name.first}}">
                <img class="media-object dp img-circle"
                     [src]="user.picture.thumbnail" 
                     style="width: 75px;height:75px;">
            </a>            
        </div>
`})
export class FaceComponent extends User{
    constructor(
        router: Router,
        route: ActivatedRoute) {
        super(router,route);
    }
}