import { createFeatureSelector } from '@ngrx/store';
import { AppState } from './appState';

export const selectAppState = createFeatureSelector<AppState>('appState');
