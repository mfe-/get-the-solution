import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    imports: [RouterLink]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


}
