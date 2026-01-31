import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'user',
  },
  {
    path: 'user',
    loadComponent: () => import('./modules/user/user.page').then((module) => module.UserPage),
  },
  {
    path: 'admin',
    loadComponent: () => import('./modules/admin/admin.page').then((module) => module.AdminPage),
  },
  {
    path: '**',
    redirectTo: 'user',
  },
];
