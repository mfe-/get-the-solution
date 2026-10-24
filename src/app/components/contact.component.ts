import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [RouterLink]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
