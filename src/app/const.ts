import { City } from "./types/types";

export const BACKEND_URL = 'https://16.design.htmlacademy.pro/six-cities';
export const REQUEST_TIMEOUT = 5000;

export const CITIES: City[] = [
  {
    name: 'Paris',
    location: {
      latitude: 48.83635,
      longitude: 2.351499,
      zoom: 12
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.923361,
      longitude: 6.959974,
      zoom: 12
    }
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.832557,
      longitude: 4.351697,
      zoom: 12
    }
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.35454,
      longitude: 4.897976,
      zoom: 12
    }
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.530341,
      longitude: 10.000654,
      zoom: 12
    }
  },
    {
    name: 'Dusseldorf',
    location: {
      latitude: 51.205402,
      longitude: 6.776314,
      zoom: 12
    }
  },
];

export const DEFAULT_CITY_INDEX = 0; // Paris

export enum PlacesListPage {
  Main = 'MAIN',
  Favorites = 'FAVORITES',
  Offer = 'OFFER'
}

export const DEFAULT_CITY: City = {
  name: 'Paris',
  location: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13
  }
}
