import {Component} from "@angular/core";
@Component({
    selector: 'my-app',
    //styles: [`:host{display: block;padding: 8px;border: 1px solid red}`],
    template: `
<div>
   <h1>Tabs demo <link-to-code></link-to-code></h1>
   
   <!--<tabs [source]="data"></tabs>-->
   
   
    <tabs>
        <!--h1>Tabs Header</h1>-->
        <tab title=" Progressive Web Apps ">Use modern web platform capabilities to deliver app-like experiences. High performance, offline and zero-step installation.</tab>
        <tab title=" Native ">Build native mobile apps with strategies from Ionic Framework, NativeScript, and React Native.</tab>
        <tab title=" Desktop ">Create desktop-installed apps across Mac, Windows, and Linux using the same Angular methods you've learned for the web plus ability to access native OS APIs.</tab>
        <tab title=" Code generation ">Angular turns your templates into code that's highly optimized for today's JavaScript virtual machines giving you all the benefits of hand-written code with the productivity of a framework.</tab>
        <tab title=" Universal ">Serve the first view of your application on node.js, .NET, PHP and other servers for near-instant rendering in just HTML and CSS. Also paves the way for sites that optimize for SEO.</tab>
        <tab title="Eyal Form ">
            <form>
                name: <input type="text"   name="name" [(ngModel)]="ng_name"/><br>
                email: <input type="email" name="email" [(ngModel)]="ng_email"/>
                {{ng | json}}
                <button (click)="onTest(test)">onTest</button>
            </form>
        </tab>
        <tab title="DavidShield">
            <tabs>
                <tab title="test111">Hello</tab>
            </tabs>
        </tab>
    </tabs>
</div>
`
})
export class App {
    ng:any = {};

    onTest(t){
        console.log(`this.test: ${this['test']}, t: ${t}`);
    }

    ngDoCheck(){
        for(let p in this){
            if(p.includes('ng_')){

                this.ng[p.substring(3)] = this[p];
            }
        }
    }
}