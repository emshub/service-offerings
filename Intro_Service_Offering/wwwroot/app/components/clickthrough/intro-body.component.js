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
    var IntroBodyComponent;
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
            IntroBodyComponent = (function () {
                function IntroBodyComponent(_clickThroughService, _routeParams) {
                    this._clickThroughService = _clickThroughService;
                    this._routeParams = _routeParams;
                    this.scenarios = [];
                    this.clickthroughName = "";
                    this.clickthroughId = 0;
                }
                IntroBodyComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.clickthroughId = +this._routeParams.get('id');
                    //TODO: migrate as much of this as possible to service
                    this._clickThroughService.getScenarios(this.clickthroughId)
                        .subscribe(function (data) { _this.scenarios = data.scenarios, _this.clickthroughName = data.title; }, function (err) { return console.error(err); })
                        .add(function () { return _this._clickThroughService.orderByAscending(_this.scenarios); });
                };
                IntroBodyComponent = __decorate([
                    core_1.Component({
                        selector: 'intro-body',
                        templateUrl: 'app/html/clickthrough/intro-body.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [clickthrough_service_1.ClickThroughService]
                    }), 
                    __metadata('design:paramtypes', [clickthrough_service_1.ClickThroughService, router_1.RouteParams])
                ], IntroBodyComponent);
                return IntroBodyComponent;
            }());
            exports_1("IntroBodyComponent", IntroBodyComponent);
        }
    }
});
//# sourceMappingURL=intro-body.component.js.map