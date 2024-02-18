import { Component, Inject } from '@angular/core';
import { FooterComponent } from './footer.component';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header.component';
import { StickHeaderDirective } from '../stick-header.directive';
import { Title } from '@angular/platform-browser';

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
  constructor(@Inject(Router) private router: Router, @Inject(Title) private titleService: Title) {
    //set default page title using the url
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) { /* Your code goes here on every router change */
        if (ev.url.indexOf("blog") == -1)
          titleService.setTitle("get-the-solution.net" + " - " + ev.url.replace("/", ""));
      }
    });
  }
}
