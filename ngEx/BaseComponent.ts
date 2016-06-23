/**
 * Created by Eyal on 6/18/2016.
 */
import {Component, ChangeDetectorRef, ElementRef, NgZone, Renderer, Injector} from "@angular/core";

export class BaseComponent {
    protected render:Renderer;
    protected zone:NgZone;
    protected elmRef:ElementRef;
    protected cd:ChangeDetectorRef;

    constructor(protected injector:Injector){
        this.render = injector.get(Renderer);
        this.zone   = injector.get(NgZone);
        this.elmRef = injector.get(ElementRef);
        this.cd     = injector.get(ChangeDetectorRef);
    }
}