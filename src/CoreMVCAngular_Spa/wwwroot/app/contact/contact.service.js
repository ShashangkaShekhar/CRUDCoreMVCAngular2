System.register(['angular2/core', 'angular2/http', 'rxjs/Rx', 'rxjs/Observable'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
    var ContactService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            ContactService = (function () {
                function ContactService(_http) {
                    this._http = _http;
                    this._saveUrl = '/api/Contact/PostContact/';
                    this._updateUrl = '/api/Contact/PutContact/';
                    this._getUrl = '/api/Contact/GetContact/';
                    this._getByIdUrl = '/api/Contact/GetContactByID/';
                    this._deleteByIdUrl = '/api/Contact/DeleteContactByID/';
                }
                //Get
                ContactService.prototype.getContacts = function () {
                    //debugger
                    return this._http.get(this._getUrl)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                //GetByID
                ContactService.prototype.getContactByID = function (id) {
                    //debugger
                    var getByIdUrl = this._getByIdUrl + '/' + id;
                    return this._http.get(getByIdUrl)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                //Post
                ContactService.prototype.saveContact = function (contact) {
                    //debugger
                    var body = JSON.stringify(contact);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    //http.post(url: string, body: string, options ?: RequestOptionsArgs): Observable<Response>
                    return this._http.post(this._saveUrl, body, options)
                        .map(function (res) { return res.json().message; })
                        .catch(this.handleError);
                };
                //Put
                ContactService.prototype.updateContact = function (contact, id) {
                    //debugger
                    var updateUrl = this._updateUrl + '/' + id;
                    var body = JSON.stringify(contact);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    //http.post(url: string, body: string, options ?: RequestOptionsArgs): Observable<Response>
                    return this._http.put(updateUrl, body, { headers: headers })
                        .map(function (response) { return response.json().message; })
                        .catch(this.handleError);
                };
                //Delete
                ContactService.prototype.deleteContact = function (id) {
                    //debugger
                    var deleteByIdUrl = this._deleteByIdUrl + '/' + id;
                    //http.post(url: string, options ?: RequestOptionsArgs): Observable<Response>
                    return this._http.delete(deleteByIdUrl)
                        .map(function (response) { return response.json().message; })
                        .catch(this.handleError);
                };
                ContactService.prototype.handleError = function (error) {
                    return Observable_1.Observable.throw(error.json().error || 'Opps!! Server error');
                };
                ContactService = __decorate([
                    core_1.Component({
                        providers: [http_1.Http]
                    }),
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ContactService);
                return ContactService;
            }());
            exports_1("ContactService", ContactService);
        }
    }
});
//# sourceMappingURL=contact.service.js.map