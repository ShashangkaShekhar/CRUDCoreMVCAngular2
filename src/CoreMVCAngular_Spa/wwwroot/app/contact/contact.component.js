System.register(['angular2/core', 'angular2/router', './contact.main'], function(exports_1, context_1) {
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
    var core_1, router_1, contact_main_1;
    var Contact;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (contact_main_1_1) {
                contact_main_1 = contact_main_1_1;
            }],
        execute: function() {
            //---------Declare Components---------
            Contact = (function () {
                function Contact() {
                }
                Contact = __decorate([
                    core_1.Component({
                        selector: 'contacts',
                        template: "<router-outlet></router-outlet>",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'ManageContact', component: contact_main_1.ContactMain, useAsDefault: true },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], Contact);
                return Contact;
            }());
            exports_1("Contact", Contact);
        }
    }
});
//# sourceMappingURL=contact.component.js.map