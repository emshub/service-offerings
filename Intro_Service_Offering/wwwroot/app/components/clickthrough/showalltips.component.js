System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1, core_2;
    var ShowAllTipsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            ShowAllTipsComponent = (function () {
                function ShowAllTipsComponent() {
                    this.toolTips = [];
                    this.showAllTipsIsExpanded = false;
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], ShowAllTipsComponent.prototype, "toolTips", void 0);
                ShowAllTipsComponent = __decorate([
                    core_1.Component({
                        selector: 'showall-tips',
                        templateUrl: 'app/html/clickthrough/showalltips.html',
                        styleUrls: ["../../app/styles/clickthrough/showalltips.min.css"],
                        encapsulation: core_2.ViewEncapsulation.None
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShowAllTipsComponent);
                return ShowAllTipsComponent;
            }());
            exports_1("ShowAllTipsComponent", ShowAllTipsComponent);
        }
    }
});
//# sourceMappingURL=showalltips.component.js.map