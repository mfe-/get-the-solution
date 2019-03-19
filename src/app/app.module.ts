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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProjectsComponent,
    BlogComponent,
    BlogEntryComponent,
    ContactComponent,
    FooterComponent,
    PageNotFoundComponent
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
export class AppModule { }
