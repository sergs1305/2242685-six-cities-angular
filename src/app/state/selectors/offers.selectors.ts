import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers/reducers';
import { CITIES, DEFAULT_CITY } from '../../const';

export const getCurrentCityName = (state: AppState) => state.currentCity.currentCityName;
export const getAllOffers = (state: AppState) => state.offers;

export const getCityOffers = createSelector(
  getAllOffers,
  getCurrentCityName,
  (offers, currentCityName) =>
    offers.filter(offer => offer.city.name === currentCityName)
);

export const getCurrentCity = createSelector(
  getCurrentCityName,
  (currentCityName) => {
    const currentCity = CITIES.find(city => city.name === currentCityName);
    if (!currentCity) {
      return DEFAULT_CITY;
    }
    return currentCity;
  }
);

// export const getCurrentCityName = createSelector(
//   getCurrentCity,
//   city => city?.name
// );
