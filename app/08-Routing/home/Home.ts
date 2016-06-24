import {Component} from "@angular/core";
import {Router,ActivatedRoute} from "@angular/router";
//import {Observable} from 'rxjs';

@Component({
    template:`
<div>
    <h3>Home Component, id: {{id}}</h3>
</div>
`})
export class Home{

    id:string;
    private sub: any;

    constructor(private router: Router,private route: ActivatedRoute) {}

    ngOnInit() {
        // Observable
        this.sub = this
            .route
            .params
            .map(params => params['id'])
            .subscribe(id => {
                this.id = id;
            });
        // snapshot
        //this.route.snapshot.params.id
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}