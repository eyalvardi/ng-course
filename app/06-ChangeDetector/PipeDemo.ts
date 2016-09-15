/**
 * Created by Eyal on 6/15/2016.
 */
import {Pipe, PipeTransform, Component, NgZone, ChangeDetectorRef, ElementRef, Renderer} from '@angular/core';
import {BaseDemo} from "./BaseDemo";
let counter:number = 0;

export class MyPipe implements PipeTransform{
    calls:number = 0;
    instance:number;

    constructor(){ this.instance = counter++ }

    transform(value,name) : any {
        return `instance :${this.instance} input: ${value} arg name value: ${name} number of call: ${this.calls++}`;
    }
}


@Pipe({ name: 'myPurePipe', pure: true })
export class MyPurePipe extends MyPipe{
    constructor(){ super(); }
}

@Pipe({ name: 'myImpurePipe', pure: false })
export class MyImpurePipe extends MyPipe{
    constructor(){ super(); }
}
//Math.floor(Math.random() * (max - min + 1)) + min

@Pipe({ name: 'sumRandomPipe', pure : false })
export class SumRandomPipe extends MyPipe{
    sum:number = 0;

    transform(min, max) {
        this.sum +=  Math.floor(Math.random() * (max - min + 1)) + min;
        return this.sum;
    }
}

@Component({
    selector: 'pipes-demo',
    styles:[`
        :host{display: block; text-align: left;margin: 8px;} 
        .border{border: 1px solid black;padding: 8px;}
    `],
    template: `
<pre>
   <b> 1 | myPurePipe  : 'a' </b> : {{ 1  | myPurePipe  : 'a' }}<br>
   <b> 1 | myPurePipe  : 'a' </b> : {{ 1  | myPurePipe  : 'a' }}<br>
   <b> 2 | myImpurePipe: 'b' </b> : {{ 2  | myImpurePipe: 'b' }}<br>
   <b> 1 | sumRandomPipe: 3  </b> : {{ 1  | sumRandomPipe: 3 }}<br>
</pre>
`
})
export class  PipesDemo extends BaseDemo{
    constructor( cd:ChangeDetectorRef,
                 elmRef:ElementRef,
                 render: Renderer,
                 zone: NgZone
    ){
        super(cd,elmRef,render,zone,'Pipes demo');
    }
}