import {Component, OnInit, provide, Input } from 'angular2/core';
import {ClickThroughService} from '../../service/clickthrough.service';
import {Clickthrough} from '../../model/clickthrough';
import { RouteParams, ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
    selector: 'it-pro-body',
    templateUrl: 'app/html/clickthrough/it-pro-body.html',
    providers: [ClickThroughService],
    directives: [ROUTER_DIRECTIVES]
})

export class ItProBodyComponent implements OnInit{
    steps: Object;
    clickthroughId = 0;
    constructor(
        private _clickThroughService: ClickThroughService,
        private _routeParams: RouteParams) { }

    ngOnInit() {
        this.clickthroughId = +this._routeParams.get('id');
        this._clickThroughService.getScenarios(this.clickthroughId)
            .subscribe(
            data => { this.steps = data.itPro.itProSteps },
            err => console.error(err));
    }

}
