import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    imports: [RouterLink]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
