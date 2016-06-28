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
    var HowToLinkComponent;
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
            HowToLinkComponent = (function () {
                function HowToLinkComponent(_routeParams, _clickThroughService) {
                    this._routeParams = _routeParams;
                    this._clickThroughService = _clickThroughService;
                    this.clickthroughId = +this._routeParams.get('id');
                    this.label = "View Set-up Guide";
                }
                HowToLinkComponent.prototype.ngOnInit = function () {
                    $('#video-modal').on('hidden.bs.modal', function (e) {
                        for (var i = 0; i < 4; i++) {
                            $("#video-modal video")[i].pause();
                        }
                    });
                };
                HowToLinkComponent.prototype.playVideo = function () {
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
                HowToLinkComponent.prototype.closeVideo = function () {
                    $('#video-modal').modal("toggle");
                };
                HowToLinkComponent = __decorate([
                    core_1.Component({
                        selector: 'how-to-link',
                        templateUrl: 'app/html/clickthrough/how-to-link.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [clickthrough_service_1.ClickThroughService]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, clickthrough_service_1.ClickThroughService])
                ], HowToLinkComponent);
                return HowToLinkComponent;
            }());
            exports_1("HowToLinkComponent", HowToLinkComponent);
        }
    }
});
//# sourceMappingURL=how-to-link.component.js.map