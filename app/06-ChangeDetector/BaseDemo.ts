import {
    Input,
    ChangeDetectorRef,
    ElementRef,
    Renderer,
    NgZone,
    OnInit,
    OnDestroy,
    DoCheck,
    OnChanges,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit, SimpleChange, ChangeDetectionStrategy
} from "@angular/core";
import {logEvent} from 'ngEx/SequenceDiagramsService';
import {ChangeDetectorState} from "@angular/compiler/core_private";

var console:{log:Function} = {log:()=>{}};

export class LifeCycleHooksDump implements OnInit,
    OnDestroy,
    //DoCheck,
    OnChanges,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked {
    constructor(public compName:string){
        logEvent(this.compName,'constructor');
    }

    ngOnInit(){
        console.log(`${this.compName} - ngOnInit`);
        logEvent(this.compName,'ngOnInit');
    }

    ngOnDestroy(){
        console.log(`${this.compName} - ngOnDestroy`);
        logEvent(this.compName,'ngOnDestroy');
    }

    ngOnChanges(changes: {[propName: string]: SimpleChange}) {
        console.log(`${this.compName} - ngOnChanges`);
        logEvent(this.compName,'ngOnChanges');
        /*for(let p in changes){
            console.log(`${this.name} ${p}: ${changes[p].currentValue}`);
        }*/

    }
    /*ngDoCheck(){
     console.log(`${this.name} - ngDoCheck`);
     }*/
    ngAfterContentInit(){
        console.log(`${this.compName} - ngAfterContentInit`);
        logEvent(this.compName,'ngAfterContentInit');
    }
    ngAfterContentChecked(){
        console.log(`${this.compName} - ngAfterContentChecked`);
        logEvent(this.compName,'ngAfterContentChecked');
    }
    ngAfterViewInit(){
        console.log(`${this.compName} - AfterViewInit`);
        logEvent(this.compName,'AfterViewInit');
    }
    ngAfterViewChecked(){
        console.log(`${this.compName} - AfterViewChecked`);
        logEvent(this.compName,'AfterViewChecked');
    }
    
    setSetter(property){
        logEvent(this.compName,`setter ${property}`);
    }
    
}

export class BaseDemo extends LifeCycleHooksDump{

    @Input()
    set name(value){
       this._name = value;
       super.setSetter(`set name: ${value}`);
       //console.log(`${this.compName} set name: ${value}`);
    }
    get name(){
        //console.log(`${this.compName} get name: ${this._name}`);
        return this._name;
    }

    @Input()user:{name:string};

    _name:string;
    _test:string;
    get test(){
        //console.log(`${this.compName} get test: ${this._test}`);
        return this._test;
    }
    set test(value){ this._test = value; }

    isDoCheck = false;

    getName(){return this._name;}
    getTest(){return this._test;}
    
    
    constructor(public cd:ChangeDetectorRef,
                public elmRef:ElementRef,
                public render: Renderer,
                public zone: NgZone,
                compName
    ){
        super(compName);
    }

    ngDoCheck(){
     //this._name = 'docheckSet';
        logEvent(this.compName,'ngDoCheck');
     this.markPulse();
    }
    markPulse(){
        if(!this.render) return;
        this.render.setElementStyle(
            this.elmRef.nativeElement,'border','2px solid red');
        this.zone.runOutsideAngular(()=>{
            setTimeout(()=>{
                this.render.setElementStyle(
                    this.elmRef.nativeElement,'border','0');
            },700);
        });
    }

    detach(){ this.cd.detach(); }
    reattach(){ this.cd.reattach(); }
    markForCheck(){ this.cd.markForCheck(); }
    detectChanges(){ this.cd.detectChanges(); }

    changeName(){
        this.name += '*';
        this.user.name = this.name;
    }
    getCdMode(){
        return ChangeDetectionStrategy[this.cd._view.cdMode];
    }
    getCdState(){
        //return ChangeDetectorState[this.cd._view.cdState];
    }
}