// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { APP_ROUTES } from './app/app.routes';



bootstrapApplication(AppComponent, {
  providers: [provideClientHydration(), provideRouter(APP_ROUTES),]
});
