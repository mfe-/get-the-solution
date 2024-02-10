import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './components/app.component';
import { config } from './app.config.server' 

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
