import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SellersService } from '../services';
import { DashboardActionTypes, getSellersFailure, getSellersSuccess } from './dashboard.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { ISeller } from '../interfases';

@Injectable()
export class DashboardEffects {
  constructor(
    private _actions$: Actions,
    private _sellersService: SellersService,
  ) {
  }

  getSellers$ = createEffect(() => this._actions$.pipe(
    ofType(DashboardActionTypes.GET_SELLERS),
    mergeMap(() =>
      this._sellersService.getSellers().pipe(
        map((sellers: ISeller[]) => getSellersSuccess({ sellers })),
        catchError(() => of(getSellersFailure())),
      ),
    ),
  ));
}
