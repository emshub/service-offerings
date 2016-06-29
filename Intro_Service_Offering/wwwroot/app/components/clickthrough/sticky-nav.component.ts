import {Component, OnInit, Input} from 'angular2/core';
import {HTTP_PROVIDERS, Http, Response} from 'angular2/http';
import {Router, RouteParams, ROUTER_DIRECTIVES } from 'angular2/router';
import {Clickthrough} from '../../model/clickthrough';
import {Scenario} from '../../model/scenario';
import {ClickThroughService} from '../../service/clickthrough.service';
import {SiteService} from '../../service/site.service';
import {ViewEncapsulation} from 'angular2/core';


@Component({
    selector: 'sticky-nav',
    templateUrl: 'app/html/clickthrough/sticky-nav.html',
    providers: [ClickThroughService, SiteService],
    directives: [ROUTER_DIRECTIVES],
    styleUrls: ["../../app/styles/clickthrough/sticky-nav.min.css"],
    encapsulation: ViewEncapsulation.None
})
export class StickynavComponent implements OnInit {
    scenarios: Scenario[] = [];
    clickthroughs: Clickthrough[] = [];

    isShow: boolean = true;
    currentScenarioId: string = "";
    clickthroughId = 1;
    clickthroughName = "";

    constructor(
        private _router: Router,
        private _routeParams: RouteParams,
        private _clickThroughService: ClickThroughService,
        private http: Http,
        private _siteService: SiteService    ) {
    }

    onClick() {
        this.isShow = !this.isShow;
       
    }

    ngOnInit() {
        this.clickthroughId = +this._routeParams.get('id');
        this.currentScenarioId = this._routeParams.get('scenarioId');
        this._clickThroughService.getScenarios(this.clickthroughId)
            .subscribe(
            data => { this.scenarios = data.scenarios, this.clickthroughName = data.title },
            err => console.error(err))
            .add(() => this._clickThroughService);

        //get the list of clickthroughs that will be displayed in the drop down list
        this._siteService.getClickthroughs()
            .subscribe(
            data => { this.clickthroughs = data.clickthroughs },
            err => console.error(err));
    }

    gotoScenario(scenarioID: number) {
        this._router.navigate(['Scenario', { id: this.clickthroughId, scenarioId: scenarioID}]);
    }
    gotoIntro() {
        this._router.navigate(['Intro', {id: this.clickthroughId}]);
    }
}