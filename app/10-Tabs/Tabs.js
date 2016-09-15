"use strict";
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
var Tab_1 = require("./Tab");
var Tabs = (function () {
    function Tabs() {
    }
    Tabs.prototype.setActive = function (tab) {
        this.tabs.forEach(function (t) { return t.isActive = false; });
        tab.isActive = true;
    };
    __decorate([
        core_1.ContentChildren(Tab_1.Tab), 
        __metadata('design:type', core_1.QueryList)
    ], Tabs.prototype, "tabs", void 0);
    Tabs = __decorate([
        core_1.Component({
            selector: 'tabs',
            //exportAs: 'tabs',
            styles: ["/***\nBootstrap Line Tabs by @keenthemes\nA component of Metronic Theme - #1 Selling Bootstrap 3 Admin Theme in Themeforest: http://j.mp/metronictheme\nLicensed under MIT\n***/\n\n/* Tabs panel */\n.tabbable-panel {\n  border:1px solid #eee;\n  padding: 10px;\n}\n\n/* Default mode */\n.tabbable-line > .nav-tabs {\n  border: none;\n  margin: 0px;\n}\n.tabbable-line > .nav-tabs > li {\n  margin-right: 2px;\n   padding: 8px;\n}\n.tabbable-line > .nav-tabs > li > a {\n  border: 0;\n  margin-right: 0;\n  color: #737373;\n}\n.tabbable-line > .nav-tabs > li > a > i {\n  color: #a6a6a6;\n}\n.tabbable-line > .nav-tabs > li.open, .tabbable-line > .nav-tabs > li:hover {\n  border-bottom: 4px solid #fbcdcf;\n}\n.tabbable-line > .nav-tabs > li.open > a, .tabbable-line > .nav-tabs > li:hover > a {\n  border: 0;\n  background: none !important;\n  color: #333333;\n}\n.tabbable-line > .nav-tabs > li.open > a > i, .tabbable-line > .nav-tabs > li:hover > a > i {\n  color: #a6a6a6;\n}\n.tabbable-line > .nav-tabs > li.open .dropdown-menu, .tabbable-line > .nav-tabs > li:hover .dropdown-menu {\n  margin-top: 0px;\n}\n.tabbable-line > .nav-tabs > li.active {\n  border-bottom: 4px solid #f3565d;\n  position: relative;\n}\n.tabbable-line > .nav-tabs > li.active > a {\n  border: 0;\n  color: #333333;\n}\n.tabbable-line > .nav-tabs > li.active > a > i {\n  color: #404040;\n}\n.tabbable-line > .tab-content {\n  margin-top: -3px;\n  background-color: #fff;\n  border: 0;\n  border-top: 1px solid #eee;\n  padding: 15px 0;\n}\n.portlet .tabbable-line > .tab-content {\n  padding-bottom: 0;\n}\n\n/* Below tabs mode */\n/*.nav-tabs>li{\n    padding: 8px;\n}*/\n\n.tabbable-line.tabs-below > .nav-tabs > li {\n  border-top: 4px solid transparent;\n}\n.tabbable-line.tabs-below > .nav-tabs > li > a {\n  margin-top: 0;\n}\n.tabbable-line.tabs-below > .nav-tabs > li:hover {\n  border-bottom: 0;\n  border-top: 4px solid #fbcdcf;\n}\n.tabbable-line.tabs-below > .nav-tabs > li.active {\n  margin-bottom: -2px;\n  border-bottom: 0;\n  border-top: 4px solid #f3565d;\n}\n.tabbable-line.tabs-below > .tab-content {\n  margin-top: -10px;\n  border-top: 0;\n  border-bottom: 1px solid #eee;\n  padding-bottom: 15px;\n}"],
            template: "\n<div class=\"tabbable-panel\">\n\t<div class=\"tabbable-line\">\n\t\t<ul class=\"nav nav-tabs \">\n            <li [class.active]=\"tab.isActive\"\n                (click)=\"setActive(tab)\"\n                *ngFor=\"let tab of tabs\">\n                {{tab.title}}\n            </li>\n        </ul>\n        <div class=\"tab-content\">\n            <ng-content></ng-content>\n        </div>\n    </div>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], Tabs);
    return Tabs;
}());
exports.Tabs = Tabs;
//# sourceMappingURL=Tabs.js.map