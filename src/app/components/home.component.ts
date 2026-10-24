import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [RouterLink]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


}
