import {Component, provide} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig, ROUTER_PROVIDERS, Route, Router, RouterOutlet} from "angular2/router";
import {ItProComponent} from "./components/clickthrough/it-pro.component";
import {ScenarioComponent} from "./components/clickthrough/scenario.component";
import {IntroComponent} from  "./components/clickthrough/intro.component";
import {ClickthroughListingComponent} from  "./components/site/clickthrough-listing.component";
import {HomepageComponent} from  "./components/site/homepage.component";
import {LabIntroComponent} from  "./components/labbuilder/lab-intro.component";
import {LabRegistrationComponent} from  "./components/labbuilder/lab-registration.component";
import {LabAddEnvironmentComponent} from "./components/labbuilder/lab-add-environment.component";
import {LabViewEnvironmentComponent} from "./components/labbuilder/lab-view-environment.component";

@Component({
    selector: "app",
    templateUrl: "/app/app.html",
    directives: [ROUTER_DIRECTIVES]
})

    @RouteConfig([

        { path: '/', name: 'HomePage', component: HomepageComponent, useAsDefault: true },
        { path: '/labbuilder', name: 'LabIntro', component: LabIntroComponent },
        { path: '/lab-registration', name: 'LabRegistration', component: LabRegistrationComponent },
        { path: '/labbuilder/lab-add-environment/:labId', name: 'LabAddEnvironment', component: LabAddEnvironmentComponent },
        { path: '/labbuilder/lab-view-environment/:labId', name: 'LabViewEnvironment', component: LabViewEnvironmentComponent },
        { path: '/clickthrough', name: 'ClickthroughListing', component: ClickthroughListingComponent },
        { path: '/clickthrough/:id/intro', name: 'Intro', component: IntroComponent}, 
        { path: '/clickthrough/:id/scenario/:scenarioId', name: 'Scenario', component: ScenarioComponent },
        { path: '/clickthrough/:id/it-pro', name: 'ItPro', component: ItProComponent },
        { path: '/**', redirectTo: ['ClickthroughListing'] }


])

export class AppComponent  {

}