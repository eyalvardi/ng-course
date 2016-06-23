import {Component, Input} from "@angular/core";

@Component({
    selector: 'tab',
    styles: [],
    template: `
<div class="tab-pane active">
    <ng-content *ngIf="isActive"></ng-content>
</div>
`
})
export class Tab {
    @Input()title:string;
    @Input()isActive:boolean;
}