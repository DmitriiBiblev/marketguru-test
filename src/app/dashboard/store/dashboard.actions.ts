import { createAction, props } from '@ngrx/store';
import { IFilters, ISeller, ISorting } from '../interfases';

export enum DashboardActionTypes {
  GET_SELLERS = '[Dashboard] Get Sellers',
  GET_SELLERS_SUCCESS = '[Dashboard] Get Sellers Success',
  GET_SELLERS_FAILURE = '[Dashboard] Get Sellers Failure',

  SET_FILTERS = '[Dashboard] Set Filters',
  SET_SORTING = '[Dashboard] Set Sorting',
  SET_PAGE = '[Dashboard] Set Page',
}

export const getSellers = createAction(
  DashboardActionTypes.GET_SELLERS,
);

export const getSellersSuccess = createAction(
  DashboardActionTypes.GET_SELLERS_SUCCESS,
  props<{ sellers: ISeller[] }>(),
);

// У нас это никогда не сработает, но оставлю на будущее :)
export const getSellersFailure = createAction(
  DashboardActionTypes.GET_SELLERS_FAILURE,
);

export const setFilters = createAction(
  DashboardActionTypes.SET_FILTERS,
  props<{ filters: IFilters }>(),
);

export const setSorting = createAction(
  DashboardActionTypes.SET_SORTING,
  props<{ sorting: ISorting }>(),
);

export const setPage = createAction(
  DashboardActionTypes.SET_PAGE,
  props<{ page: number }>(),
);
