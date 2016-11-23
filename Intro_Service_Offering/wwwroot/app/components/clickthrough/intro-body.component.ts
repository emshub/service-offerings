import {Component, OnInit, provide, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams } from 'angular2/router'; 
import {ScenarioComponent} from "./scenario.component";
import {Scenario} from '../../model/scenario';
import {ClickThroughService} from '../../service/clickthrough.service';


@Component({
    selector: 'intro-body',
    templateUrl: 'app/html/clickthrough/intro-body.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ClickThroughService]
})


export class IntroBodyComponent implements OnInit{
    scenarios: Scenario[] = [];
    clickthroughName = "";
    constructor(
        private _clickThroughService: ClickThroughService,
        private _routeParams: RouteParams) { }
    clickthroughId = 0;

    ngOnInit() {
        this.clickthroughId = +this._routeParams.get('id');

        //TODO: migrate as much of this as possible to service
        this._clickThroughService.getScenarios(this.clickthroughId)
            .subscribe(
            data => { this.scenarios = data.scenarios, this.clickthroughName = data.title },
            err => console.error(err))
            .add(() => this._clickThroughService.orderByAscending(this.scenarios));
    }
}

