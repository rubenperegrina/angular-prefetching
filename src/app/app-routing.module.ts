import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Home',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'contact',
    title: 'Contact',
    loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: 'about',
    title: 'About',
    loadComponent: () => import('./about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'form',
    title: 'Form',
    loadComponent: () => import('./form/form.component').then(m => m.FormComponent)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];
