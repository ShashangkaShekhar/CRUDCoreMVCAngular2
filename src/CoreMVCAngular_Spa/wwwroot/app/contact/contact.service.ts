import {Injectable, Component}                            from 'angular2/core';
import {Http, Request, RequestMethod, Response,
    RequestOptions, Headers}                              from 'angular2/http';
import 'rxjs/Rx';
import {Observable}                                       from 'rxjs/Observable';
import {ContactModel}                                     from './contact.model';

@Component({
    providers: [Http]
})

@Injectable()
export class ContactService {
    public headers: Headers;
    constructor(private _http: Http) {
    }

    public _saveUrl: string = '/api/Contact/PostContact/';
    public _updateUrl: string = '/api/Contact/PutContact/';
    public _getUrl: string = '/api/Contact/GetContact/';
    public _getByIdUrl: string = '/api/Contact/GetContactByID/';
    public _deleteByIdUrl: string = '/api/Contact/DeleteContactByID/';

    //Get
    getContacts(): Observable<ContactModel[]> {
        //debugger
        return this._http.get(this._getUrl)
            .map(res => <ContactModel[]>res.json())
            .catch(this.handleError);
    }

    //GetByID
    getContactByID(id: string): Observable<ContactModel> {
        //debugger
        var getByIdUrl = this._getByIdUrl + '/' + id;
        return this._http.get(getByIdUrl)
            .map(res => <ContactModel>res.json())
            .catch(this.handleError);
    }

    //Post
    saveContact(contact: ContactModel): Observable<string> {
        //debugger
        let body = JSON.stringify(contact);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        //http.post(url: string, body: string, options ?: RequestOptionsArgs): Observable<Response>
        return this._http.post(this._saveUrl, body, options)
            .map(res => res.json().message)
            .catch(this.handleError);
    }

    //Put
    updateContact(contact: ContactModel, id: string): Observable<string> {
        //debugger
        var updateUrl = this._updateUrl + '/' + id;
        var body = JSON.stringify(contact);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        //http.post(url: string, body: string, options ?: RequestOptionsArgs): Observable<Response>
        return this._http.put(updateUrl, body, { headers: headers })
            .map(response => response.json().message)
            .catch(this.handleError);
    }

    //Delete
    deleteContact(id: string): Observable<string> {
        //debugger
        var deleteByIdUrl = this._deleteByIdUrl + '/' + id

        //http.post(url: string, options ?: RequestOptionsArgs): Observable<Response>
        return this._http.delete(deleteByIdUrl)
            .map(response => response.json().message)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Opps!! Server error');
    }
}