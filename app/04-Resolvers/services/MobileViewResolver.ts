/**
 * Created by Eyal on 4/12/2016.
 */
import {Injectable, ViewResolver, ViewMetadata, Type} from "angular2/core";
import {ReflectorReader} from "angular2/src/core/reflection/reflector_reader";

@Injectable()
export class MobileViewResolver extends ViewResolver{

    constructor(_reflector?: ReflectorReader){
        super(_reflector);
    }
    resolve(component: Type): ViewMetadata{
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