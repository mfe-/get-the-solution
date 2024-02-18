import { Routes, RouterModule, Router, NavigationEnd } from '@angular/router';
import { ContactComponent } from './components/contact.component';
import { HomeComponent } from './components/home.component';
import { ImpressumComponent } from './components/impressum.component';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { PrivacyComponent } from './components/privacy.component';
import { ConvolutionDiscretComponent } from './components/projects/convolution.discret.component';
import { ImageResizerComponent } from './components/projects/image-resizer/image-resizer';
import { ImageResizerPrivacyPolicyComponent } from './components/projects/image-resizer/image-resizer-privacy-policy';
import { ProjectsComponent } from './components/projects/projects.component';
import { BlogCategoryComponent } from './components/blog/blog-category.component';
import { BlogComponent } from './components/blog/blog.component';

// https://mfe-.github.io/get-the-solution/?p=/blog/Add%20Token%20Authorization%20to%20AngularJS%20and%20WebApi
export const routes: Routes = [
  { path: 'home.html', component: HomeComponent },
  { path: '', redirectTo: '/home.html', pathMatch: 'full' },
  { path: 'home', redirectTo: '/home.html', pathMatch: 'full' },
  { path: 'projects.html', component: ProjectsComponent },
  { path: 'projects', redirectTo: '/projects.html', pathMatch: 'full' },
  { path: 'privacy.html', component: PrivacyComponent },
  { path: 'privacy', redirectTo: '/privacy.html', pathMatch: 'full' },
  { path: 'impressum', redirectTo: '/impressum.html', pathMatch: 'full' },
  { path: 'impressum.html', component: ImpressumComponent },
  { path: 'projects/image-resizer.html', component: ImageResizerComponent },
  { path: 'projects/image-resizer', redirectTo: '/projects/image-resizer.html', pathMatch: 'full' },
  { path: 'projects/image-resizer-privacy-policy', redirectTo: 'projects/image-resizer-privacy-policy.html', pathMatch: 'full' },
  { path: 'projects/image-resizer-privacy-policy.html', component: ImageResizerPrivacyPolicyComponent },
  { path: 'projects/discret-convolution/h/:h/x/:x', component: ConvolutionDiscretComponent },
  { path: 'projects/discret-convolution.html', component: ConvolutionDiscretComponent },
  { path: 'projects/discret-convolution',redirectTo:'projects/discret-convolution.html' },
  { path: 'contact.html', component: ContactComponent },
  { path: 'contact', redirectTo: '/contact.html', pathMatch: 'full' },
  { path: 'blog.html', component: BlogComponent },
  { path: 'blog', redirectTo: '/blog.html', pathMatch: 'full' },
  { path: 'blog/:title', component: BlogComponent },
  { path: 'blog/:title.html', component: BlogComponent },
  { path: 'category/:category', component: BlogCategoryComponent },
  { path: 'category.html', component: BlogCategoryComponent },
  { path: 'category', redirectTo: '/category.html', pathMatch: 'full' },
  { path: ':year/:month/:day/:title', component: BlogComponent },
  { path: ':p', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent },

];