import { Injectable } from '@angular/core';
import {
  QuestionBase,
  DropdownQuestion,
  TextboxQuestion,
  FormValidators,
  ChipSelectorQuestion,
  AutoCompleteQuestion,
  DateTimeQuestion,
  Spacer,
  DateQuestion
} from 'ngx-mat-dynamic-form-builder';
import { DataService } from './data.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionFormServiceService {

  constructor(private dataService: DataService) {
  }

  questions(object?: any): QuestionBase<any>[] {
    let questions: QuestionBase<any>[] = [
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
        flex: 50,
      }),
      new Spacer({
        flex: 50
      }),
      new DropdownQuestion<string>({
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
        flex: 50,
      }),
      new DropdownQuestion<string>({
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
          options$: (regionId: string) => this.dataService.getCitiesByRegion(regionId),
        },
        validators: [...FormValidators.get('required')],
        hint: 'Home City',
        appearance: 'outline',
        flex: 80,
      }),
      new ChipSelectorQuestion<string>({
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
        flex: 100,
      }),
      new AutoCompleteQuestion<string>({
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
          value: '2'
        },
        hint: 'Required',
        appearance: 'outline',
        flex: 100,
      }),
      new DateTimeQuestion({
        key: 'startDate',
        label: 'Sart Date Time',
        value: object ? object.startDate : undefined,
        validators: [...FormValidators.get('required')],
        appearance: 'outline',
        maxDate: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
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
        flex: 100,
      }),
    ];
    return questions;
  }
}
