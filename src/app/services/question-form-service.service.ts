import { Injectable } from '@angular/core';
import {
  QuestionBase,
  Question,
  DropdownQuestion,
  TextboxQuestion,
  FormValidators,
  ChipSelectorQuestion,
  AutoCompleteQuestion,
  DateTimeQuestion,
  TextAreaQuestion,
  Spacer,
  DateQuestion
} from 'ngx-mat-dynamic-form-builder';
import { DataService } from './data.service';
import { BehaviorSubject } from 'rxjs';
import { CheckboxQuestion } from 'projects/ngx-mat-dynamic-form-builder/src/lib/components/helper-classes/question-checkbox';

@Injectable({
  providedIn: 'root'
})
export class QuestionFormServiceService {

  constructor(private dataService: DataService) {
  }

  questions(object?: any): Question<any>[] {
    let questions: Question<any>[] = [
      new CheckboxQuestion({
        key: 'ready',
        label: 'Are you ready ?',
        value: object ? object.ready : undefined,
        validators: [...FormValidators.get('required')],
        disabled: false,
        color: 'accent',
        labelPosition: 'before',
        flex: 50,
      }),
      new TextAreaQuestion<string>({
        key: 'about',
        label: 'About Yourself',
        placeholder: 'Tell us something interesting...',
        value: object ? object.about : undefined,
        validators: [...FormValidators.get('required')],
        type: 'text',
        hint: 'Long Text',
        appearance: 'outline',
        disabled: false,
        flex: 50,
        minRows: 4,
        maxRows: 8,
        autoSize: true
      }),
      new TextboxQuestion<number>({
        key: 'qty',
        label: 'Quantity',
        placeholder: 'Number of',
        value: object ? object.qty : undefined,
        validators: [...FormValidators.get('positiveInteger')],
        type: 'number',
        hint: 'Disabled',
        prefixIcon: 'close',
        appearance: 'standard',
        disabled: true,
        flex: 50,
      }),
      new Spacer({
        flex: 50
      }),
      new TextboxQuestion<number>({
        key: 'price',
        label: 'Price',
        placeholder: 'Enter price of item',
        value: object ? object.price : undefined,
        validators: [...FormValidators.get('required'), ...FormValidators.get('positiveInteger')],
        type: 'number',
        hint: 'Whole Number',
        prefixIcon: 'attach_money',
        suffix: '- 00',
        appearance: 'standard',
        disabled: false,
        flex: 50,
      }),
      new Spacer({
        flex: 50
      }),
      new DropdownQuestion<number>({
        key: 'regionId',
        label: 'Region',
        value: object ? object.regionId : undefined,
        options$: this.dataService.getRegions(),
        selection: {
          key: 'id',
          value: 'name'
        },
        validators: [...FormValidators.get('required')],
        hint: 'Required',
        appearance: 'outline',
        disabled: false,
        flex: 50,
      }),
      new DropdownQuestion<number>({
        key: 'cityId',
        label: 'City',
        value: object ? object.cityId : undefined,
        options$: new BehaviorSubject([]), // Filtered items from selectionFilter will be added here
        selection: {
          key: 'id',
          value: 'name'
        },
        selectionFilter: {
          controlKey: 'regionId',
          filterKey: 'regionId',
          options$: (regionId: number) => this.dataService.getCitiesByRegion(regionId),
        },
        emitObject: true,
        defaultValue: true,
        validators: [...FormValidators.get('required')],
        hint: 'Home City',
        appearance: 'outline',
        flex: 80,
      }),
      new ChipSelectorQuestion<number>({
        key: 'categoryId',
        label: 'Categories',
        placeholder: 'One or Multiple',
        value: object ? object.categoryId : undefined,
        options$: this.dataService.getCategories(),
        selection: {
          key: 'id',
          value: 'name'
        },
        validators: [...FormValidators.get('required')],
        hint: 'Required',
        appearance: 'standard',
        disabled: false,
        flex: 100,
      }),
      new AutoCompleteQuestion<number>({
        key: 'retailId',
        label: 'Retailer',
        placeholder: 'Hiking Retailers',
        value: object ? object.retailId : undefined,
        options$: this.dataService.getRetailer(),
        selection: {
          key: 'id',
          value: 'name'
        },
        conditional: {
          controlKey: 'categoryId',
          value: 2
        },
        validators: [...FormValidators.get('required')],
        emitObject: true,
        hint: 'Required',
        appearance: 'outline',
        disabled: false,
        flex: 100,
        autoClear: false // When selected the form fiels will clear
      }),
      new DateTimeQuestion({
        key: 'startDate',
        label: 'Sart Date Time',
        value: object ? object.startDate : undefined,
        validators: [...FormValidators.get('required')],
        appearance: 'outline',
        maxDate: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
        disabled: false,
        flex: 100,
      }),
      new DateQuestion({
        key: 'endDate',
        label: 'Expiry Date',
        value: object ? object.endDate : undefined,
        validators: [...FormValidators.get('required')],
        appearance: 'outline',
        minDate: new Date(),
        maxDate: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
        disabled: false,
        flex: 100,
      }),
      new ChipSelectorQuestion<number>({
        key: 'customChips',
        label: 'Custom Categories',
        placeholder: 'One or Multiple',
        value: object ? object.categoryId : undefined,
        options$: this.dataService.getCategories(),
        selection: {
          key: 'id',
          value: 'name'
        },
        validators: [...FormValidators.get('required')],
        hint: 'Required',
        appearance: 'standard',
        disabled: false,
        flex: 100,
        customChip: true
      }),
    ];
    return questions;
  }

  datePicker(): QuestionBase<any>[] {
    return [
      new DateQuestion({
        key: 'start',
        label: 'Start Date',
        value: new Date(),
        validators: [...FormValidators.get('required')],
        flex: 33,
      }),
      new DateQuestion({
        key: 'end',
        label: 'End Date',
        value: new Date(),
        validators: [...FormValidators.get('required')],
        flex: 33,
      }),
    ]
  }
}
