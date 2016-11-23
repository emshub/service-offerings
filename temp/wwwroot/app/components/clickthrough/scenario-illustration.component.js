System.register(['angular2/core', 'angular2/router', '../../service/clickthrough.service'], function(exports_1, context_1) {
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
    var core_1, router_1, clickthrough_service_1;
    var ScenarioIllustrationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (clickthrough_service_1_1) {
                clickthrough_service_1 = clickthrough_service_1_1;
            }],
        execute: function() {
            ScenarioIllustrationComponent = (function () {
                function ScenarioIllustrationComponent(_routeParams, _clickThroughService) {
                    this._routeParams = _routeParams;
                    this._clickThroughService = _clickThroughService;
                }
                ScenarioIllustrationComponent.prototype.ngOnInit = function () {
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ScenarioIllustrationComponent.prototype, "illustration", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ScenarioIllustrationComponent.prototype, "scenarioId", void 0);
                ScenarioIllustrationComponent = __decorate([
                    core_1.Component({
                        selector: 'scenario-illustration',
                        templateUrl: 'app/html/clickthrough/scenario-illustration.html',
                        providers: [clickthrough_service_1.ClickThroughService]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, clickthrough_service_1.ClickThroughService])
                ], ScenarioIllustrationComponent);
                return ScenarioIllustrationComponent;
            }());
            exports_1("ScenarioIllustrationComponent", ScenarioIllustrationComponent);
        }
    }
});
//# sourceMappingURL=scenario-illustration.component.js.map