import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app-routing.module';
import { BlogService } from './service/blogservice';
import { FetchBackend, HttpBackend, HttpClient, provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideHttpClient(),
        { provide: 'IBlogService', useClass: BlogService },
        { provide: FetchBackend },
        { provide: HttpBackend, useExisting: FetchBackend }
    ]
};
