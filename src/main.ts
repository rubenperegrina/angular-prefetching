import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { quicklinkProviders, QuicklinkStrategy } from 'ngx-quicklink';
import { routes } from './app/app-routing.module';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes, {
      preloadingStrategy: QuicklinkStrategy
    })),
    quicklinkProviders
  ]
}).catch(err => console.error(err));
