import { createAction, props } from '@ngrx/store';
import { AppState } from './appState';

export const setAPIStatus = createAction(
  '[API] sucesso ou falha status',
  props<{ apiStatus: AppState }>()
);
