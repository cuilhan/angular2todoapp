import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, RouteConfig} from '@angular/router-deprecated';


@Component({
    selector: 'deneme2',
    template: `<input type="text" placeholder="dogum tarihinizi giriniz" [(ngModel)]="yas">{{2017-yas}}{{adiniz}}`,
    directives: [ROUTER_DIRECTIVES]
})


@RouteConfig([
    // { path: '/', redirectTo: ['Dashboard'] },
])
export class deneme2 {


    adiniz="Umit";
    constructor() {

    }
}


