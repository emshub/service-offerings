System.register(['angular2/core', '../../service/clickthrough.service', "./it-pro-body.component", 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, clickthrough_service_1, it_pro_body_component_1, router_1, core_2;
    var ItProComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (clickthrough_service_1_1) {
                clickthrough_service_1 = clickthrough_service_1_1;
            },
            function (it_pro_body_component_1_1) {
                it_pro_body_component_1 = it_pro_body_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ItProComponent = (function () {
                function ItProComponent(_clickThroughService, _routeParams) {
                    this._clickThroughService = _clickThroughService;
                    this._routeParams = _routeParams;
                    this.clickthroughId = 0;
                }
                ItProComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.clickthroughId = +this._routeParams.get('id');
                    this._clickThroughService.getScenarios(this.clickthroughId)
                        .subscribe(function (data) { _this.title = data.title, _this.description = data.itPro.description, _this.steps = data.itPro.itProSteps; }, function (err) { return console.error(err); });
                };
                ItProComponent = __decorate([
                    core_1.Component({
                        selector: 'it-pro',
                        templateUrl: 'app/html/clickthrough/it-pro.html',
                        directives: [it_pro_body_component_1.ItProBodyComponent, router_1.ROUTER_DIRECTIVES],
                        providers: [clickthrough_service_1.ClickThroughService],
                        styleUrls: ["../../app/styles/clickthrough/it-pro.min.css"],
                        encapsulation: core_2.ViewEncapsulation.None
                    }), 
                    __metadata('design:paramtypes', [clickthrough_service_1.ClickThroughService, router_1.RouteParams])
                ], ItProComponent);
                return ItProComponent;
            }());
            exports_1("ItProComponent", ItProComponent);
        }
    }
});
//# sourceMappingURL=it-pro.component.js.map