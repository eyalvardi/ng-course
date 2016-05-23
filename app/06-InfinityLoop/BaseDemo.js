System.register(["@angular/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var BaseDemo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            BaseDemo = (function () {
                function BaseDemo(cd, elmRef, render, zone, name) {
                    this.cd = cd;
                    this.elmRef = elmRef;
                    this.render = render;
                    this.zone = zone;
                    this.isDoCheck = false;
                    this.compName = name;
                    this.render = render;
                }
                /*ngOnInit(){
                    setInterval(()=>{
                        this.name = Date.now().toString();
                        this.user.name = this.name;
                    },1000);
                }*/
                BaseDemo.prototype.ngDoCheck = function () {
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
                    console.log("tick: " + this.compName);
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
                };
                BaseDemo.prototype.date = function () {
                    return Date.now().toString();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], BaseDemo.prototype, "name", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], BaseDemo.prototype, "user", void 0);
                return BaseDemo;
            }());
            exports_1("BaseDemo", BaseDemo);
        }
    }
});
//# sourceMappingURL=BaseDemo.js.map