System.register(['angular2/core', 'angular2/http', 'angular2/router', 'angular2/common', './contact.service', './customvalidators'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, common_1, contact_service_1, customvalidators_1;
    var ContactMain;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            },
            function (customvalidators_1_1) {
                customvalidators_1 = customvalidators_1_1;
            }],
        execute: function() {
            //---------Declare Components---------
            ContactMain = (function () {
                //Constructor
                function ContactMain(builder, contactService) {
                    this.builder = builder;
                    this.contactService = contactService;
                    this.addmessage = 'Add New Contact';
                    this.listmessage = 'All Contact';
                    this._formGroup();
                }
                ContactMain.prototype.ngOnInit = function () {
                    this.resmessage = "";
                    this.editContactId = 0;
                    this.getContacts();
                };
                //Form Group
                ContactMain.prototype._formGroup = function () {
                    //Set Initial Values to the Control & Validators
                    this.firstName = new common_1.Control('', common_1.Validators.required);
                    this.email = new common_1.Control('', common_1.Validators.compose([common_1.Validators.required, customvalidators_1.customvalidators.emailValidator]));
                    this.phone = new common_1.Control('');
                    //Pass the grouped controls as key value pairs
                    this.contactForm = this.builder.group({
                        firstName: this.firstName,
                        email: this.email,
                        phone: this.phone
                    });
                };
                //Get All 
                ContactMain.prototype.getContacts = function () {
                    var _this = this;
                    //debugger
                    this.contactService.getContacts().subscribe(function (contacts) { return _this.contacts = contacts; });
                };
                //Save Form
                ContactMain.prototype.saveContact = function (contact) {
                    var _this = this;
                    //debugger
                    this.contactService.saveContact(contact)
                        .subscribe(function (response) {
                        _this.resmessage = response;
                        _this.getContacts();
                        _this.reset();
                    });
                };
                //Get by ID
                ContactMain.prototype.editContact = function (e, m) {
                    var _this = this;
                    //debugger
                    e.preventDefault();
                    this.editContactId = m.contactId;
                    this.contactService.getContactByID(m.contactId)
                        .subscribe(function (response) {
                        _this.contact = response;
                        _this.firstName.updateValue(_this.contact.firstName);
                        _this.email.updateValue(_this.contact.email);
                        _this.phone.updateValue(_this.contact.phone);
                    });
                };
                //Save Form
                ContactMain.prototype.updateContact = function (contact) {
                    var _this = this;
                    //debugger
                    if (this.editContactId > 0) {
                        this.contactService.updateContact(contact, this.editContactId)
                            .subscribe(function (response) {
                            _this.resmessage = response;
                            _this.getContacts();
                            _this.reset();
                        });
                    }
                };
                //Delete
                ContactMain.prototype.deleteContact = function (e, m) {
                    var _this = this;
                    //debugger
                    e.preventDefault();
                    var IsConf = confirm('You are about to delete ' + m.firstName + '. Are you sure?');
                    if (IsConf) {
                        this.contactService.deleteContact(m.contactId)
                            .subscribe(function (response) {
                            _this.resmessage = response;
                            _this.getContacts();
                        });
                    }
                };
                ContactMain.prototype.reset = function () {
                    this.editContactId = 0;
                    this._formGroup();
                };
                ContactMain = __decorate([
                    core_1.Component({
                        selector: 'contact-list',
                        templateUrl: "app/contact/contact.view.html",
                        directives: [router_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES],
                        providers: [contact_service_1.ContactService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, contact_service_1.ContactService])
                ], ContactMain);
                return ContactMain;
            }());
            exports_1("ContactMain", ContactMain);
        }
    }
});
//# sourceMappingURL=contact.main.js.map