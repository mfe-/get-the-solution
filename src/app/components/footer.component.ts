import { Component, OnInit, TemplateRef, Inject, ChangeDetectionStrategy } from '@angular/core';
import { ThemeSwitcherComponent } from './theme-switcher.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-footer',
    standalone: true,
    templateUrl: './footer.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [RouterLink, ThemeSwitcherComponent]
})
export class FooterComponent {

    constructor() { };

}
