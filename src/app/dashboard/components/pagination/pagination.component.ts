import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  page: number = 1;

  @Input() maxPages!: number;
  @Output() onChangePage: EventEmitter<number> = new EventEmitter<number>();

  onPrevPage() {
    this.page -= 1;
    this.onChangePage.emit(this.page);
  }

  onNextPage() {
    this.page += 1;
    this.onChangePage.emit(this.page);
  }
}
