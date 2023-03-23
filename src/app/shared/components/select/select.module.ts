import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';
import { FormFieldModule } from '../form-field/form-field.module';


@NgModule({
  declarations: [
    SelectComponent,
  ],
  imports: [
    CommonModule,
    FormFieldModule,
  ],
  exports: [
    SelectComponent,
    FormFieldModule,
  ],
})
export class SelectModule {
}
