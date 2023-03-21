import {
  Component,
  ElementRef, EventEmitter,
  HostListener, Input,
  Output,
} from '@angular/core';
import { DropdownAnimation } from './dropdown.animation';
import { FormFieldControlDirective } from '../form-field/directives';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IOption } from '../../interfaces';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  animations: [DropdownAnimation],
  providers: [
    { provide: FormFieldControlDirective, useExisting: SelectComponent },
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: SelectComponent },
  ],
})
export class SelectComponent implements FormFieldControlDirective<string | number | number[] | null>, ControlValueAccessor {
  @Input() options?: IOption[] | undefined | null;
  @Input() placeholder!: string;

  @Input()
  get value(): string | number | number[] | null {
    return this._value;
  }

  set value(newValue: any) {
    this._value = newValue;
  }

  private _value: any = undefined;
  focused: boolean = false;
  controlType: string = 'select';

  @Output() onChange: EventEmitter<any> = new EventEmitter<any>();
  _onChange: (value: any) => void = () => {
  };
  _onTouched = () => {
  };

  constructor(
    private elementRef: ElementRef<HTMLDivElement>,
  ) {
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: (value: any) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this._onTouched = fn;
  }

  toggle(): void {
    this.focused = !this.focused;
    this._onTouched();
  }

  renderValue(): string {
    const option = this.options?.find((option) => option.id === this.value);
    return (option !== undefined && option !== null) ? option.name : this.placeholder;
  }

  select(value: string | number): void {
    this.onChange.emit(value);
    this.writeValue(value);
    this._onChange(this.value);
    this._onTouched();
    this.focused = false;
  }

  @HostListener('document:click', ['$event.target'])
  outsideClick(targetElement: Node | null): void {
    if (this.focused && !this.elementRef.nativeElement.contains(targetElement)) {
      this.focused = false;
    }
  }
}

