System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var ToolTipComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ToolTipComponent = (function () {
                function ToolTipComponent(_routeParams, renderer) {
                    this._routeParams = _routeParams;
                    this.renderer = renderer;
                }
                ToolTipComponent.prototype.ngOnInit = function () {
                };
                ToolTipComponent.prototype.showToolTip = function () {
                    //get a reference to the tooltip statement container div
                    this.el = this.toolTipDiv.nativeElement;
                    var prevState;
                    prevState = this.el.style.visibility;
                    //hide all tooltips. this makes sure that only the clicked tooltip is shown
                    $('.scenario-tooltip').css('visibility', 'hidden'); //TODO: find an AngularJS 2 equivalent
                    if (prevState == 'visible') {
                        this.el.style.visibility = 'hidden';
                    }
                    else {
                        this.el.style.visibility = 'visible';
                    }
                };
                __decorate([
                    core_1.ViewChild('toolTipDiv'), 
                    __metadata('design:type', core_1.ElementRef)
                ], ToolTipComponent.prototype, "toolTipDiv", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ToolTipComponent.prototype, "toolTip", void 0);
                ToolTipComponent = __decorate([
                    core_1.Component({
                        selector: 'scenario-tooltip',
                        templateUrl: 'app/html/clickthrough/tooltip.html',
                        styleUrls: ["../../app/styles/clickthrough/tooltip.css"],
                        host: {
                            "click": "onClick()"
                        }
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, core_1.Renderer])
                ], ToolTipComponent);
                return ToolTipComponent;
            }());
            exports_1("ToolTipComponent", ToolTipComponent);
        }
    }
});
//# sourceMappingURL=tooltip.component.js.map