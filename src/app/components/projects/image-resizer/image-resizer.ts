import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-image-resizer',
    standalone: true,
    templateUrl: './image-resizer.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [RouterLink]
})
export class ImageResizerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
