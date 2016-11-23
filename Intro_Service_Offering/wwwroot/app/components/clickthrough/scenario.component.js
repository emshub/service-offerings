System.register(['angular2/core', 'angular2/router', "./scenario-illustration.component", '../../service/clickthrough.service', "./tooltip.component", "./sticky-nav.component", "./showalltips.component"], function(exports_1, context_1) {
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
    var core_1, router_1, scenario_illustration_component_1, clickthrough_service_1, tooltip_component_1, sticky_nav_component_1, showalltips_component_1, core_2;
    var ScenarioComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (scenario_illustration_component_1_1) {
                scenario_illustration_component_1 = scenario_illustration_component_1_1;
            },
            function (clickthrough_service_1_1) {
                clickthrough_service_1 = clickthrough_service_1_1;
            },
            function (tooltip_component_1_1) {
                tooltip_component_1 = tooltip_component_1_1;
            },
            function (sticky_nav_component_1_1) {
                sticky_nav_component_1 = sticky_nav_component_1_1;
            },
            function (showalltips_component_1_1) {
                showalltips_component_1 = showalltips_component_1_1;
            }],
        execute: function() {
            ScenarioComponent = (function () {
                function ScenarioComponent(el, _routeParams, _clickThroughService, _router) {
                    this.el = el;
                    this._routeParams = _routeParams;
                    this._clickThroughService = _clickThroughService;
                    this._router = _router;
                    this.illustrations = [];
                    this.toolTips = [];
                    this.scenarioId = 0;
                    this.scenarioCount = 0;
                    this.nextScenarioId = 0;
                    this.prevScenarioId = 0;
                    this.scenarios = [];
                    this.prevScenarioName = "";
                    this.nextScenarioName = "";
                    this.clickthroughId = 1;
                    this.videoUrl = "";
                }
                ScenarioComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    setTimeout(function () {
                        switch (_this.clickthroughId) {
                            case 1:
                                _this._clickThroughService.animateClickthrough("SSO", _this.scenarioId);
                                break;
                            case 2:
                                _this._clickThroughService.animateClickthrough("MAM", _this.scenarioId);
                                break;
                            case 3:
                                _this._clickThroughService.animateClickthrough("MDM", _this.scenarioId);
                                break;
                            case 4:
                                _this._clickThroughService.animateClickthrough("MFA", _this.scenarioId);
                                break;
                            case 5:
                                _this._clickThroughService.animateClickthrough("Intro", _this.scenarioId);
                                break;
                        }
                    }, 1000);
                    this.clickthroughId = +this._routeParams.get('id');
                    this.scenarioId = +this._routeParams.get('scenarioId');
                    this._clickThroughService.getScenarios(this.clickthroughId)
                        .subscribe(function (data) {
                        _this.scenarios = data.scenarios,
                            _this.toolTips = data.scenarios[_this.scenarioId - 1].page.tooltips,
                            _this.illustrations = data.scenarios[_this.scenarioId - 1].page.illustrations,
                            _this.videoUrl = data.videoUrl;
                    }, //this -1 is crappy. did it this way to avoid having to look up scenario by id because i'm running out of time.
                    function (//this -1 is crappy. did it this way to avoid having to look up scenario by id because i'm running out of time.
                        err) { return console.error(err); }, function () { return _this.updatePrevAndNextButtons(); });
                    $('#video-modal').on('hidden.bs.modal', function (e) {
                        for (var i = 0; i < 4; i++) {
                            $("#video-modal video")[i].pause();
                        }
                    });
                };
                ScenarioComponent.prototype.goToPrevScenario = function () {
                    this._router.navigate(['Scenario', { id: this.clickthroughId, scenarioId: this.prevScenarioId }]);
                };
                ScenarioComponent.prototype.goToNextScenario = function () {
                    this._router.navigate(['Scenario', { id: this.clickthroughId, scenarioId: this.nextScenarioId }]);
                };
                //on scenario change, update the previous and next scenario arrow links
                ScenarioComponent.prototype.updatePrevAndNextButtons = function () {
                    this.scenarioCount = this.scenarios.length;
                    this.prevScenarioId = this.scenarioId - 1;
                    this.nextScenarioId = this.scenarioId + 1;
                    // Previous and next scenario links work like the scenarios are a loop
                    if (this.prevScenarioId < 1) {
                        this.prevScenarioId = this.scenarioCount;
                    } // On first scenario, make previous link to last scenario
                    if (this.nextScenarioId > this.scenarioCount) {
                        this.nextScenarioId = 1;
                    } // On last scenario, make next link to first scenario
                    this.prevScenarioName = this.scenarios[this.prevScenarioId - 1].shortTitle; //this -1 is terrible. change it, rachel.
                    this.nextScenarioName = this.scenarios[this.nextScenarioId - 1].shortTitle; //this -1 is terrible. change it, rachel.
                };
                //scrolls to the solution illustration. This is triggered by the down button
                ScenarioComponent.prototype.scrollToSolutionIllustration = function () {
                    $.fn.scrollView = function () {
                        return this.each(function () {
                            $('body').animate({
                                scrollTop: $(document).height()
                            }, 2500);
                        });
                    };
                    $('.bottom-bar').scrollView();
                };
                ScenarioComponent.prototype.playVideo = function () {
                    var videoName = "sso";
                    switch (this.clickthroughId) {
                        case 2:
                            videoName = "mam";
                            break;
                        case 3:
                            videoName = "mdm";
                            break;
                        case 4:
                            videoName = "mfa";
                            break;
                    }
                    $("#video-modal video").addClass("hidden");
                    $("#" + videoName + "-video").removeClass("hidden");
                    $('#video-modal').modal("toggle");
                };
                ScenarioComponent.prototype.closeVideo = function () {
                    $('#video-modal').modal("toggle");
                };
                ScenarioComponent.hammerInitialized = false;
                ScenarioComponent = __decorate([
                    core_1.Component({
                        selector: 'scenario',
                        templateUrl: 'app/html/clickthrough/scenario.html',
                        directives: [scenario_illustration_component_1.ScenarioIllustrationComponent, tooltip_component_1.ToolTipComponent, sticky_nav_component_1.StickynavComponent, showalltips_component_1.ShowAllTipsComponent, router_1.ROUTER_DIRECTIVES],
                        providers: [clickthrough_service_1.ClickThroughService],
                        styleUrls: ["../../app/styles/clickthrough/scenario.min.css", "../../app/styles/clickthrough/intro-scenarios.min.css",
                            "../../app/styles/clickthrough/mam-scenarios.min.css", "../../app/styles/clickthrough/sso-scenarios.min.css",
                            "../../app/styles/clickthrough/mdm-scenarios.min.css", "../../app/styles/clickthrough/mfa-scenarios.min.css",
                            "../../app/styles/clickthrough/intro.min.css"],
                        encapsulation: core_2.ViewEncapsulation.None
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, router_1.RouteParams, clickthrough_service_1.ClickThroughService, router_1.Router])
                ], ScenarioComponent);
                return ScenarioComponent;
            }());
            exports_1("ScenarioComponent", ScenarioComponent);
        }
    }
});
//# sourceMappingURL=scenario.component.js.map