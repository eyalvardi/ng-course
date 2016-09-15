/**
 * Created by Eyal Vardi on 5/03/2016.
 */
import {Injectable} from "@angular/core";
import {Http}       from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserProxy{

   constructor(private http:Http){}

    load(num=3){

        // Promise
        return this.http
            .get(`http://api.randomuser.me/?results=${num}`)
            .toPromise()
            .then((res)=>{
                return res.json();
            })
            .then((data)=>{
                return data.results;
            });
        // Observable
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
}