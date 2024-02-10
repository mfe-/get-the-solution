import { Component, OnInit, TemplateRef, Inject } from '@angular/core';

@Component({
    selector: 'my-header',
    templateUrl: './header.component.html',
    standalone: true
})
export class HeaderComponent {

    constructor() {

    };
    title = 'get-the-solution';

}
