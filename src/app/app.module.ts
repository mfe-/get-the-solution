import { BrowserModule } from '@angular/platform-browser';
import { Inject, NgModule, PLATFORM_ID } from '@angular/core';

import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './components/app.component';

import { HeaderComponent } from './components/header.component';
import { HomeComponent } from './components/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogEntryComponent } from './components/blog/blogEntry.component';
import { ContactComponent } from './components/contact.component';
import { FooterComponent } from './components/footer.component';

import { BlogService } from './service/blogservice';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { PrivacyComponent } from './components/privacy.component';
import { ImpressumComponent } from './components/impressum.component';
import { BlogCategoryComponent } from './components/blog/blog-category.component';
import { ImageResizerComponent } from './components/projects/image-resizer/image-resizer';
import { ConvolutionDiscretComponent } from './components/projects/convolution.discret.component'
import { FormsModule } from '@angular/forms';
import { ThemeSwitcherComponent } from './components/theme-switcher.component';
import { MathjaxDirective } from './Mathjax.Directive';
import { ImageResizerPrivacyPolicyComponent } from './components/projects/image-resizer/image-resizer-privacy-policy';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';


// The @NgModule decorator identifies AppModule as an NgModule class.
// @NgModule takes a metadata object that tells Angular how to compile and launch the application.
// declarations—this application's lone component.
// imports—import BrowserModule to have browser specific services such as DOM rendering, sanitization, and location.
// providers—the service providers.
// bootstrap—the root component that Angular creates and inserts into the index.html host web page.
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProjectsComponent,
    ImageResizerComponent,
    ImageResizerPrivacyPolicyComponent,
    BlogComponent,
    BlogEntryComponent,
    BlogCategoryComponent,
    ContactComponent,
    FooterComponent,
    PageNotFoundComponent,
    PrivacyComponent,
    ImpressumComponent,
    ConvolutionDiscretComponent,
    ThemeSwitcherComponent,
    MathjaxDirective
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    { provide: 'IBlogService', useClass: BlogService },
  ],
  bootstrap: [AppComponent]


})
export class AppModule {

  public constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      window.onscroll = this.stickyHeader;
    }
  }
  private stickyHeader() {
    var navElement = document.getElementsByTagName("nav").item(0);

    var pElements = document.getElementsByTagName("footer").item(0)?.getElementsByTagName("p");
    if (navElement && window.pageYOffset > (navElement.offsetHeight + 20)) {

      if (pElements != null && pElements.length < 3) {
        //add new p element to avoid jumping scrollbar
        var para = document.createElement("p");
        para.setAttribute("style", "visibility:hidden;");
        var node = document.createTextNode("This is a new paragraph.");
        para.appendChild(node);
        document.getElementsByTagName("footer").item(0)?.appendChild(para);
      }
      //add sticky header css
      navElement?.classList.add("sticky");
    } else {
      //remove p
      var i = 0;
      if (pElements != null) {
        for (i; i < pElements.length; i++) {
          document.getElementsByTagName("footer").item(0)?.removeChild(pElements[i]);
        }
      }
      //remove sticky header
      navElement?.classList.remove("sticky");
    }

  }

}
