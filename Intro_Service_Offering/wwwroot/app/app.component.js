System.register(["angular2/core", "angular2/router", "./components/clickthrough/it-pro.component", "./components/clickthrough/scenario.component", "./components/clickthrough/intro.component", "./components/site/clickthrough-listing.component", "./components/site/homepage.component", "./components/labbuilder/lab-intro.component", "./components/labbuilder/lab-registration.component", "./components/labbuilder/lab-add-environment.component", "./components/labbuilder/lab-view-environment.component"], function(exports_1, context_1) {
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
    var core_1, router_1, it_pro_component_1, scenario_component_1, intro_component_1, clickthrough_listing_component_1, homepage_component_1, lab_intro_component_1, lab_registration_component_1, lab_add_environment_component_1, lab_view_environment_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (it_pro_component_1_1) {
                it_pro_component_1 = it_pro_component_1_1;
            },
            function (scenario_component_1_1) {
                scenario_component_1 = scenario_component_1_1;
            },
            function (intro_component_1_1) {
                intro_component_1 = intro_component_1_1;
            },
            function (clickthrough_listing_component_1_1) {
                clickthrough_listing_component_1 = clickthrough_listing_component_1_1;
            },
            function (homepage_component_1_1) {
                homepage_component_1 = homepage_component_1_1;
            },
            function (lab_intro_component_1_1) {
                lab_intro_component_1 = lab_intro_component_1_1;
            },
            function (lab_registration_component_1_1) {
                lab_registration_component_1 = lab_registration_component_1_1;
            },
            function (lab_add_environment_component_1_1) {
                lab_add_environment_component_1 = lab_add_environment_component_1_1;
            },
            function (lab_view_environment_component_1_1) {
                lab_view_environment_component_1 = lab_view_environment_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "app",
                        templateUrl: "/app/app.html",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'HomePage', component: homepage_component_1.HomepageComponent, useAsDefault: true },
                        { path: '/labbuilder', name: 'LabIntro', component: lab_intro_component_1.LabIntroComponent },
                        { path: '/lab-registration', name: 'LabRegistration', component: lab_registration_component_1.LabRegistrationComponent },
                        { path: '/labbuilder/lab-add-environment/:labId', name: 'LabAddEnvironment', component: lab_add_environment_component_1.LabAddEnvironmentComponent },
                        { path: '/labbuilder/lab-view-environment/:labId', name: 'LabViewEnvironment', component: lab_view_environment_component_1.LabViewEnvironmentComponent },
                        { path: '/clickthrough', name: 'ClickthroughListing', component: clickthrough_listing_component_1.ClickthroughListingComponent },
                        { path: '/clickthrough/:id/intro', name: 'Intro', component: intro_component_1.IntroComponent },
                        { path: '/clickthrough/:id/scenario/:scenarioId', name: 'Scenario', component: scenario_component_1.ScenarioComponent },
                        { path: '/clickthrough/:id/it-pro', name: 'ItPro', component: it_pro_component_1.ItProComponent },
                        { path: '/**', redirectTo: ['ClickthroughListing'] }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map