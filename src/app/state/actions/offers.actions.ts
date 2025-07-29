import { createAction, props } from "@ngrx/store";
import { Offers } from "../../types/types";

export const loadOffers = createAction(
  '[Offers] Load Offers',
  props<{ offers: Offers }>()
);
