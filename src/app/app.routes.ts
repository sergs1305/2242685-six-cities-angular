import { Routes } from '@angular/router';
import { AuthGuard } from './auth/guard.service';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    title: 'Main page',
  },
  {
    path: 'offer/:offerId',
    loadComponent: () => import('./offer/offer.component').then(c => c.OfferComponent),
    title: 'Offer (place) page',
  },
  {
    path: 'favorites',
    loadComponent: () => import('./favorites/favorites.component').then(c => c.FavoritesComponent),
    title: 'Favorites page',
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(c => c.LoginComponent),
    title: 'Login page',
  },
  {
    path: '**',
    loadComponent: () => import('./page-404/page-404.component').then(c => c.Page404Component),
    title: 'Not found (404) page',
  },
];
