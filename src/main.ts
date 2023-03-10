import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { PreloadingStrategyService } from './app/services/preloading-strategy-service.service';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadingStrategyService
    })),
  ]
}).catch(err => console.error(err));
