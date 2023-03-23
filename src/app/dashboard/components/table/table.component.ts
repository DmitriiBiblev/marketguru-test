import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ISeller } from '../../interfases';
import { TABLE_TITLES } from '../../data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  titles: string[] = TABLE_TITLES;
  //сделал по-быстрому, чтобы уменьшить код html
  cells: ('name' | 'brandName' | 'wbRating' | 'reviewsCount')[] = ['name', 'brandName', 'wbRating', 'reviewsCount'];

  @Input() sellers: ISeller[] | null = [];
}
