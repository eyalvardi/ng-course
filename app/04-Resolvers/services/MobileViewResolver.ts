import { Injectable, DirectiveMetadata} from "@angular/core";
import { DirectiveResolver , NgModuleResolver , PipeResolver , ElementSchemaRegistry } from "@angular/compiler";
import {ReflectorReader} from '@angular/core/src/reflection/reflector_reader';
import {CompileMetadataResolver} from "@angular/compiler/src/metadata_resolver";
import {ReflectionInfo, Reflector} from '@angular/core/src/reflection/reflection'

@Injectable()
export class MobileViewResolver extends DirectiveResolver{

    constructor(/*_reflector?: ReflectorReader*/){
        super(/*_reflector*/);
    }
    resolve(component): DirectiveMetadata{
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
