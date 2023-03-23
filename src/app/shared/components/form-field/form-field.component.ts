import {
  AfterContentInit,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';
import { APP_LABEL, FormFieldControlDirective, LabelDirective } from './directives';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  host: {
    'class': 'app-form-field',
  },
  inputs: ['hideError', 'small', 'class'],
  encapsulation: ViewEncapsulation.None,
})
export class FormFieldComponent implements AfterContentInit {
  @ContentChild(FormFieldControlDirective) control!: FormFieldControlDirective<any>;
  @ContentChildren(APP_LABEL, { descendants: true }) labelChildren?: QueryList<LabelDirective>;

  constructor(
    public elementRef: ElementRef,
    public changeDetectorRef: ChangeDetectorRef,
  ) {
  }

  ngAfterContentInit() {
    if (this.control.controlType) {
      this.elementRef.nativeElement.classList.add(this.control.controlType);
    }

    // this.control.stateChanges?.pipe(startWith(null)).subscribe(() => {
    //   this.changeDetectorRef.markForCheck();
    // });
  }
}
