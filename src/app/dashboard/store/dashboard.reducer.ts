import { IFilters, ISeller, ISorting } from '../interfases';
import { createReducer, on } from '@ngrx/store';
import { getSellersSuccess, setFilters, setPage, setSorting } from './dashboard.actions';

export interface IState {
  sellers: ISeller[];
  filters?: IFilters;
  sorting?: ISorting;
  filteredSellers: ISeller[];
  currentPage: number;
}

const initialState: IState = {
  sellers: [],
  filteredSellers: [],
  currentPage: 1,
};

export const dashboardReducer = createReducer(
    initialState,
    on(
      getSellersSuccess,
      (state, { sellers }) => ({ ...state, sellers, filteredSellers: sellers }),
    ),
    on(
      setFilters,
      (state, { filters }) => ({
        ...state,
        filters,
        filteredSellers: setFilteredSellers(state.sellers, filters, state.sorting),
        currentPage: 1,
      }),
    ),
    on(
      setSorting,
      (state, { sorting }) => ({
        ...state,
        sorting,
        filteredSellers: setFilteredSellers(state.sellers, state.filters, sorting),
      }),
    ),
    on(
      setPage,
      (state, { page }) => ({ ...state, currentPage: page }),
    ),
  )
;

function setFilteredSellers(sellers: ISeller[], filters?: IFilters, sorting?: ISorting): ISeller[] {
  let filteredSellers: ISeller[] = [...sellers];

  if (filters)
    filteredSellers = filterSellers(filteredSellers, filters);
  if (sorting)
    return sortingSellers(filteredSellers, sorting);
  return filteredSellers;
}

function filterSellers(sellers: ISeller[], { wbRating, minReviewsCount, maxReviewsCount }: IFilters): ISeller[] {
  let filteredSellers: ISeller[] = [...sellers];

  if (wbRating !== 'all')
    filteredSellers = filteredSellers.filter((seller: ISeller) => seller.wbRating === wbRating);
  if (minReviewsCount !== null)
    filteredSellers = filteredSellers.filter((seller: ISeller) => seller.reviewsCount >= (minReviewsCount as number));
  if (maxReviewsCount !== null)
    filteredSellers = filteredSellers.filter((seller: ISeller) => seller.reviewsCount <= (maxReviewsCount as number));
  return filteredSellers;
}

function sortingSellers(sellers: ISeller[], { field, type }: ISorting): ISeller[] {
  return sellers.sort((seller1: ISeller, seller2: ISeller) => {
    const field1: string | number = seller1[field];
    const field2: string | number = seller2[field];

    if (type === 'asc') {
      if (field1 > field2) return 1;
      if (field1 < field2) return -1;
      return 0;
    }
    if (field2 > field1) return 1;
    if (field2 < field1) return -1;
    return 0;
  });
}
