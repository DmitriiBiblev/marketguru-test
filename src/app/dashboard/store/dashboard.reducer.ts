import { ISeller } from '../interfases';
import { createReducer, on } from '@ngrx/store';
import { getSellersSuccess } from './dashboard.actions';

export interface IState {
  sellers: ISeller[];
}

const initialState: IState = {
  sellers: [],
};

export const dashboardReducer = createReducer(
  initialState,
  on(
    getSellersSuccess,
    (state, { sellers }) => ({ ...state, sellers }),
  ),
);
