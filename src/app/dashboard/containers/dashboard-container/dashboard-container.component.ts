import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ISeller } from '../../interfases';
import { Store } from '@ngrx/store';
import { getSellers, IState, selectSellers } from '../../store';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardContainerComponent implements OnInit {
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
