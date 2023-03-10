import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { routes } from './app/app-routing.module';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })),
  ]
}).catch(err => console.error(err));
