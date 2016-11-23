System.register(['angular2/core', '../../service/clickthrough.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, clickthrough_service_1, router_1;
    var IntroHeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (clickthrough_service_1_1) {
                clickthrough_service_1 = clickthrough_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            IntroHeaderComponent = (function () {
                function IntroHeaderComponent(_routeParams, _clickThroughService) {
                    this._routeParams = _routeParams;
                    this._clickThroughService = _clickThroughService;
                    this.clickthroughId = 0;
                }
                IntroHeaderComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.clickthroughId = +this._routeParams.get('id');
                    this._clickThroughService.getScenarios(this.clickthroughId)
                        .subscribe(function (data) { _this.title = data.title, _this.description = data.description; }, function (err) { return console.error(err); });
                };
                IntroHeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'intro-header',
                        templateUrl: 'app/html/clickthrough/intro-header.html',
                        providers: [clickthrough_service_1.ClickThroughService],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, clickthrough_service_1.ClickThroughService])
                ], IntroHeaderComponent);
                return IntroHeaderComponent;
            }());
            exports_1("IntroHeaderComponent", IntroHeaderComponent);
        }
    }
});
//# sourceMappingURL=intro-header.component.js.map