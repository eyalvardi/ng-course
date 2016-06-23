import {
    Input,
    ChangeDetectorRef,
    ElementRef,
    Renderer,
    NgZone,
    EventEmitter, Output, Component, ChangeDetectionStrategy
} from "@angular/core";
import {ChangeDetectorState} from "@angular/compiler/core_private";

@Component({
    selector:'my-counter',
    styles:[`:host{display: block;border: 1px solid red; text-align: left;margin: 16px;padding: 8px;}`],
    template:`
<div>
    value: {{value}}<br>
    <div>cdMode : {{getCdMode()}}</div>&nbsp;&nbsp;
    <div>cdState: {{getCdState()}}</div>
</div>
`})
export class myCounter{
    _value:number = 0;

    @Input('my-value')
    set value(value){
        this._value = value;
        if(value % 2 == 0){
            this.onValueChange.emit(value);
        }else{
            this.onOddValueChange.emit(value);
        }

    }
    get value(){return this._value;}

    @Output('on-value')
    onValueChange:EventEmitter<any> = new EventEmitter();

    @Output('on-value-odd')
    onOddValueChange:EventEmitter<any> = new EventEmitter();
    
    constructor(public cd:ChangeDetectorRef,
                public elmRef:ElementRef,
                public render: Renderer,
                public zone: NgZone
    ){}

    getCdMode(){
        return ChangeDetectionStrategy[this.cd._view.cdMode];
    }
    getCdState(){
        return ChangeDetectorState[this.cd._view.cdState];
    }
}