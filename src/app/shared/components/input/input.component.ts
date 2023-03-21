import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { FormFieldControlDirective } from '../form-field/directives';

@Component({
  selector: 'input[app-input]',
  template: '',
  styleUrls: ['./input.component.scss'],
  host: {
    'class': 'app-input',
    '[attr.type]': 'type',
  },
  inputs: ['disabled'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: FormFieldControlDirective, useExisting: InputComponent }],
})
export class InputComponent {
  @Input()
  get value(): string {
    return this._inputValueAccessor.value;
  }

  set value(value: any) {
    if (value !== this.value) {
      this._inputValueAccessor.value = value;
    }
  }

  @Input()
  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  _type: string = 'text';
  controlType: string = 'input';
  focused: boolean = false;
  private _inputValueAccessor: { value: any };

  constructor(
    private elementRef: ElementRef<HTMLInputElement>,
  ) {
    this._inputValueAccessor = elementRef.nativeElement;
  }

  onContainerClick() {
    if (!this.focused) {
      this.focus();
    }
  }

  focus(options?: FocusOptions) {
    this.elementRef.nativeElement.focus(options);
  }
}
