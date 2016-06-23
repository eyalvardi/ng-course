/**
 * Created by Eyal Vardi on 5/3/2016.
 */
import {Injectable, ViewMetadata, Type,Reflector} from "@angular/core";
import {ViewResolver} from "@angular/compiler";

@Injectable()
export class MobileViewResolver extends ViewResolver{

    constructor(_reflector?: Reflector){
        super(_reflector);
    }
    resolve(component: Type): ViewMetadata{
        component.prototype.ngDoCheck = function () {
            console.log(`${component.name} doCheck :-)`);
        };
        var vm;
        try{
            vm = super.resolve(component);
        }catch(exp){
            /*if( !vm.template && !vm.templateUrl){
                vm.templateUrl= `${component}.html`;
            }
            if( !vm.styleUrls){
                vm.styleUrls= [`${component}.css`];
            } */
        }
        if(vm.templateUrl){
            vm.templateUrl = `m.${vm.templateUrl}`;
        }
        return vm;
    }
}