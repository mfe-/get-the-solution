import { Component, OnInit, TemplateRef, Inject } from '@angular/core';
import { ThemeSwitcherComponent } from './theme-switcher.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    imports: [RouterLink, ThemeSwitcherComponent]
})
export class FooterComponent {

    constructor() { };

}
