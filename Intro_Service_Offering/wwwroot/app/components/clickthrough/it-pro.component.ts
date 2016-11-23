import {Component, OnInit, provide, Input} from 'angular2/core';
import {ClickThroughService} from '../../service/clickthrough.service';
import {ItProBodyComponent} from "./it-pro-body.component";
import { ROUTER_DIRECTIVES, RouteParams } from 'angular2/router';
import {Clickthrough} from '../../model/clickthrough';
import {ViewEncapsulation} from 'angular2/core';

@Component({
    selector: 'it-pro',
    templateUrl: 'app/html/clickthrough/it-pro.html',
    directives: [ItProBodyComponent, ROUTER_DIRECTIVES],
    providers: [ClickThroughService],
    styleUrls: ["../../app/styles/clickthrough/it-pro.min.css"],
    encapsulation: ViewEncapsulation.None
})

export class ItProComponent implements OnInit {
    title: string;
    description: string;
    steps: Object;
    clickthroughId = 0;

    constructor(
        private _clickThroughService: ClickThroughService,
        private _routeParams: RouteParams) { }

    ngOnInit() {
        this.clickthroughId = +this._routeParams.get('id');
        this._clickThroughService.getScenarios(this.clickthroughId)
            .subscribe(
            data => { this.title = data.title, this.description = data.itPro.description, this.steps = data.itPro.itProSteps },
            err => console.error(err));
    }
  
}
