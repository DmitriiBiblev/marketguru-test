import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  @Input() currentPage: number | null = 1;
  @Input() maxPages!: number | null;
  @Output() onChangePage: EventEmitter<number> = new EventEmitter<number>();
}
