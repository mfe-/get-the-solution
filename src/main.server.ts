import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/components/app.component';
import { config } from './app/app.config.server';

export default () => bootstrapApplication(AppComponent, config);
