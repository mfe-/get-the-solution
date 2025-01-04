import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-image-resizer',
    templateUrl: './image-resizer.html',
    imports: [RouterLink]
})
export class ImageResizerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
