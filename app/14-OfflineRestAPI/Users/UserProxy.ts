import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserProxy{
    private url = 'app/users';//'http://api.randomuser.me/?results=${num}';

    constructor(private http:Http){
    }
    load(num=3){
        // Promise
        return this.http
            .get(this.url)
            .toPromise()
            .then( res => res.json() )
            .then( res => res.data )
            .catch(this.handleError);

            /*.then((data)=>{
                return data.results;
            });*/
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