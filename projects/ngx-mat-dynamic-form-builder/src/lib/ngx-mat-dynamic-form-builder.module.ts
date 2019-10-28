import { NgModule } from '@angular/core';
import { NgxMatDynamicFormBuilderComponent } from './ngx-mat-dynamic-form-builder.component';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';
import { ChipSelectorComponent } from './components/chip-selector/chip-selector.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './components/dynamic-form-question/dynamic-form-question.component';
import { PrintInputErrorComponent } from './components/print-input-error/print-input-error.component';
import { DemoMaterialModule } from './shared/demo-material-module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    NgxMatDynamicFormBuilderComponent,
    AutoCompleteComponent,
    ChipSelectorComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    PrintInputErrorComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  exports: [
    NgxMatDynamicFormBuilderComponent,
    AutoCompleteComponent,
    ChipSelectorComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    PrintInputErrorComponent
  ]
})
export class NgxMatDynamicFormBuilderModule { }
