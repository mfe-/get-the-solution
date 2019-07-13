import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from "@angular/common/http";

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
    BlogComponent,
    BlogEntryComponent,
    BlogCategoryComponent,
    ContactComponent,
    FooterComponent,
    PageNotFoundComponent,
    PrivacyComponent,
    ImpressumComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: 'IBlogService', useClass: BlogService }
  ],
  bootstrap: [AppComponent]


})
export class AppModule {

  public constructor()
  {
    window.onscroll =  this.stickyHeader;
  }

  private shrinkHeader()
  {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementsByTagName("header")[0].style.fontSize = "1em";
    } else {
      document.getElementsByTagName("header")[0].style.fontSize = "2em";
    }
  }
  private stickyHeader()
  {
    if (window.pageYOffset > 85) {
      document.getElementsByTagName("nav")[0].classList.add("sticky");
    } else {
      document.getElementsByTagName("nav")[0].classList.remove("sticky");
    }
  }
  
}
