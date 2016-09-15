import {NgModule, enableProdMode} from '@angular/core';
import {App} from './App';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {Clock} from "./Clock";
import {PipesDemo, MyPurePipe, MyImpurePipe, SumRandomPipe} from "./PipeDemo";
import {PushDemo} from "./PushDemo";
import {TimerComp} from "./timer.cmp";
import {DoCheckComp} from "./do-check.cmp";
import {DefaultDemo} from "./DefaultDemo";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ShareModule} from "../share/share.module";
import {SequenceDiagram} from "../../ngEx/SequenceDiagramsService";

console.log = ()=>{};

@NgModule({
    declarations:[
        App
        ,Clock
        ,PipesDemo
        ,MyPurePipe
        ,MyImpurePipe
        ,SumRandomPipe
        ,DefaultDemo
        ,PushDemo
        ,TimerComp
        ,DoCheckComp
        ,SequenceDiagram
    ],
    providers   :[],
    bootstrap   :[App],
    imports     :[
         BrowserModule
        ,FormsModule
        ,ReactiveFormsModule
        ,ShareModule
    ],
    exports     :[]
})
export class AppModule{}

enableProdMode();


platformBrowserDynamic()
    .bootstrapModule(AppModule);