System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var LabBuilderService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            LabBuilderService = (function () {
                function LabBuilderService(http) {
                    this.http = http;
                }
                //registers a lab environment
                LabBuilderService.prototype.validateRegistration = function (labRegistration) {
                    var body = JSON.stringify(labRegistration);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post('api/labbuilder/validatelabcredentials', body, options)
                        .map(function (res) { return res.json(); });
                };
                //provisions and updates the lab environment content
                LabBuilderService.prototype.updateLabEnvironment = function (labEnvironment) {
                    var body = JSON.stringify(labEnvironment);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post('api/labbuilder/provisionlabenvironment', body, options)
                        .map(function (res) { return res.json(); });
                };
                //removes the lab environment
                LabBuilderService.prototype.removeLabEnvironment = function (labID) {
                    var body = 'labID=' + labID;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post('api/labbuilder/removelabenvironment', body, options)
                        .map(function (res) { return res.json(); });
                };
                //rebuilds the lab environment content
                LabBuilderService.prototype.rebuildLabEnvironment = function (labID) {
                    var body = 'labID=' + labID;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post('api/labbuilder/rebuildlabenvironment', body, options)
                        .map(function (res) { return res.json(); });
                };
                //retrieves the lab environment information
                LabBuilderService.prototype.getLabInfo = function (labID) {
                    var parameter = 'labID=' + labID;
                    var options = new http_1.RequestOptions({ search: parameter });
                    return this.http.get('api/labbuilder/getlabenvironment', options)
                        .map(function (res) { return res.json(); });
                };
                LabBuilderService.prototype.getCountries = function () {
                    return this.http.get('../lib/json/countries.json')
                        .map(function (res) { return res.json(); });
                };
                LabBuilderService.prototype.getTimezones = function () {
                    return this.http.get('../lib/json/timezones.json')
                        .map(function (res) { return res.json(); });
                };
                LabBuilderService.prototype.getLabContent = function () {
                    return this.http.get('../lib/json/lab-builder-content.json')
                        .map(function (res) { return res.json(); });
                };
                LabBuilderService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], LabBuilderService);
                return LabBuilderService;
            }());
            exports_1("LabBuilderService", LabBuilderService);
        }
    }
});
//# sourceMappingURL=lab-builder.service.js.map