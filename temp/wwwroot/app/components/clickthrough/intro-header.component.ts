import {Component, OnInit, provide, Input} from 'angular2/core';
import {ClickThroughService} from '../../service/clickthrough.service';
import {Clickthrough} from '../../model/clickthrough';
import {ROUTER_DIRECTIVES, RouteParams, Router } from 'angular2/router';

@Component({
    selector: 'intro-header',
    templateUrl: 'app/html/clickthrough/intro-header.html',
    providers: [ClickThroughService],
    directives: [ROUTER_DIRECTIVES]
})

export class IntroHeaderComponent implements OnInit {

    title: string;
    description: string;
    clickthroughId = 0;

    constructor(
        private _routeParams: RouteParams,
        private _clickThroughService: ClickThroughService
    ) { }



    ngOnInit() {
        this.clickthroughId = +this._routeParams.get('id');
        this._clickThroughService.getScenarios(this.clickthroughId)
            .subscribe(
            data => { this.title = data.title, this.description = data.description },
            err => console.error(err));
    }
}