System.register(['angular2/core', 'angular2/http', 'angular2/router', '../../service/clickthrough.service', '../../service/site.service'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, clickthrough_service_1, site_service_1, core_2;
    var StickynavComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (clickthrough_service_1_1) {
                clickthrough_service_1 = clickthrough_service_1_1;
            },
            function (site_service_1_1) {
                site_service_1 = site_service_1_1;
            }],
        execute: function() {
            StickynavComponent = (function () {
                function StickynavComponent(_router, _routeParams, _clickThroughService, http, _siteService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._clickThroughService = _clickThroughService;
                    this.http = http;
                    this._siteService = _siteService;
                    this.scenarios = [];
                    this.clickthroughs = [];
                    this.isShow = true;
                    this.currentScenarioId = "";
                    this.clickthroughId = 1;
                    this.clickthroughName = "";
                }
                StickynavComponent.prototype.onClick = function () {
                    this.isShow = !this.isShow;
                };
                StickynavComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.clickthroughId = +this._routeParams.get('id');
                    this.currentScenarioId = this._routeParams.get('scenarioId');
                    this._clickThroughService.getScenarios(this.clickthroughId)
                        .subscribe(function (data) { _this.scenarios = data.scenarios, _this.clickthroughName = data.title; }, function (err) { return console.error(err); })
                        .add(function () { return _this._clickThroughService; });
                    //get the list of clickthroughs that will be displayed in the drop down list
                    this._siteService.getClickthroughs()
                        .subscribe(function (data) { _this.clickthroughs = data.clickthroughs; }, function (err) { return console.error(err); });
                };
                StickynavComponent.prototype.gotoScenario = function (scenarioID) {
                    this._router.navigate(['Scenario', { id: this.clickthroughId, scenarioId: scenarioID }]);
                };
                StickynavComponent.prototype.gotoIntro = function () {
                    this._router.navigate(['Intro', { id: this.clickthroughId }]);
                };
                StickynavComponent = __decorate([
                    core_1.Component({
                        selector: 'sticky-nav',
                        templateUrl: 'app/html/clickthrough/sticky-nav.html',
                        providers: [clickthrough_service_1.ClickThroughService, site_service_1.SiteService],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        styleUrls: ["../../app/styles/clickthrough/sticky-nav.min.css"],
                        encapsulation: core_2.ViewEncapsulation.None
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, clickthrough_service_1.ClickThroughService, http_1.Http, site_service_1.SiteService])
                ], StickynavComponent);
                return StickynavComponent;
            }());
            exports_1("StickynavComponent", StickynavComponent);
        }
    }
});
//# sourceMappingURL=sticky-nav.component.js.map