import { NgModule } from '@angular/core';
import { NgxMatDynamicFormBuilderComponent } from './ngx-mat-dynamic-form-builder.component';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';
import { ChipSelectorComponent } from './components/chip-selector/chip-selector.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './components/dynamic-form-question/dynamic-form-question.component';
import { PrintInputErrorComponent } from './components/print-input-error/print-input-error.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgxMatFormContentDirective } from './shared/ngx-mat-form-content.directive';

@NgModule({
  declarations: [
    NgxMatDynamicFormBuilderComponent,
    AutoCompleteComponent,
    ChipSelectorComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    PrintInputErrorComponent,
    NgxMatFormContentDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatChipsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  exports: [
    AutoCompleteComponent,
    ChipSelectorComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    PrintInputErrorComponent,
    NgxMatFormContentDirective
  ]
})
export class NgxMatDynamicFormBuilderModule { }
