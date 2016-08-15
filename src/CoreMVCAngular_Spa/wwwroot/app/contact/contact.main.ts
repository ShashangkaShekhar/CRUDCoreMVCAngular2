//---------Import Angular2------------
import {Component, OnInit}                                     from 'angular2/core';
import {HTTP_PROVIDERS, Http}                                  from 'angular2/http';
import {ROUTER_DIRECTIVES, RouteConfig}                        from 'angular2/router';
import {FORM_DIRECTIVES,
    FormBuilder, Control, ControlGroup, Validators}            from 'angular2/common';

//---------Import External Components---------
import {ContactModel}               from './contact.model';
import {ContactService}             from './contact.service';
import {customvalidators}             from './customvalidators';

//---------Declare Components---------
@Component({
    selector: 'contact-list',
    templateUrl: `app/contact/contact.view.html`,
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES],
    providers: [ContactService, HTTP_PROVIDERS]
})

//---------Export This Component Class---------
export class ContactMain implements OnInit {

    public resmessage: string;
    public addmessage: string;
    public listmessage: string;
    public contact: ContactModel;
    public contacts: ContactModel[];
    public editContactId: any

    //Form Control
    contactForm: ControlGroup;
    firstName: Control;
    email: Control;
    phone: Control;

    //Constructor
    constructor(private builder: FormBuilder,
        private contactService: ContactService) {
        this.addmessage = 'Add New Contact';
        this.listmessage = 'All Contact';
        this._formGroup();
    }

    ngOnInit() {
        this.resmessage = "";
        this.editContactId = 0;
        this.getContacts();
    }

    //Form Group
    _formGroup() {
        //Set Initial Values to the Control & Validators
        this.firstName = new Control('', Validators.required);
        this.email = new Control('', Validators.compose([Validators.required, customvalidators.emailValidator]));
        this.phone = new Control('');

        //Pass the grouped controls as key value pairs
        this.contactForm = this.builder.group({
            firstName: this.firstName,
            email: this.email,
            phone: this.phone
        });
    }

    //Get All 
    getContacts() {
        //debugger
        this.contactService.getContacts().subscribe(
            contacts => this.contacts = contacts
        );
    }

    //Save Form
    saveContact(contact) {
        //debugger
        this.contactService.saveContact(contact)
            .subscribe(response => {
                this.resmessage = response;
                this.getContacts();
                this.reset();
            });
    }

    //Get by ID
    editContact(e, m) {
        //debugger
        e.preventDefault();
        this.editContactId = m.contactId;
        this.contactService.getContactByID(m.contactId)
            .subscribe(response => {
                this.contact = response;
                this.firstName.updateValue(this.contact.firstName);
                this.email.updateValue(this.contact.email);
                this.phone.updateValue(this.contact.phone);
            });
    }

    //Save Form
    updateContact(contact: any) {
        //debugger
        if (this.editContactId > 0) {
            this.contactService.updateContact(contact, this.editContactId)
                .subscribe(response => {
                    this.resmessage = response;
                    this.getContacts();
                    this.reset();
                });
        }
    }

    //Delete
    deleteContact(e, m) {
        //debugger
        e.preventDefault();
        var IsConf = confirm('You are about to delete ' + m.firstName + '. Are you sure?');
        if (IsConf) {
            this.contactService.deleteContact(m.contactId)
                .subscribe(response => {
                    this.resmessage = response;
                    this.getContacts();
                });
        }
    }

    reset() {
        this.editContactId = 0;
        this._formGroup();
    }
}