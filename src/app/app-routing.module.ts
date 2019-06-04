import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { ProjectsComponent } from './components/projects/projects.component'
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact.component';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { PrivacyComponent } from './components/privacy.component';
import { ImpressumComponent } from './components/impressum.component';


// https://mfe-.github.io/get-the-solution/?p=/blog/Add%20Token%20Authorization%20to%20AngularJS%20and%20WebApi
const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:title', component: BlogComponent },
  { path: ':year/:month/:day/:title', component: BlogComponent },
  { path: ':p', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})

//mit router events feststellen was url ist zwischnespeichern und weiterleiten

// https://ngrefs.com/en/latest/router/events

export class AppRoutingModule { }
