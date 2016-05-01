/**
 * Created by Eyal on 4/12/2016.
 */
import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import 'rxjs/Rx';

@Injectable()
export class UserProxy{
    constructor(private http:Http){
    }
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
}