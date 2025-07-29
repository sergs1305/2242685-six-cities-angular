import { createAction, props } from '@ngrx/store';

export const selectCityAction = createAction(
  '[Main Page] Select City',
  props<{ cityName: string }>()
);
