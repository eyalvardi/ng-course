/**
 * Created by Eyal Vardi on 5/03/2016.
 */
import {Injectable} from "@angular/core";
import {Http}       from "@angular/http";
import {ngServices,services} from "../../share/NgServices";
import 'rxjs/add/operator/toPromise';

// Private Static fields:
var http:Http;


/*@Injectable()*/
export class UserProxy{

    //private http:Http;
    ngExOnInit(){
        if(!http){
            http = ngServices.get(Http);
        }
    }

    load(num=3){
        // Promise
        return http
            .get(`http://api.randomuser.me/?results=${num}`)
            .toPromise()
            .then((res)=>{
                return res.json();
            })
            .then((data)=>{
                return data.results;
            });
    }
}

export var sUserProxy = new UserProxy();
services.push(sUserProxy);