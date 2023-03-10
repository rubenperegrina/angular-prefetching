import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    data: { preload : true }
  },
  {
    path: 'contact',
    title: 'Contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'about',
    title: 'About',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
    data: { preload : true }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];
