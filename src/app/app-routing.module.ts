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
import { FileRenamerPrivacyPolicyComponent } from './components/projects/file-renamer/file-renamer-privacy-policy.component';

// https://mfe-.github.io/get-the-solution/?p=/blog/Add%20Token%20Authorization%20to%20AngularJS%20and%20WebApi
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/image-resizer', component: ImageResizerComponent },
  { path: 'projects/image-resizer-privacy-policy',component: ImageResizerPrivacyPolicyComponent},
  { path: 'projects/file-renamer/privacy-policy', component: FileRenamerPrivacyPolicyComponent },
  { path: 'projects/discret-convolution/h/:h/x/:x', component: ConvolutionDiscretComponent },
  { path: 'projects/discret-convolution', component: ConvolutionDiscretComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:title', component: BlogComponent },
  { path: 'category/:category', component: BlogCategoryComponent },
  { path: 'category', component: BlogCategoryComponent },
  { path: ':year/:month/:day/:title', component: BlogComponent },
  { path: ':p', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent },

];