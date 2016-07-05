import {Component, Input} from "@angular/core";
import {Global} from "../Global";

@Global()
@Component({
    selector:'form-debugger',
    template:`
    <table>
    <tr>
        <td>controls:</td>
        <td>
        ngControls: {{ngControls?.length}}
            <ul>
                <li *ngFor="#ctl of ngControls">
                {{ctl?.name}} - {{ctl?.value}}
                </li>
            </ul>
        </td>
    </tr>
</table>
`
})
export class FormDebugger{
    _form:any;
    ngControls:any[] = [];

    @Input('source')
    set form(val){
        this.ngControls  = [];
        this._form = val;
    }
    ngDoCheck(){
        for(let ctl in this._form.controls){
            this.ngControls.push({
                name:ctl,
                value:this._form.controls[ctl]
            });
        }
    }
}