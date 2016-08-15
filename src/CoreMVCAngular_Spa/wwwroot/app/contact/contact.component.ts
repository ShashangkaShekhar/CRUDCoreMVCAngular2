//---------Import Angular2------------
import {Component}                                      from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig}                 from 'angular2/router';

//---------Import External Components---------
import {ContactMain}                                    from './contact.main';

//---------Declare Components---------
@Component({
    selector: 'contacts',
    template: `<router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/', name: 'ManageContact', component: ContactMain, useAsDefault: true },
])
export class Contact {
    constructor() { }
}
