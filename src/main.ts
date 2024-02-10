import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/components/app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { FetchBackend, HttpBackend, withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { BlogService } from './app/service/blogservice';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, AppRoutingModule, FormsModule),
        { provide: 'IBlogService', useClass: BlogService },
        FetchBackend,
        { provide: HttpBackend, useExisting: FetchBackend },
        provideHttpClient(withInterceptorsFromDi())
    ]
})
  .catch(err => console.error(err));
