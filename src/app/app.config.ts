import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { reducers } from './state/reducers/reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({
      ...reducers
    }),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: false,
      // apiUrl: 'http://localhost:4200/',
  })
  ]
};
