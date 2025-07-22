import { createReducer, on } from '@ngrx/store';
import { CITIES, DEFAULT_CITY_INDEX } from './const';
import { offers } from '../mocks/offers';
import { changeCity } from './actions';

const currentCityName = CITIES[DEFAULT_CITY_INDEX];
export const initialState = {
  currentCityName: currentCityName,
  cityOffers: offers.filter(offer => offer.city.name === currentCityName),
};

export const reducer = createReducer(
  initialState,
  on(changeCity, (state, action) => ({
    ...state,
    currentCityName: action.cityName,
    cityOffers: offers.filter(offer => offer.city.name === action.cityName)
  }))
);
