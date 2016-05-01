/**
 * Created by Eyal on 4/12/2016.
 */
import {Component, Input, DynamicComponentLoader, ElementRef} from "angular2/core";
import {Global} from "../../../ngEx/Global";
import {compileToComponent} from '../../../ngEx/DynamicLoad';
//import mr from '../mruser.html!text';
//import miss from '../missuser.html!text';

@Global()
@Component({
    selector : 'user-container',
    template:`
    <div  #container></div>
`
})
export class UserContainer{
    _user:any;

    constructor(
        private loader: DynamicComponentLoader,
        private elementRef: ElementRef ){}

    @Input('source')
    set user(value){
        this._user = value;
        this.createComponent(value.name.title == 'miss'?
            `<miss-user [user]=data></miss-user>`:
            `<mr-user [user]=data></mr-user>`);
    }

    createComponent(html){
        this.loader.loadIntoLocation(
            compileToComponent(html,['data:user']),
            this.elementRef, 'container' );
    }

}