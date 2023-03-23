import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IFilters, ISeller, ISorting } from '../../interfases';
import { Store } from '@ngrx/store';
import {
  getSellers,
  IState,
  selectCurrentPage,
  selectMaxPages,
  selectSellers,
  setFilters,
  setPage,
  setSorting,
} from '../../store';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardContainerComponent implements OnInit {
  sellers$: Observable<ISeller[]>;
  currentPage$: Observable<number>;
  maxPages$: Observable<number>;

  constructor(
    private _store$: Store<IState>,
  ) {
    this.sellers$ = _store$.select(selectSellers);
    this.currentPage$ = _store$.select(selectCurrentPage)
    this.maxPages$ = _store$.select(selectMaxPages);
  }

  ngOnInit() {
    this._store$.dispatch(getSellers());
  }

  handleSetFilers(filters: IFilters) {
    this._store$.dispatch(setFilters({ filters }));
  }

  handleSetSorting(sorting: ISorting) {
    this._store$.dispatch(setSorting({ sorting }));
  }

  handleChangePage(page: number) {
    this._store$.dispatch(setPage({ page }));
  }
}
