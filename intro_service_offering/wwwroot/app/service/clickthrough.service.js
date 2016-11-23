System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var ClickThroughService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            ClickThroughService = (function () {
                function ClickThroughService(http) {
                    this.http = http;
                }
                ClickThroughService.prototype.orderByAscending = function (scenarioList) {
                    return scenarioList.sort(function (a, b) {
                        if (a.id < b.id) {
                            return 1;
                        }
                        if (a.id > b.id) {
                            return -1;
                        }
                        return 0;
                    });
                };
                ClickThroughService.prototype.getScenarios = function (clickthroughId) {
                    var fileName = "";
                    switch (clickthroughId) {
                        case 1:
                            fileName = '../lib/json/sso-clickthrough.json';
                            break;
                        case 2:
                            fileName = '../lib/json/mam-clickthrough.json';
                            break;
                        case 3:
                            fileName = '../lib/json/mdm-clickthrough.json';
                            break;
                        case 4:
                            fileName = '../lib/json/mfa-clickthrough.json';
                            break;
                        case 5:
                            fileName = '../lib/json/intro-clickthrough.json';
                            break;
                    }
                    return this.http.get(fileName)
                        .map(function (res) { return res.json(); });
                };
                // run animations for given clickthrough, switching on clickthrough name
                ClickThroughService.prototype.animateClickthrough = function (clickthroughName, scenarioId) {
                    switch (clickthroughName) {
                        case "SSO":
                            this.animateSSO(scenarioId);
                            break;
                        case "MAM":
                            this.animateMAM(scenarioId);
                            break;
                        case "MDM":
                            this.animateMDM(scenarioId);
                            break;
                        case "MFA":
                            this.animateMFA(scenarioId);
                            break;
                        case "Intro":
                            this.animateIntro(scenarioId);
                            break;
                        default:
                            break;
                    }
                };
                // run animations for SSO clickthrough, switching on scenarioId
                ClickThroughService.prototype.animateSSO = function (scenarioId) {
                    switch (scenarioId) {
                        case 1:
                            var animateScenario1_1 = $.scrollorama({ blocks: '#scen1-illus1', enablePin: false });
                            var animateScenario1_2 = $.scrollorama({ blocks: '#scen1-illus2', enablePin: false });
                            animateScenario1_1
                                .animate('.sso-scenario1__airplane img, ' +
                                '.sso-scenario1__hacker-image img', { delay: -50, duration: 1700, property: 'left', start: 0, end: 1100 })
                                .animate('.sso-scenario1__hacker-image img, ' +
                                '.sso-scenario1__airplane img', { delay: -50, duration: 200, property: 'opacity', start: 1, end: 0 })
                                .animate('.sso-scenario1__post-it img,' +
                                '.sso-scenario1__password-icons img', { delay: 1, duration: 200, property: 'opacity', start: 1, end: 0 });
                            animateScenario1_2
                                .animate('.sso-scenario1__monitors img, ' +
                                '.sso-scenario1__master-key img', { delay: -480, duration: 190, property: 'opacity', start: 0 });
                            break;
                        case 2:
                            var animateScenario2_1 = $.scrollorama({ blocks: '#scen2-illus1', enablePin: false });
                            var animateScenario2_2 = $.scrollorama({ blocks: '#scen2-illus2', enablePin: false });
                            animateScenario2_1
                                .animate('.sso-scenario2__exclaimation img', { delay: -50, duration: 2500, property: 'bottom', start: 0, end: 1100 })
                                .animate('.sso-scenario2__exclaimation img, ' +
                                '.sso-scenario2__monitor img, ' +
                                '.sso-scenario2__nightmare-items img,' +
                                '.sso-scenario2__mobile img', { delay: -50, duration: 200, property: 'opacity', start: 1, end: 0 })
                                .animate('.sso-scenario2__mobile img', { delay: -50, duration: 1000, property: 'rotate', start: 360 });
                            animateScenario2_2
                                .animate('.sso-scenario2__monitor-key img, ' +
                                '.sso-scenario2__superit img, ' +
                                '.sso-scenario2__xbox img', { delay: -480, duration: 190, property: 'opacity', start: 0 });
                            break;
                        case 3:
                            var animateScenario3_1 = $.scrollorama({ blocks: '#scen3-illus1', enablePin: false });
                            var animateScenario3_2 = $.scrollorama({ blocks: '#scen3-illus2', enablePin: false });
                            animateScenario3_1
                                .animate('.sso-scenario3__little-cloud-items img, ' +
                                '.sso-scenario3__big-cloud-items img, ' +
                                '.sso-scenario3__monitor img, ' +
                                '.sso-scenario3__mobile img', { delay: -50, duration: 190, property: 'opacity', start: 1, end: 0 });
                            animateScenario3_2
                                .animate('.sso-scenario3__resolved-little-cloud-items img, ' +
                                '.sso-scenario3__resolved-big-cloud-items img, ' +
                                '.sso-scenario3__monitor-key img, ' +
                                '.sso-scenario3__mobile-key img', { delay: -480, duration: 190, property: 'opacity', start: 0 });
                            break;
                        case 4:
                            var animateScenario4_1 = $.scrollorama({ blocks: '#scen4-illus1', enablePin: false });
                            var animateScenario4_2 = $.scrollorama({ blocks: '#scen4-illus2', enablePin: false });
                            animateScenario4_1
                                .animate('.sso-scenario4__small-cloud-items img, ' +
                                '.sso-scenario4__runner img, ' +
                                '.sso-scenario4__app-rain img', { delay: -50, duration: 250, property: 'opacity', start: 1, end: 0 })
                                .animate('.sso-scenario4__runner img', { delay: -50, duration: 1700, property: 'left', start: 0, end: 1100 })
                                .animate('.sso-scenario4__app-rain img', { delay: -50, duration: 1700, property: 'top', start: 0, end: 1100 })
                                .animate('.sso-scenario4__big-cloud img', { delay: -50, duration: 100, property: 'right', start: 0, end: 60 })
                                .animate('.sso-scenario4__big-cloud img', { delay: -50, duration: 600, property: 'zoom', start: 1, end: 0 });
                            animateScenario4_2
                                .animate('.sso-scenario4__resolved-small-cloud-items img, ' +
                                '.sso-scenario4__master-key img', { delay: -480, duration: 190, property: 'opacity', start: 0 })
                                .animate('.sso-scenario4__small-cloud img, ' +
                                '.sso-scenario4__key-rays img, ' +
                                '.sso-scenario4__sun-center img', { delay: -400, duration: 100, property: 'bottom', start: 0, end: 30 })
                                .animate('.sso-scenario4__small-cloud img, ' +
                                '.sso-scenario4__key-rays img, ' +
                                '.sso-scenario4__sun-center img', { delay: -400, duration: 100, property: 'right', start: 0, end: 30 });
                            break;
                        default:
                            break;
                    }
                };
                // run animations for MAM clickthrough, switching on scenarioId
                ClickThroughService.prototype.animateMAM = function (scenarioId) {
                    switch (scenarioId) {
                        case 1:
                            var animateScenario1_1 = $.scrollorama({ blocks: '#scen1-illus1', enablePin: false });
                            var animateScenario1_2 = $.scrollorama({ blocks: '#scen1-illus2', enablePin: false });
                            animateScenario1_1
                                .animate('.mam-scenario1__personal-device img', { delay: -75, duration: 1700, property: 'right', start: 0, end: 1100 })
                                .animate('.mam-scenario1__work-device img, .mam-scenario1__it-box img', { delay: -75, duration: 1700, property: 'left', start: 0, end: 1100 })
                                .animate('.mam-scenario1__error-icon img, .mam-scenario1__dollars img', { delay: -75, duration: 2500, property: 'bottom', start: 0, end: 1100 })
                                .animate('.mam-scenario1__personal-device img, ' +
                                '.mam-scenario1__work-device img, ' +
                                '.mam-scenario1__error-icon img, ' +
                                '.mam-scenario1__dollars img, ' +
                                '.mam-scenario1__it-box img', { delay: -75, duration: 200, property: 'opacity', start: 1, end: 0 });
                            animateScenario1_2
                                .animate('.mam-scenario1__city-escape img', { delay: -480, duration: 200, property: 'top', start: -140, end: 0 })
                                .animate('.mam-scenario1__app-cloud img', { delay: -480, duration: 150, property: 'left', start: -90, end: 0 })
                                .animate('.mam-scenario1__it-guy img', { delay: -480, duration: 150, property: 'right', start: -90, end: 0 })
                                .animate('.mam-scenario1__city-escape img, .mam-scenario1__app-cloud-content img, .mam-scenario1__app-cloud img', { delay: -480, duration: 190, property: 'opacity', start: 0 });
                            break;
                        case 2:
                            var animateScenario2_1 = $.scrollorama({ blocks: '#scen2-illus1', enablePin: false });
                            var animateScenario2_2 = $.scrollorama({ blocks: '#scen2-illus2', enablePin: false });
                            animateScenario2_1
                                .animate('.mam-scenario2__it-man-climbing img', { delay: -75, duration: 1700, property: 'left', start: 0, end: 1100 })
                                .animate('.mam-scenario2__boy-question img, ' +
                                '.mam-scenario2__girl-question img, ' +
                                '.mam-scenario2__it-man-exclamation img, ' +
                                '.mam-scenario2__public-app-store img', { delay: -75, duration: 2500, property: 'bottom', start: 0, end: 1100 })
                                .animate('.mam-scenario2__boy-question img, ' +
                                '.mam-scenario2__girl-question img, ' +
                                '.mam-scenario2__it-man-exclamation img, ' +
                                '.mam-scenario2__public-app-store img,' +
                                '.mam-scenario2__it-man-climbing img', { delay: -75, duration: 200, property: 'opacity', start: 1, end: 0 });
                            animateScenario2_2
                                .animate('.mam-scenario2__happy-users img', { delay: -480, duration: 110, property: 'left', start: -90, end: 0 })
                                .animate('.mam-scenario2__happy-users img, ' +
                                '.mam-scenario2__apps-arrow img, ' +
                                '.mam-scenario2__cloud img,' +
                                '.mam-scenario2__cloud-content img', { delay: -480, duration: 100, property: 'opacity', start: 0 });
                            break;
                        case 3:
                            var animateScenario3_1 = $.scrollorama({ blocks: '#scen3-illus1', enablePin: false });
                            var animateScenario3_2 = $.scrollorama({ blocks: '#scen3-illus2', enablePin: false });
                            animateScenario3_1
                                .animate('.mam-scenario3__it-lady img', { delay: -50, duration: 1700, property: 'left', start: 0, end: 1100 })
                                .animate('.mam-scenario3__it-policies img, ' +
                                '.mam-scenario3__cloud-personal-app img', { delay: -50, duration: 2500, property: 'bottom', start: 0, end: 1100 })
                                .animate('.mam-scenario3__it-policies img, ' +
                                '.mam-scenario3__guy-in-computer-question img, ' +
                                '.mam-scenario3__it-lady img, ' +
                                '.mam-scenario3__cloud-personal-app img', { delay: 0, duration: 200, property: 'opacity', start: 1, end: 0 });
                            animateScenario3_2
                                .animate('.mam-scenario3__cloud-it-policies img', { delay: -480, duration: 300, property: 'right', start: -140, end: 0 })
                                .animate('.mam-scenario3__all-company-data img, ' +
                                '.mam-scenario3__cloud-personal-app2 img, ' +
                                '.mam-scenario3__cloud-it-policies img', { delay: -480, duration: 190, property: 'opacity', start: 0 });
                            break;
                        case 4:
                            var animateScenario4_1 = $.scrollorama({ blocks: '#scen4-illus1', enablePin: false });
                            var animateScenario4_2 = $.scrollorama({ blocks: '#scen4-illus2', enablePin: false });
                            animateScenario4_1
                                .animate('.mam-scenario4__runner img', { delay: -50, duration: 1700, property: 'right', start: 0, end: 1100 })
                                .animate('.mam-scenario4__personal-work-data img', { delay: -75, duration: 1700, property: 'left', start: 0, end: 1100 })
                                .animate('.mam-scenario4__mobile-phone img', { delay: -50, duration: 1700, property: 'top', start: 0, end: 1100 })
                                .animate('.mam-scenario4__runner img, .mam-scenario4__personal-work-data img, .mam-scenario4__arrow-down img, .mam-scenario4__mobile-phone img ', { delay: 0, duration: 200, property: 'opacity', start: 1, end: 0 });
                            animateScenario4_2
                                .animate('.mam-scenario4__personal-data img, .mam-scenario4__work-data img', { delay: -480, duration: 150, property: 'top', start: -90, end: 0 })
                                .animate('.mam-scenario4__personal-data img, .mam-scenario4__work-data img, .mam-scenario4__runner-jumping img', { delay: -480, duration: 140, property: 'opacity', start: 0 })
                                .animate('.mam-scenario4__runner-jumping img', { delay: -480, duration: 150, property: 'bottom', start: 0, end: 90 });
                            break;
                        default:
                            break;
                    }
                };
                // run animations for MDM clickthrough, switching on scenarioId
                ClickThroughService.prototype.animateMDM = function (scenarioId) {
                    switch (scenarioId) {
                        case 1:
                            var animateScenario1_1 = $.scrollorama({ blocks: '#scen1-illus1', enablePin: false });
                            var animateScenario1_2 = $.scrollorama({ blocks: '#scen1-illus2', enablePin: false });
                            animateScenario1_1
                                .animate('.mdm-scenario1__checked-cloud img, ' +
                                '.mdm-scenario1__left-blocked-cloud img, ' +
                                '.mdm-scenario1__right-blocked-cloud img', { delay: -50, duration: 2000, property: 'bottom', start: 0, end: 1100 })
                                .animate('.mdm-scenario1__checked-cloud img, ' +
                                '.mdm-scenario1__left-blocked-cloud img, ' +
                                '.mdm-scenario1__right-blocked-cloud img, ' +
                                '.mdm-scenario1__exclamation img', { delay: -75, duration: 250, property: 'opacity', start: 1, end: 0 })
                                .animate('.mdm-scenario1__problem-center-cord img, ' +
                                '.mdm-scenario1__problem-left-cord img,' +
                                '.mdm-scenario1__problem-right-cord img', { delay: -50, duration: 250, property: 'opacity', start: 1, end: 0 })
                                .animate('.mdm-scenario1__exclamation img', { delay: 50, duration: 2000, property: 'bottom', start: 0, end: 1100 })
                                .animate('.mdm-scenario1__problem-right-work-station img', { delay: 50, duration: 2300, property: 'left', start: 0, end: 1100 })
                                .animate('.mdm-scenario1__problem-left-work-station img', { delay: 50, duration: 2300, property: 'right', start: 0, end: 1100 })
                                .animate('.mdm-scenario1__problem-right-work-station img, ' +
                                '.mdm-scenario1__problem-left-work-station img', { delay: 50, duration: 400, property: 'opacity', start: 1, end: 0 });
                            animateScenario1_2
                                .animate('.mdm-scenario1__solution-right-work-station img', { delay: -480, duration: 300, property: 'right', start: -140, end: 0 })
                                .animate('.mdm-scenario1__solution-left-work-station img', { delay: -480, duration: 300, property: 'left', start: -140, end: 0 })
                                .animate('.mdm-scenario1__solution-right-work-station img, ' +
                                '.mdm-scenario1__solution-left-work-station img, ' +
                                '.mdm-scenario1__dual-clouds img', { delay: -480, duration: 150, property: 'opacity', start: 0, end: 1 })
                                .animate('.mdm-scenario1__dual-clouds img', { delay: -480, duration: 150, property: 'top', start: -90, end: 0 })
                                .animate('.mdm-scenario1__solution-left-cord img, ' +
                                '.mdm-scenario1__solution-middle-cord img, ' +
                                '.mdm-scenario1__solution-right-cord img', { delay: -70, duration: 50, property: 'opacity', start: 0, end: 1 });
                            break;
                        case 2:
                            var animateScenario2_1 = $.scrollorama({ blocks: '#scen2-illus1', enablePin: false });
                            var animateScenario2_2 = $.scrollorama({ blocks: '#scen2-illus2', enablePin: false });
                            animateScenario2_1
                                .animate('.mdm-scenario2__angry-device-cloud img', { delay: -50, duration: 2000, property: 'bottom', start: 0, end: 300 })
                                .animate('.mdm-scenario2__IT-guy img', { delay: -50, duration: 2000, property: 'right', start: 0, end: 1100 })
                                .animate('.mdm-scenario2__downloading-cloud img, ' +
                                '.mdm-scenario2__question img, .mdm-scenario2__clock-cloud img', { delay: -75, duration: 200, property: 'opacity', start: 1, end: 0 })
                                .animate('.mdm-scenario2__angry-device-cloud img, ' +
                                '.mdm-scenario2__IT-guy img', { delay: -80, duration: 320, property: 'opacity', start: 1, end: 0 });
                            animateScenario2_2
                                .animate('.mdm-scenario2__single-checked-device img, ' +
                                '.mdm-scenario2__checked-devices img', { delay: -480, duration: 150, property: 'top', start: -90, end: 0 })
                                .animate('.mdm-scenario2__single-checked-device img, ' +
                                '.mdm-scenario2__checked-devices img', { delay: -480, duration: 150, property: 'opacity', start: 0, end: 1 })
                                .animate('.mdm-scenario2__happy-IT img', { delay: -480, duration: 150, property: 'left', start: -90, end: 0 })
                                .animate('.mdm-scenario2__happy-IT img', { delay: -480, duration: 150, property: 'opacity', start: 0, end: 1 });
                            break;
                        case 3:
                            var animateScenario2_1 = $.scrollorama({ blocks: '#scen3-illus1', enablePin: false });
                            var animateScenario2_2 = $.scrollorama({ blocks: '#scen3-illus2', enablePin: false });
                            animateScenario2_1
                                .animate('.mdm-scenario3__playing-tetris img', { delay: -50, duration: 2500, property: 'left', start: 0, end: 400 })
                                .animate('.mdm-scenario3__line-unhappy img', { delay: -50, duration: 2500, property: 'right', start: 0, end: 400 })
                                .animate('.mdm-scenario3__playing-tetris img, ' +
                                '.mdm-scenario3__line-unhappy img', { delay: -50, duration: 500, property: 'opacity', start: 1, end: 0 });
                            animateScenario2_2
                                .animate('.mdm-scenario3__checkout-employee img', { delay: -480, duration: 300, property: 'right', start: -140, end: 0 })
                                .animate('.mdm-scenario3__line-happy img', { delay: -480, duration: 300, property: 'left', start: -140, end: 0 })
                                .animate('.mdm-scenario3__checkout-employee img, ' +
                                '.mdm-scenario3__line-happy img', { delay: -480, duration: 200, property: 'opacity', start: 0, end: 1 });
                            break;
                        case 4:
                            var animateScenario2_1 = $.scrollorama({ blocks: '#scen4-illus1', enablePin: false });
                            var animateScenario2_2 = $.scrollorama({ blocks: '#scen4-illus2', enablePin: false });
                            animateScenario2_1
                                .animate('.mdm-scenario4__plant img', { delay: -50, duration: 2500, property: 'right', start: 0, end: 400 })
                                .animate('.mdm-scenario4__table img', { delay: -50, duration: 2500, property: 'left', start: 0, end: 400 })
                                .animate('.mdm-scenario4__exclamation img', { delay: -50, duration: 2500, property: 'bottom', start: 0, end: 400 })
                                .animate('.mdm-scenario4__table img, ' +
                                '.mdm-scenario4__plant img, ' +
                                '.mdm-scenario4__angry-tablet img', { delay: -50, duration: 500, property: 'opacity', start: 1, end: 0 })
                                .animate('.mdm-scenario4__exclamation img', { delay: -50, duration: 250, property: 'opacity', start: 1, end: 0 });
                            animateScenario2_2
                                .animate('.mdm-scenario4__solution-plant img', { delay: -480, duration: 300, property: 'left', start: -140, end: 0 })
                                .animate('.mdm-scenario4__solution-table img', { delay: -480, duration: 300, property: 'right', start: -140, end: 0 })
                                .animate('.mdm-scenario4__solution-table img, ' +
                                '.mdm-scenario4__solution-plant img, ' +
                                '.mdm-scenario4__pin-tablet img', { delay: -480, duration: 200, property: 'opacity', start: 0, end: 1 });
                            break;
                    }
                };
                // run animations for MFA clickthrough, switching on scenarioId
                ClickThroughService.prototype.animateMFA = function (scenarioId) {
                    switch (scenarioId) {
                        case 1:
                            var animateScenario1_1 = $.scrollorama({ blocks: '#scen1-illus1', enablePin: false });
                            var animateScenario1_2 = $.scrollorama({ blocks: '#scen1-illus2', enablePin: false });
                            animateScenario1_1
                                .animate('.mfa-scenario1__it-rules-long img', { delay: -25, duration: 2300, property: 'bottom', start: 0, end: 1100 })
                                .animate('.mfa-scenario1__it-rules-long img, ' +
                                '.mfa-scenario1__it-lady img', { delay: -25, duration: 400, property: 'opacity', start: 1, end: 0 })
                                .animate('.mfa-long__password img, ' +
                                '.mfa-scenario1__post-it img', { delay: -50, duration: 500, property: 'opacity', start: 1, end: 0 })
                                .animate('.mfa-scenario1__it-lady img', { delay: -25, duration: 2300, property: 'right', start: 0, end: 1100 });
                            animateScenario1_2
                                .animate('.mfa-scenario1__it-rules-short img, ' +
                                '.mfa-short__password img', { delay: -480, duration: 90, property: 'top', start: -90, end: 0 })
                                .animate('.mfa-scenario1__it-rules-short img, ' +
                                '.mfa-short__password img', { delay: -480, duration: 90, property: 'opacity', start: 0, end: 1 })
                                .animate('.mfa-check__mark img', { delay: -480, duration: 90, property: 'opacity', start: 0, end: 1 });
                            break;
                        case 2:
                            var animateScenario2_1 = $.scrollorama({ blocks: '#scen2-illus1', enablePin: false });
                            var animateScenario2_2 = $.scrollorama({ blocks: '#scen2-illus2', enablePin: false });
                            animateScenario2_1
                                .animate('.mfa-scenario2__exclamation img', { delay: -50, duration: 2300, property: 'bottom', start: 0, end: 1100 })
                                .animate('.mfa-scenario2__bad-dream img', { delay: -50, duration: 2300, property: 'left', start: 0, end: 1100 })
                                .animate('.mfa-scenario2__locked-monitor img, ' +
                                '.mfa-scenario2__exclamation img, ' +
                                '.mfa-scenario2__locked-monitor img, ' +
                                '.mfa-scenario2__bad-dream img', { delay: -75, duration: 500, property: 'opacity', start: 1, end: 0 });
                            animateScenario2_2
                                .animate('.mfa-scenario2__good-dream img', { delay: -480, duration: 200, property: 'right', start: -100, end: 0 })
                                .animate('.mfa-scenario2__pin-monitor img, ' +
                                '.mfa-scenario2__good-dream img', { delay: -480, duration: 150, property: 'opacity', start: 0, end: 1 });
                            break;
                    }
                };
                // run animations for Intro clickthrough, switching on scenarioId
                ClickThroughService.prototype.animateIntro = function (scenarioId) {
                    var animateScenario1_1 = $.scrollorama({ blocks: '#scen1-illus1', enablePin: false });
                    var animateScenario1_2 = $.scrollorama({ blocks: '#scen1-illus2', enablePin: false });
                    animateScenario1_1
                        .animate('.intro-scenario1__trees img', { delay: -75, duration: 1700, property: 'right', start: 0, end: 1750 })
                        .animate('.intro-scenario1__cat-window img', { delay: -75, duration: 1700, property: 'left', start: 0, end: 1100 })
                        .animate('.intro-scenario1__small-exclamation img, ' +
                        '.intro-scenario1__large-exclamation img, ' +
                        '.intro-scenario1__medium-exclamation img, ' +
                        '.intro-scenario1__small-alert img, ' +
                        '.intro-scenario1__diagonal-alert img, ' +
                        '.intro-scenario1__medium-alert img, ' +
                        '.intro-scenario1__small-white-blocker img, ' +
                        '.intro-scenario1__purple-blocker img, ' +
                        '.intro-scenario1__large-white-blocker img, ' +
                        '.intro-scenario1__trees img, ' +
                        '.intro-scenario1__cat-window img', { delay: -50, duration: 200, property: 'opacity', start: 1, end: 0 });
                    animateScenario1_2
                        .animate('.intro-scenario1__trees2 img', { delay: -480, duration: 150, property: 'left', start: -120, end: 0 })
                        .animate('.intro-scenario1__cat-window2 img', { delay: -480, duration: 150, property: 'right', start: -120, end: 0 })
                        .animate('.intro-scenario1__dashed-lines img, ' +
                        '.intro-scenario1__files-and-mails img, ' +
                        '.intro-scenario1__small-white-key img, ' +
                        '.intro-scenario1__purple-key img, ' +
                        '.intro-scenario1__large-white-key img', { delay: -480, duration: 100, property: 'opacity', start: 0 });
                };
                ClickThroughService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ClickThroughService);
                return ClickThroughService;
            }());
            exports_1("ClickThroughService", ClickThroughService);
        }
    }
});
//# sourceMappingURL=clickthrough.service.js.map