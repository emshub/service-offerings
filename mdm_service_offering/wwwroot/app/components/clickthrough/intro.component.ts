import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router'; 
import {IntroHeaderComponent} from "./intro-header.component";
import {HowToLinkComponent} from "./how-to-link.component";
import {IntroBodyComponent} from  "./intro-body.component";
import {ViewEncapsulation} from 'angular2/core';

@Component({
    selector: 'intro',
    templateUrl: 'app/html/clickthrough/intro.html',
    directives: [IntroHeaderComponent, HowToLinkComponent, IntroBodyComponent, ROUTER_DIRECTIVES],
    styleUrls: ["../../app/styles/clickthrough/intro.min.css"],
    encapsulation: ViewEncapsulation.None
})


export class IntroComponent implements OnInit  {
    ngOnInit() {}
}

