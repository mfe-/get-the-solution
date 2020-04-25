import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, NavigationEnd } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { ProjectsComponent } from './components/projects/projects.component'
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact.component';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { PrivacyComponent } from './components/privacy.component';
import { ImpressumComponent } from './components/impressum.component';
import { BlogCategoryComponent } from './components/blog/blog-category.component';
import { ImageResizerComponent } from './components/projects/image-resizer/image-resizer';
import { Title } from '@angular/platform-browser';


// https://mfe-.github.io/get-the-solution/?p=/blog/Add%20Token%20Authorization%20to%20AngularJS%20and%20WebApi
const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/image-resizer', component: ImageResizerComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:title', component: BlogComponent },
  { path: 'category/:category', component: BlogCategoryComponent },
  { path: 'category', component: BlogCategoryComponent },
  { path: ':year/:month/:day/:title', component: BlogComponent },
  { path: ':p', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})

export class AppRoutingModule {
  constructor(private router: Router, private titleService: Title) {
    //set default page title using the url
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) { /* Your code goes here on every router change */
        if (ev.url.indexOf("blog") == -1)
          titleService.setTitle("get-the-solution.net" + " - " + ev.url.replace("/", ""));
      }
    });
  }
}
