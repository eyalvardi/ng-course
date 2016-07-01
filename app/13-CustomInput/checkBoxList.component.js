"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var noop = function () { };
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: forms_2.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return CheckBoxListComponent; }),
    multi: true
};
var BaseControlValueAccessor = (function () {
    function BaseControlValueAccessor() {
        //The internal data model
        this._value = '';
        //Placeholders for the callbacks
        this._onTouchedCallback = noop;
        this._onChangeCallback = noop;
    }
    Object.defineProperty(BaseControlValueAccessor.prototype, "value", {
        //get accessor
        get: function () {
            return this._value;
        },
        //set accessor including call the onchange callback
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this._onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    //Set touched on blur
    BaseControlValueAccessor.prototype.onTouched = function () {
        this._onTouchedCallback();
    };
    //From ControlValueAccessor interface
    BaseControlValueAccessor.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    //From ControlValueAccessor interface
    BaseControlValueAccessor.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    return BaseControlValueAccessor;
}());
var CheckBoxListComponent = (function (_super) {
    __extends(CheckBoxListComponent, _super);
    function CheckBoxListComponent() {
        _super.apply(this, arguments);
        this._source = [];
        this.formValues = {};
    }
    Object.defineProperty(CheckBoxListComponent.prototype, "size", {
        get: function () { return this._source.length; },
        /*@Input() set source(value) {
            this._source = value;
            this.updateForm();
        }*/
        set: function (val) {
            val = parseInt(val);
            this._source = Array(val).fill(false);
        },
        enumerable: true,
        configurable: true
    });
    //From ControlValueAccessor interface
    CheckBoxListComponent.prototype.writeValue = function (value) {
        this.setParser(value);
        this.buildForm();
        this.setFormatter();
    };
    CheckBoxListComponent.prototype.getKey = function (i) {
        return "check" + i;
    };
    CheckBoxListComponent.prototype.buildForm = function () {
        var _this = this;
        var group = {};
        this._source.forEach(function (v, i) {
            group[("check" + i)] = new forms_1.FormControl(v);
            _this.formValues[("check" + i)] = v;
        });
        this.form = new forms_1.FormGroup(group);
    };
    CheckBoxListComponent.prototype.setParser = function (val) {
        var _this = this;
        this._source.fill(false);
        val.split(',').forEach(function (i) {
            i = parseInt(i);
            if (i) {
                _this._source[i] = true;
            }
        });
    };
    CheckBoxListComponent.prototype.setFormatter = function () {
        var _this = this;
        this.form.valueChanges.subscribe(function (values) {
            _this.formValues = values;
            var result = '';
            for (var i = 0; i < _this._source.length; i++) {
                if (values[("check" + i)]) {
                    //this._source[i]=true;
                    result += i + ",";
                }
            }
            _this.value = result.substring(0, result.length - 1);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], CheckBoxListComponent.prototype, "size", null);
    CheckBoxListComponent = __decorate([
        core_1.Component({
            selector: 'checkBoxList',
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES],
            template: "\n    <form [formGroup]=\"form\">\n        <div *ngFor=\"let item of _source ; let i = index\">\n            <input type=\"checkbox\"            \n                (blur)=\"onTouched()\"\n                 checked=\"_source[i]\"               \n                [formControlName]=\"getKey(i)\"> \n            {{formValues[getKey(i)]}}\n        </div>\n    </form>    \n" }), 
        __metadata('design:paramtypes', [])
    ], CheckBoxListComponent);
    return CheckBoxListComponent;
}(BaseControlValueAccessor));
exports.CheckBoxListComponent = CheckBoxListComponent;
//# sourceMappingURL=checkBoxList.component.js.map