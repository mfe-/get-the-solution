import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/components/app.component';
import { serverConfig } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, serverConfig);

export default bootstrap;
