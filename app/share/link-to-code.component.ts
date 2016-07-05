/**
 * Created by Eyal on 7/5/2016.
 */
import {Component, Input} from "@angular/core";

@Component({
    selector: 'link-to-code',
    styles: [],
    template: `
<span>
  (<a href="https://github.com/eyalvardi/ng-course/tree/master/app/{{path}}" target="_blank">code</a>)
</span>
`})
export class LinkToCodeComponent {
    @Input()path:string;
    ngOnInit(){
        this.path = this.path || window.location.hash.substring(1);
    }
}