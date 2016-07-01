import {Component, Input, Provider, forwardRef} from "@angular/core";
import {FormGroup, REACTIVE_FORM_DIRECTIVES, FormControl} from "@angular/forms";
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from "@angular/forms";


const noop = () => {};

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef( () => CheckBoxListComponent ),
        multi: true
    };

abstract class BaseControlValueAccessor implements ControlValueAccessor {

    //The internal data model
    private _value:any = '';

    //Placeholders for the callbacks
    private _onTouchedCallback:()      => void = noop;
    private _onChangeCallback :(_:any) => void = noop;

    //get accessor
    get value():any {
        return this._value;
    };

    //set accessor including call the onchange callback
    set value(v:any) {
        if (v !== this._value) {
            this._value = v;
            this._onChangeCallback(v);
        }
    }

    abstract writeValue(value:any);

    //Set touched on blur
    onTouched() {
        this._onTouchedCallback();
    }

    //From ControlValueAccessor interface
    registerOnChange(fn:any) {
        this._onChangeCallback = fn;
    }

    //From ControlValueAccessor interface
    registerOnTouched(fn:any) {
        this._onTouchedCallback = fn;
    }
}


@Component({
    selector: 'checkBoxList',
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
    directives:[REACTIVE_FORM_DIRECTIVES],
    template: `
    <form [formGroup]="form">
        <div *ngFor="let item of _source ; let i = index">
            <input type="checkbox"            
                (blur)="onTouched()"
                 checked="_source[i]"               
                [formControlName]="getKey(i)"> 
            {{formValues[getKey(i)]}}
        </div>
    </form>    
`})
export class CheckBoxListComponent extends BaseControlValueAccessor {

    _source:any[] = [];
    form:FormGroup;
    formValues:any = {};

    /*@Input() set source(value) {
        this._source = value;
        this.updateForm();
    }*/

    @Input()
    set size(val:string | number){
        val = parseInt(val);
        this._source = Array(val).fill(false);
    }
    get size(){return this._source.length;}

    //From ControlValueAccessor interface
    writeValue(value:any) {
        this.setParser(value);
        this.buildForm();
        this.setFormatter();
    }


    getKey(i:number):string{
        return `check${i}`;
    }
    
    buildForm() {
        let group = {};

        this._source.forEach((v, i)=> {
            group[`check${i}`] = new FormControl(v);
            this.formValues[`check${i}`] = v;
        });
        this.form = new FormGroup(group);
    }
    setParser(val){
        this._source.fill(false);
        val.split(',').forEach(i=>{
            i = parseInt(i);
            if(i){
                this._source[i] = true;
            }
        });
    }
    setFormatter(){
        this.form.valueChanges.subscribe((values)=> {
            this.formValues = values;
            let result = '';
            for (let i = 0; i < this._source.length; i++) {
                if(values[`check${i}`]){
                    //this._source[i]=true;
                    result += `${i},`;
                }

            }            
            this.value = result.substring(0,result.length-1);
        })
    }
}