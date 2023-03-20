import { createAction, props } from '@ngrx/store';
import { ISeller } from '../interfases';

export enum DashboardActionTypes {
  GET_SELLERS = '[Dashboard] Get Sellers',
  GET_SELLERS_SUCCESS = '[Dashboard] Get Sellers Success',
  GET_SELLERS_FAILURE = '[Dashboard] Get Sellers Failure',
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
