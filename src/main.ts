import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from '../src/app/tarea/app.config';
import { AppComponent } from '../src/app/tarea/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
