/*This is the spa bootstrap File*/

//---------Import Angular2------------
import {bootstrap}    from 'angular2/platform/browser';
import {enableProdMode, provide} from 'angular2/core';

//---------Import External Components(Main Component)---------
import {MainComponent} from './app.component';

//---------Bootstrap Component---------
enableProdMode();
bootstrap(MainComponent);


