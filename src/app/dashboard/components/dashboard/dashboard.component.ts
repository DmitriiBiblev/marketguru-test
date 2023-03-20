import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SellersService } from '../../services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  constructor(
    private sellersService: SellersService,
  ) {
    sellersService
      .getSellers()
      .subscribe(q => console.log(q));
  }
}
