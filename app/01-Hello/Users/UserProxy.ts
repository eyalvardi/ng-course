import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserProxy{

    constructor(private http:Http){
    }
    load(num=3){
        // Promise
        return this.http
            .get(`http://api.randomuser.me/?results=${num}`)
            .toPromise()
            .then(  res => res.json()   )
            .then( data => data.results )
            .catch(this.handleError);

        // Obsr...
        /*
         return this.http
         .get(`http://api.randomuser.me/?results=${num}`)
         .map((res)=>{
         return res.json();
         })
         .map((data)=>{
         return data.results;
         });
         */
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}