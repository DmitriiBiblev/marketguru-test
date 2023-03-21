import { Directive } from '@angular/core';

@Directive()
export abstract class FormFieldControlDirective<T> {
  value!: any | null;
  focused!: boolean;
  controlType?: string;

  abstract onContainerClick?(event: MouseEvent): void;
}

