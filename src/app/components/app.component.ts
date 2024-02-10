import { Component } from '@angular/core';
import { FooterComponent } from './footer.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header.component';
import { StickHeaderDirective } from '../stick-header.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterOutlet,
    FooterComponent,
    StickHeaderDirective
  ],
})
export class AppComponent {
  public constructor() {
  }
}
