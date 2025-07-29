import { ActionReducerMap } from '@ngrx/store';
import { offersReducer } from './offers.reducer';
import { cityReducer, CityState } from './city.reducer';
import { Offers } from '../../types/types';

export interface AppState {
  currentCity: CityState;
  offers: Offers;
}

export const reducers: ActionReducerMap<AppState> = {
  currentCity: cityReducer,
  offers: offersReducer
};
