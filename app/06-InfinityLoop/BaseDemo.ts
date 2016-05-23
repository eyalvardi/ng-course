import {Input, ChangeDetectorRef, ElementRef, Renderer, NgZone} from "@angular/core";

export class BaseDemo{

    @Input()name:string;
    test:string;
    compName:string;
    @Input()user:{name:string};
    isDoCheck = false;

    constructor(public cd:ChangeDetectorRef,
                public elmRef:ElementRef,
                public render: Renderer,
                public zone: NgZone,
                name
    ){
        this.compName = name;
        this.render = render;
    }
    /*ngOnInit(){
        setInterval(()=>{
            this.name = Date.now().toString();
            this.user.name = this.name;
        },1000);
    }*/
    ngDoCheck(){
     this.markPulse();
    }
    /*ngOnChanges(){
        this.markPulse();
    }*/

    /*AfterViewChecked(){
        this.markPulse();
    }*/

    markPulse(){
        console.log(`tick: ${this.compName}`);
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
        this.user.name = this.name;
    }
    date(){
        return Date.now().toString();
    }

}