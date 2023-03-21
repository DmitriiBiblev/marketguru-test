import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './form-field.component';
import { LabelDirective } from './directives';


@NgModule({
  declarations: [
    FormFieldComponent,
    LabelDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FormFieldComponent,
    LabelDirective,
  ],
})
export class FormFieldModule {
}
