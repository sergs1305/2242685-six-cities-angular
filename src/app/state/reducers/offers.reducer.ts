import { createReducer, on } from '@ngrx/store';
import { loadOffers } from '../actions/offers.actions';
// import { Offers } from '../../types/types';
import { offers } from '../../../mocks/offers';

// export type OffersState = Offers;

const initialOffersState = offers;

export const offersReducer = createReducer(
  initialOffersState,
  on(loadOffers, (state, { offers }) => ({
    ...state,
    offers
  })),
);
