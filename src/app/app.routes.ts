import { Routes } from '@angular/router';
import { authGuard } from './core/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login.component').then(m => m.LoginComponent)
  },
  {
    path: '',
    loadComponent: () =>
      import('./layout/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
    canActivate: [authGuard],
    children: [
      {
        path: 'users',
        loadComponent: () =>
          import('./users/user-list/user-list.component').then(m => m.UserListComponent)
        
      },
      {
  path: 'users/new',
  loadComponent: () =>
    import('./users/user-form/user-form.component').then(m => m.UserFormComponent),
  canActivate: [authGuard]
},
{
  path: 'users/:id',
  loadComponent: () =>
    import('./users/user-form/user-form.component').then(m => m.UserFormComponent),
  canActivate: [authGuard]
},
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./dashboard/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  }
];
