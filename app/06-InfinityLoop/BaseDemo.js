System.register(["@angular/core", 'ngEx/SequenceDiagramsService'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
    var core_1, SequenceDiagramsService_1;
    var console, LifeCycleHooksDump, BaseDemo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (SequenceDiagramsService_1_1) {
                SequenceDiagramsService_1 = SequenceDiagramsService_1_1;
            }],
        execute: function() {
            console = { log: function () { } };
            LifeCycleHooksDump = (function () {
                function LifeCycleHooksDump(compName) {
                    this.compName = compName;
                    console.log(compName + " constructor");
                    SequenceDiagramsService_1.logEvent(this.compName, 'constructor');
                }
                LifeCycleHooksDump.prototype.ngOnInit = function () {
                    console.log(this.compName + " - ngOnInit");
                    SequenceDiagramsService_1.logEvent(this.compName, 'ngOnInit');
                };
                LifeCycleHooksDump.prototype.ngOnDestroy = function () {
                    console.log(this.compName + " - ngOnDestroy");
                    SequenceDiagramsService_1.logEvent(this.compName, 'ngOnDestroy');
                };
                LifeCycleHooksDump.prototype.ngOnChanges = function (changes) {
                    console.log(this.compName + " - ngOnChanges");
                    SequenceDiagramsService_1.logEvent(this.compName, 'ngOnChanges');
                    /*for(let p in changes){
                        console.log(`${this.name} ${p}: ${changes[p].currentValue}`);
                    }*/
                };
                /*ngDoCheck(){
                 console.log(`${this.name} - ngDoCheck`);
                 }*/
                LifeCycleHooksDump.prototype.ngAfterContentInit = function () {
                    console.log(this.compName + " - ngAfterContentInit");
                    SequenceDiagramsService_1.logEvent(this.compName, 'ngAfterContentInit');
                };
                LifeCycleHooksDump.prototype.ngAfterContentChecked = function () {
                    console.log(this.compName + " - ngAfterContentChecked");
                    SequenceDiagramsService_1.logEvent(this.compName, 'ngAfterContentChecked');
                };
                LifeCycleHooksDump.prototype.ngAfterViewInit = function () {
                    console.log(this.compName + " - AfterViewInit");
                    SequenceDiagramsService_1.logEvent(this.compName, 'AfterViewInit');
                };
                LifeCycleHooksDump.prototype.ngAfterViewChecked = function () {
                    console.log(this.compName + " - AfterViewChecked");
                    SequenceDiagramsService_1.logEvent(this.compName, 'AfterViewChecked');
                };
                LifeCycleHooksDump.prototype.setSetter = function (property) {
                    SequenceDiagramsService_1.logEvent(this.compName, "setter " + property);
                };
                return LifeCycleHooksDump;
            }());
            exports_1("LifeCycleHooksDump", LifeCycleHooksDump);
            BaseDemo = (function (_super) {
                __extends(BaseDemo, _super);
                function BaseDemo(cd, elmRef, render, zone, compName) {
                    _super.call(this, compName);
                    this.cd = cd;
                    this.elmRef = elmRef;
                    this.render = render;
                    this.zone = zone;
                    this.isDoCheck = false;
                    this.render = render;
                }
                Object.defineProperty(BaseDemo.prototype, "name", {
                    get: function () {
                        console.log(this.compName + " get name: " + this._name);
                        return this._name;
                    },
                    set: function (value) {
                        this._name = value;
                        _super.prototype.setSetter.call(this, "set name: " + value);
                        console.log(this.compName + " set name: " + value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BaseDemo.prototype, "test", {
                    get: function () {
                        console.log(this.compName + " get test: " + this._test);
                        return this._test;
                    },
                    set: function (value) { this._test = value; },
                    enumerable: true,
                    configurable: true
                });
                BaseDemo.prototype.getName = function () {
                    console.log(this.compName + " getName(): " + this._name);
                    return this._name;
                };
                BaseDemo.prototype.getTest = function () {
                    console.log(this.compName + " getTest(): " + this._test);
                    return this._test;
                };
                /*ngOnInit(){
                    setInterval(()=>{
                        this.name = Date.now().toString();
                        this.user.name = this.name;
                    },1000);
                }*/
                BaseDemo.prototype.ngDoCheck = function () {
                    //this._name = 'docheckSet';
                    SequenceDiagramsService_1.logEvent(this.compName, 'ngDoCheck');
                    this.markPulse();
                };
                /*ngOnChanges(){
                    this.markPulse();
                }*/
                /*AfterViewChecked(){
                    this.markPulse();
                }*/
                BaseDemo.prototype.markPulse = function () {
                    var _this = this;
                    console.log(" " + this.compName + " DoCheck (tick)");
                    if (!this.render)
                        return;
                    this.render.setElementStyle(this.elmRef.nativeElement, 'border', '2px solid red');
                    this.zone.runOutsideAngular(function () {
                        setTimeout(function () {
                            _this.render.setElementStyle(_this.elmRef.nativeElement, 'border', '0');
                        }, 700);
                    });
                };
                BaseDemo.prototype.detach = function () { this.cd.detach(); };
                BaseDemo.prototype.reattach = function () { this.cd.reattach(); };
                BaseDemo.prototype.markForCheck = function () { this.cd.markForCheck(); };
                BaseDemo.prototype.detectChanges = function () { this.cd.detectChanges(); };
                BaseDemo.prototype.changeName = function () {
                    this.user.name = this.name;
                    this.name += '*';
                };
                BaseDemo.prototype.date = function () {
                    return Date.now().toString();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], BaseDemo.prototype, "name", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], BaseDemo.prototype, "user", void 0);
                return BaseDemo;
            }(LifeCycleHooksDump));
            exports_1("BaseDemo", BaseDemo);
        }
    }
});
//# sourceMappingURL=BaseDemo.js.map