import { Component, OnInit, TemplateRef, Inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    imports: [RouterLink],
    standalone: true,
    selector: 'my-header',
    changeDetection: ChangeDetectionStrategy.Eager,
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    constructor() {

    };
    title = 'get-the-solution';

}
