import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IOption } from '../../../shared/interfaces';
import { RATINGS } from '../../data';
import { IFilters } from '../../interfases';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersComponent {
  ratings: IOption[] = RATINGS;
  form: FormGroup;

  @Output() onSetFilters: EventEmitter<IFilters> = new EventEmitter<IFilters>();

  constructor(
    private _fb: FormBuilder,
  ) {
    //опустил проверки ошибок и их отображение
    this.form = _fb.group({
      wbRating: null,
      minReviewsCount: null,
      maxReviewsCount: null,
    });
  }

  handleSubmit() {
    this.onSetFilters.emit(this.form.value);
  }
}
