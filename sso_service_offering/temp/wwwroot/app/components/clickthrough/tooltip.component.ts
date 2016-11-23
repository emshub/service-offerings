import {Component, OnInit, provide, Input, Renderer, ViewChild, ElementRef} from 'angular2/core';
import {Location} from "angular2/platform/common";
import {RouteParams } from 'angular2/router';
import {ToolTip} from '../../model/tooltip';
import {ScenarioComponent} from "./scenario.component";

declare var $: any;

@Component({
    selector: 'scenario-tooltip',
    templateUrl: 'app/html/clickthrough/tooltip.html',
    styleUrls: ["../../app/styles/clickthrough/tooltip.css" ],
    host: {
        "click": "onClick()"
    }
})


export class ToolTipComponent implements OnInit {
    @ViewChild('toolTipDiv') toolTipDiv: ElementRef;
    @Input() toolTip;
    private el: HTMLElement;

    constructor(
        private _routeParams: RouteParams,
        private renderer: Renderer) {
    }

    ngOnInit() {

    }

    showToolTip() {

        //get a reference to the tooltip statement container div
        this.el = this.toolTipDiv.nativeElement;

        var prevState: string;
        prevState = this.el.style.visibility;

        //hide all tooltips. this makes sure that only the clicked tooltip is shown
        $('.scenario-tooltip').css('visibility', 'hidden'); //TODO: find an AngularJS 2 equivalent

        if (prevState == 'visible') {
            this.el.style.visibility = 'hidden';
        }
        else {
            this.el.style.visibility = 'visible';
        }
    }
}