import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'impressum-component',
    standalone: true,
    templateUrl: './impressum.component.html',
    styleUrls: [],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [RouterLink]
})
export class ImpressumComponent{
}