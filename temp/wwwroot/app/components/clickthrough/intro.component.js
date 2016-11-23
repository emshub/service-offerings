System.register(['angular2/core', 'angular2/router', "./intro-header.component", "./how-to-link.component", "./intro-body.component"], function(exports_1, context_1) {
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
    var core_1, router_1, intro_header_component_1, how_to_link_component_1, intro_body_component_1, core_2;
    var IntroComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (intro_header_component_1_1) {
                intro_header_component_1 = intro_header_component_1_1;
            },
            function (how_to_link_component_1_1) {
                how_to_link_component_1 = how_to_link_component_1_1;
            },
            function (intro_body_component_1_1) {
                intro_body_component_1 = intro_body_component_1_1;
            }],
        execute: function() {
            IntroComponent = (function () {
                function IntroComponent() {
                }
                IntroComponent.prototype.ngOnInit = function () { };
                IntroComponent = __decorate([
                    core_1.Component({
                        selector: 'intro',
                        templateUrl: 'app/html/clickthrough/intro.html',
                        directives: [intro_header_component_1.IntroHeaderComponent, how_to_link_component_1.HowToLinkComponent, intro_body_component_1.IntroBodyComponent, router_1.ROUTER_DIRECTIVES],
                        styleUrls: ["../../app/styles/clickthrough/intro.min.css"],
                        encapsulation: core_2.ViewEncapsulation.None
                    }), 
                    __metadata('design:paramtypes', [])
                ], IntroComponent);
                return IntroComponent;
            }());
            exports_1("IntroComponent", IntroComponent);
        }
    }
});
//# sourceMappingURL=intro.component.js.map