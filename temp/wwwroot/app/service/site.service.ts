import {Injectable, Component} from 'angular2/core';
import {Http, Response, Jsonp, URLSearchParams} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SiteService {
    constructor(private http: Http) { }

    getClickthroughs() {
        return this.http.get('../lib/json/clickthroughs.json')
            .map((res: Response) => res.json());
    }
}