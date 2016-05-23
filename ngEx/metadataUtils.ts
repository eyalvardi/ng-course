/**
 * Created by Eyal on 4/21/2016.
 */
import {Component} from "@angular/core";

export function getComponentMetadata(component){
    var result;
    Reflect.getMetadata('annotations', component)
        .forEach(metadata => {
            if (metadata.constructor.name === 'ComponentMetadata'){
                result =  metadata;
            }
        });
    return result;
}

export function ngExComponent(metadata,component?){
    var merageMetadata = component?
        Object.assign(getComponentMetadata(component),metadata):
        metadata;
    return Component(merageMetadata);
}