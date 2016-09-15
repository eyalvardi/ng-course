/**
 * Created by Eyal on 7/1/2016.
 */
import {Component} from "@angular/core";
import {ActivatedRoute} from '@angular/router';

@Component({
    styles: [`.box{ width: 400px;height: 25px;border: 2px solid black;}`],
    template: `
<div class="box" [style.backgroundColor]="color">
  Color
</div>
`
})
export class Color {
    sub:any;
    color:string;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        // Observable
        this.sub = this
            .route
            .params
            .map(params => params['color'])
            .subscribe(color => {
                this.color = color;
            });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}