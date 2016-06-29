/// <reference path="../../node_modules/angular2/typings/browser.d.ts" />
import {provide} from 'angular2/core';
import {Location, LocationStrategy, HashLocationStrategy} from "angular2/platform/common";
import {bootstrap}    from "angular2/platform/browser"
import {ROUTER_PROVIDERS} from "angular2/router";
import {HTTP_PROVIDERS} from "angular2/http";
import {AppComponent} from "./app.component"
import 'rxjs/add/operator/map';

bootstrap(AppComponent,
    [ROUTER_PROVIDERS, HTTP_PROVIDERS,
        provide(LocationStrategy, { useClass: HashLocationStrategy })]);