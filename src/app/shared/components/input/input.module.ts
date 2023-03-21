import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldModule } from '../form-field/form-field.module';
import { InputComponent } from './input.component';


@NgModule({
  declarations: [
    InputComponent,
  ],
  imports: [
    CommonModule,
    FormFieldModule,
  ],
  exports: [
    InputComponent,
    FormFieldModule,
  ],
})
export class InputModule {
}
