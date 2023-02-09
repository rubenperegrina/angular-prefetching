
# Load Optimization in Angular 🚀

The goal of this repository is to help tou improve the navigation enxperience of your Angular aplications 💥 

Here are five techniques you can use to improve your application's performance:

##  [1. Lazy Loading](https://github.com/rubenperegrina/angular-prefetching/tree/lazy-loading)
By using Angular Router, modules will be loaded only when they are needed.

* Create modules for your routes and include a loadChildren method in them:
```typescript
  {
    path: 'about',
    title: 'About',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  ```

## [2. Pre fetching all](https://github.com/rubenperegrina/angular-prefetching/tree/prefetching-all)
While the user navigates the application, all modules are loaded in the background.

* In your routing module, you need to add PreloadAllModules:
```typescript
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
```

## [3. Custom Pre fetching](https://github.com/rubenperegrina/angular-prefetching/tree/prefetching-custom)
Implement the Angular PreloadingStrategy to create your own load strategy.

* In your routing module, you must add the PreloadingStrategyService:
```typescript
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadingStrategyService
  })],
  exports: [RouterModule]
})
```
* Manage your routes with a service:
```typescript
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
```
* Finally, add the preload flag to your routes:
```typescript
  {
    path: 'about',
    title: 'About',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
    data: { preload : true }
  },
  ```

## [4. Quicklink](https://github.com/rubenperegrina/angular-prefetching/tree/quicklink) 
Use the Quicklink library to prefetch modules on demand based on the elements visible in the user's viewport.

#### Instalation
```bash
npm i ngx-quicklink
```
* Add the QuicklinkStrategy in your routing-module:
```typescript
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: QuicklinkStrategy
  })],
  exports: [RouterModule]
})
```

## [5. GuessJS](https://github.com/rubenperegrina/angular-prefetching/tree/guess) 
Use GuessJS, a library that uses machine learning to predict which module is most likely to be loaded based on Google Analytics history.

#### Instalation
```bash
npm i -D @angular-builders/custom-webpack
npm i -D @angular-devkit/build-angular
npm i -D guess-webpack
npm i -D guess-parser
```
* You should create a file with your GA key:
```typescript
const { GuessPlugin } = require('guess-webpack');
const { parseRoutes } = require('guess-parser');

module.exports = {
  plugins: [
    new GuessPlugin({
      GA: 'XXXXXXXXX',
      runtime: {
        delegate: false
      },
      routeProvider() {
        return parseRoutes('.');
      }
    }),
  ]
};
```
* In your package.json you need to put the custom builder:
```json
"builder": "@angular-builders/custom-webpack:browser",
"options": {
  "customWebpackConfig": {
    "path": "./extend.webpack.config.js"
  },
},
```
