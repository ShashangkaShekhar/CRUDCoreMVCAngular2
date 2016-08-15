/*Component Default view For SpaRoute */

//---------Import Angular2------------
import {Component, provide} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, APP_BASE_HREF} from 'angular2/router';

//---------Import External Components---------
import {Home} from './home/home.component';
import {Contact} from './contact/contact.component';

//---------Declare Components---------
@Component({
    selector: 'spa-app',
    directives: [ROUTER_DIRECTIVES], //decorate link 
    templateUrl: 'app/main.view.html',
    providers: [
        ROUTER_PROVIDERS,
        //provide(APP_BASE_HREF, { useValue: '/' })
        provide(LocationStrategy, { useClass: HashLocationStrategy })
    ]
})

//---------Declare Route Config---------
@RouteConfig([
    { path: '/', name: 'Home', component: Home, useAsDefault: true },
    { path: '/Contact/...', name: 'Contact', component: Contact }
])


//---------Export This Component Class---------
export class MainComponent {
    title: string;
    constructor() {
        this.title = 'Welcome to [.NetCore+MVC6+Angular2] SPA';
    }
}