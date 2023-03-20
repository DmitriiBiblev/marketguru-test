import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { getSellers, IState, selectSellers } from '../../store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ISeller } from '../../interfases';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  sellers$: Observable<ISeller[]>;

  constructor(
    private _store$: Store<IState>,
  ) {
    this.sellers$ = _store$.select(selectSellers);
  }

  ngOnInit() {
    this._store$.dispatch(getSellers());
  }
}
