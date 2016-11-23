import {Injectable, Component} from 'angular2/core';
import {Http, Response, Jsonp, URLSearchParams, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {LabRegistration} from '../model/lab-registration';
import {LabEnvironment} from '../model/lab-environment';

@Injectable()
export class LabBuilderService {

    constructor(private http: Http) { }

    //registers a lab environment
    validateRegistration(labRegistration: LabRegistration) {
        let body = JSON.stringify(labRegistration);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });

        return this.http.post('api/labbuilder/validatelabcredentials', body, options)
            .map((res: Response) => res.json());
    }

    //provisions and updates the lab environment content
    updateLabEnvironment(labEnvironment: LabEnvironment) {
        let body = JSON.stringify(labEnvironment);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });

        return this.http.post('api/labbuilder/provisionlabenvironment', body, options)
            .map((res: Response) => res.json());
    }

    //removes the lab environment
    removeLabEnvironment(labID: string) {

        let body = 'labID=' + labID;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        let options = new RequestOptions({ headers: headers });

        return this.http.post('api/labbuilder/removelabenvironment', body, options)
            .map((res: Response) => res.json());
    }

    //rebuilds the lab environment content
    rebuildLabEnvironment(labID: string) {

        let body = 'labID=' + labID;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        let options = new RequestOptions({ headers: headers });

        return this.http.post('api/labbuilder/rebuildlabenvironment', body, options)
            .map((res: Response) => res.json());
    }

    //retrieves the lab environment information
    getLabInfo(labID: string) {

        let parameter = 'labID=' + labID;
        let options = new RequestOptions({ search: parameter });

        return this.http.get('api/labbuilder/getlabenvironment', options)
            .map((res: Response) => res.json());
    }

    getCountries() {
        return this.http.get('../lib/json/countries.json')
            .map((res: Response) => res.json());
    }

    getTimezones() {
        return this.http.get('../lib/json/timezones.json')
            .map((res: Response) => res.json());
    }

    getLabContent() {
        return this.http.get('../lib/json/lab-builder-content.json')
            .map((res: Response) => res.json());
    }
}