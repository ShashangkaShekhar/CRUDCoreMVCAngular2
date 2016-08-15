/*Component Default view For SpaRoute */
System.register(['angular2/core', 'angular2/router', './home/home.component', './contact/contact.component'], function(exports_1, context_1) {
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
    var core_1, router_1, home_component_1, contact_component_1;
    var MainComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            }],
        execute: function() {
            //---------Declare Components---------
            MainComponent = (function () {
                function MainComponent() {
                    this.title = 'Welcome to [.NetCore+MVC6+Angular2] SPA';
                }
                MainComponent = __decorate([
                    core_1.Component({
                        selector: 'spa-app',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        templateUrl: 'app/main.view.html',
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            //provide(APP_BASE_HREF, { useValue: '/' })
                            core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
                        ]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Home', component: home_component_1.Home, useAsDefault: true },
                        { path: '/Contact/...', name: 'Contact', component: contact_component_1.Contact }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], MainComponent);
                return MainComponent;
            }());
            exports_1("MainComponent", MainComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map