import { createReducer, on } from '@ngrx/store';
import { CITIES, DEFAULT_CITY_INDEX } from '../../const';
import { selectCityAction } from '../actions/city.actions';

export interface CityState {
  currentCityName: string;
}

export const initialCityName = CITIES[DEFAULT_CITY_INDEX].name;
export const initialCityState: CityState = {
  currentCityName: initialCityName
};

export const cityReducer = createReducer(
  initialCityState,
  on(selectCityAction, (state, { cityName }) => ({
    ...state,
    currentCityName: cityName,
  }))
);
