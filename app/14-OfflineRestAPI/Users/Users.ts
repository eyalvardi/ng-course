import {Component,
    trigger,
    state,
    style,
    animate,
    transition,
    keyframes } from "@angular/core";
import {UserProxy} from "./UserProxy";
import {User} from "./User/User";

@Component({
    selector:'users',
    providers:[UserProxy],
    directives: [User],
    //encapsulation: ViewEncapsulation.Emulated
    styles:[`
        ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: block;
  width: 120px;
  line-height: 50px;
  padding: 0 10px;
  box-sizing: border-box;
  background-color: #eee;
  border-radius: 4px;
  margin: 10px;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
}

.active {
  background-color: #cfd8dc;
  transform: scale(1.1);
}
.inactive {
  background-color: #eee;
  transform: scale(1);
}
    `],
    animations: [
        trigger('flyInOut', [
            state('in', style({transform: 'translateX(0)'})),
            transition('void => *', [
                style({transform: 'translateX(-100%)'}),
                animate(200)
            ]),
            transition('* => void', [
                animate(200, style({transform: 'translateX(100%)'}))
            ])
        ])
    ],
    template: `
    Number : <input type="number" #i value="5">
    <button (click)="load(i.value)">Load</button>
    <hr>

    <user-profile        
        *ngFor="let user of users" [source]="user">
            {{user.name | json}}
    </user-profile>
`})
export class Users{
    
    users:any[] = [];
    
    constructor(private proxy: UserProxy){}
    
    load(num){
        this.proxy
            .load(num)
            .then((users)=> {
                let length = users.length - 1;
                let self = this;
                // for animation
                setTimeout(function fn() {
                    self.users.push(users[length--]);
                    if( length > 0 ){
                        setTimeout( fn,500 );
                    }
                }, 500);
            });
    }
}