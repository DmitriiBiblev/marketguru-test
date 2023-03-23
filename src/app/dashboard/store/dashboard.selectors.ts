import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IState } from './dashboard.reducer';

export const featureKey: string = 'dashboard';
const LIMIT: number = 5;

export const selectFeature = createFeatureSelector<IState>(featureKey);

export const selectSellers = createSelector(
  selectFeature,
  (state: IState) => state.filteredSellers.slice((state.currentPage - 1) * LIMIT, state.currentPage * LIMIT),
);

export const selectCurrentPage = createSelector(
  selectFeature,
  (state: IState) => state.currentPage,
);

export const selectMaxPages = createSelector(
  selectFeature,
  (state: IState) => Math.ceil(state.filteredSellers.length / LIMIT),
);
