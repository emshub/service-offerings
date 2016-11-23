import { Component, OnInit, Input, AfterViewInit, ElementRef } from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router } from 'angular2/router';
import {ScenarioIllustrationComponent} from "./scenario-illustration.component";
import {Illustration} from '../../model/illustration';
import {Scenario} from '../../model/scenario';
import {ToolTip} from '../../model/tooltip';
import {ClickThroughService} from '../../service/clickthrough.service';
import {ToolTipComponent} from "./tooltip.component";
import {StickynavComponent} from "./sticky-nav.component";
import {ShowAllTipsComponent} from "./showalltips.component";
import {Clickthrough} from '../../model/clickthrough';
import {ViewEncapsulation} from 'angular2/core';

declare var $: any;

@Component({
    selector: 'scenario',
    templateUrl: 'app/html/clickthrough/scenario.html',
    directives: [ScenarioIllustrationComponent, ToolTipComponent, StickynavComponent, ShowAllTipsComponent, ROUTER_DIRECTIVES],
    providers: [ClickThroughService],
    styleUrls: ["../../app/styles/clickthrough/scenario.min.css", "../../app/styles/clickthrough/intro-scenarios.min.css",
        "../../app/styles/clickthrough/mam-scenarios.min.css", "../../app/styles/clickthrough/sso-scenarios.min.css",
        "../../app/styles/clickthrough/mdm-scenarios.min.css", "../../app/styles/clickthrough/mfa-scenarios.min.css",
        "../../app/styles/clickthrough/intro.min.css"],
    encapsulation: ViewEncapsulation.None
})

export class ScenarioComponent implements OnInit {
    illustrations: Illustration[] = [];
    toolTips: ToolTip[] = [];
    scenarioId = 0;
    scenarioCount = 0;
    nextScenarioId = 0;
    prevScenarioId = 0;
    scenarios: Scenario[] = [];
    prevScenarioName = "";
    nextScenarioName = "";
    static hammerInitialized = false;
    clickthroughId = 1;
    videoUrl = "";

    constructor(
        private el: ElementRef,
        private _routeParams: RouteParams,
        private _clickThroughService: ClickThroughService,
        private _router: Router
    ) { }


    ngOnInit() {
        setTimeout(() => {
            switch (this.clickthroughId) {
                case 1:
                    this._clickThroughService.animateClickthrough("SSO", this.scenarioId);

                    break;
                case 2:
                    this._clickThroughService.animateClickthrough("MAM", this.scenarioId);

                    break;
                case 3:
                    this._clickThroughService.animateClickthrough("MDM", this.scenarioId);

                    break;
                case 4:
                    this._clickThroughService.animateClickthrough("MFA", this.scenarioId);

                    break;
                case 5:
                    this._clickThroughService.animateClickthrough("Intro", this.scenarioId);

                    break;
            }
        }, 1000);

        this.clickthroughId = +this._routeParams.get('id');
        this.scenarioId = +this._routeParams.get('scenarioId');
        this._clickThroughService.getScenarios(this.clickthroughId)
            .subscribe(
            data => {
                this.scenarios = data.scenarios,
                    this.toolTips = data.scenarios[this.scenarioId - 1].page.tooltips,
                    this.illustrations = data.scenarios[this.scenarioId - 1].page.illustrations,
                    this.videoUrl = data.videoUrl
            }, //this -1 is crappy. did it this way to avoid having to look up scenario by id because i'm running out of time.
            err => console.error(err),
            () => this.updatePrevAndNextButtons());

        $('#video-modal').on('hidden.bs.modal', function (e) {
            for (var i = 0; i < 4; i++) {
                $("#video-modal video")[i].pause();
            }

        })
    }


    goToPrevScenario() {
        this._router.navigate(['Scenario', { id: this.clickthroughId, scenarioId: this.prevScenarioId }]);
    }

    goToNextScenario() {
        this._router.navigate(['Scenario', { id: this.clickthroughId, scenarioId: this.nextScenarioId }]);
    }

    //on scenario change, update the previous and next scenario arrow links
    updatePrevAndNextButtons() {

        this.scenarioCount = this.scenarios.length;
        this.prevScenarioId = this.scenarioId - 1;
        this.nextScenarioId = this.scenarioId + 1;

        // Previous and next scenario links work like the scenarios are a loop
        if (this.prevScenarioId < 1) { this.prevScenarioId = this.scenarioCount; } // On first scenario, make previous link to last scenario
        if (this.nextScenarioId > this.scenarioCount) { this.nextScenarioId = 1; } // On last scenario, make next link to first scenario
        this.prevScenarioName = this.scenarios[this.prevScenarioId - 1].shortTitle; //this -1 is terrible. change it, rachel.
        this.nextScenarioName = this.scenarios[this.nextScenarioId - 1].shortTitle; //this -1 is terrible. change it, rachel.
    }

    //scrolls to the solution illustration. This is triggered by the down button
    scrollToSolutionIllustration() {
        $.fn.scrollView = function () {
            return this.each(function () {
                $('body').animate({
                    scrollTop: $(document).height()
                }, 2500);
            });
        };

        $('.bottom-bar').scrollView();
    }

    playVideo() {
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
    }

    closeVideo() {
        $('#video-modal').modal("toggle");
    }
}


