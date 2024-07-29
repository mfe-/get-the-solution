import { Component, OnInit, TemplateRef, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    imports: [RouterLink],
    selector: 'my-header',
    templateUrl: './header.component.html',
    standalone: true
})
export class HeaderComponent {

    constructor() {

    };
    title = 'get-the-solution';

}
