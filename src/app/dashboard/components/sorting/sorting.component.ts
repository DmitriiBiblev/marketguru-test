import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ISorting } from '../../interfases';
import { IOption } from '../../../shared/interfaces';
import { SORTING_FIELDS, SORTING_TYPES } from '../../data';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortingComponent {
  form: FormGroup;
  sortingFields: IOption[] = SORTING_FIELDS;
  sortingTypes: IOption[] = SORTING_TYPES;

  @Output() onSetSorting: EventEmitter<ISorting> = new EventEmitter<ISorting>();

  constructor(
    private _fb: FormBuilder,
  ) {
    //опустил отображение ошибок
    this.form = _fb.group({
      field: [null, Validators.required],
      type: [null, Validators.required],
    });
  }

  handleSubmit() {
    this.onSetSorting.emit(this.form.value);
  }
}
