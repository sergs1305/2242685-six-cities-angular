import { createAction, props } from '@ngrx/store';

export const changeCity = createAction(
  '[Main Component] ChangeCity',
  props<{ cityName: string }>()
);

// export const fillOffers = createAction('[Main Component] FillOffers');
