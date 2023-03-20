import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IState } from './dashboard.reducer';

export const featureKey: string = 'dashboard';

export const selectFeature = createFeatureSelector<IState>(featureKey);

export const selectSellers = createSelector(
  selectFeature,
  (state: IState) => state.sellers,
);
