import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ISeller } from '../../interfases';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  @Input() sellers: ISeller[] | null = [];
}
