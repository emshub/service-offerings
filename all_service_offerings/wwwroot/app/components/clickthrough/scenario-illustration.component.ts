import {Component, OnInit, ChangeDetectionStrategy, provide, Input} from 'angular2/core';
import {Location} from "angular2/platform/common";
import {RouteParams } from 'angular2/router';

import {ScenarioComponent} from "./scenario.component";

import {IllustrationImage} from '../../model/illustration-image';
import {ClickThroughService} from '../../service/clickthrough.service';

@Component({
    selector: 'scenario-illustration',
    templateUrl: 'app/html/clickthrough/scenario-illustration.html',
    providers: [ClickThroughService]
})


export class ScenarioIllustrationComponent implements OnInit {

    @Input() illustration;
    @Input() scenarioId;

    constructor(
        private _routeParams: RouteParams,
        private _clickThroughService: ClickThroughService) { }

    ngOnInit() {
        
    }


}

