import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreloadingStrategyService implements PreloadingStrategy {
  
  private preloadedModules: string[] = [];

  preload(route: Route, load: () => Observable<any>): Observable<unknown> {
    if (route.data && route.data['preload'] && route.path) {
      this.preloadedModules.push(route.path);
      return load();
    } else {
      return of(null);
    }
  }
}