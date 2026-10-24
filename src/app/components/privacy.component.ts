import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'privacy-component',
    standalone: true,
    templateUrl: './privacy.component.html',
    styleUrls: [],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [RouterLink]
})
export class PrivacyComponent{
}