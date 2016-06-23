import {Component} from "@angular/core";
import {Tabs} from "./Tabs";
import {Tab} from "./Tab";

@Component({
    selector: 'my-app',
    directives: [Tabs,Tab],
    //styles: [`:host{display: block;padding: 8px;border: 1px solid red}`],
    template: `
<div>
   <h1>Tabs demo</h1>
    <tabs>
        <tab title=" Progressive Web Apps ">Use modern web platform capabilities to deliver app-like experiences. High performance, offline and zero-step installation.</tab>
        <tab title=" Native ">Build native mobile apps with strategies from Ionic Framework, NativeScript, and React Native.</tab>
        <tab title=" Desktop ">Create desktop-installed apps across Mac, Windows, and Linux using the same Angular methods you've learned for the web plus ability to access native OS APIs.</tab>
        <tab title=" Code generation ">Angular turns your templates into code that's highly optimized for today's JavaScript virtual machines giving you all the benefits of hand-written code with the productivity of a framework.</tab>
        <tab title=" Universal ">Serve the first view of your application on node.js, .NET, PHP and other servers for near-instant rendering in just HTML and CSS. Also paves the way for sites that optimize for SEO.</tab>
        <tab title=" Code Splitting ">Angular apps load quickly with the new Component Router that delivers automatic code-splitting so users only load code required to render the view they request.</tab>
        <!--<tab title="DavidShield">
            <tabs>
                <tab title="test111">Hello</tab>
            </tabs>
        </tab>-->
    </tabs>
</div>
`
})
export class App {
}