import { Injectable } from '@angular/core';
import { QuestionBase, DropdownQuestion, TextboxQuestion, FormValidators, ChipSelectorQuestion, AutoCompleteQuestion, DateTimeQuestion, Spacer } from 'ngx-mat-dynamic-form-builder';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionFormServiceService {

  constructor(private dataService: DataService) {
  }

  questions(object?: any): QuestionBase<any>[] {
    let questions: QuestionBase<any>[] = [
      new TextboxQuestion<number>({
        key: 'number',
        label: 'Price',
        placeholder: 'Enter some number',
        value: object ? object.number : undefined,
        validators: [...FormValidators.get('required'), ...FormValidators.get('positiveInteger')],
        type: 'number',
        hint: 'Positive integer',
        prefixIcon: 'fingerprint',
        suffix: '.00',
        appearance: 'standard',
        flex: 50,
      }),
      new Spacer({
        flex: 50
      }),
      new DropdownQuestion<string>({
        key: 'optionObservableKey',
        label: 'Observable',
        value: object ? object.optionObservableKey : undefined,
        options$: this.dataService.getOptionsObservable(),
        selection: {
          key: 'id',
          value: 'area'
        },
        validators: [...FormValidators.get('required')],
        hint: 'Required',
        appearance: 'outline',
        flex: 50,
      }),
      new DropdownQuestion<string>({
        key: 'optionArrayKey',
        label: 'Array',
        value: object ? object.optionArrayKey : undefined,
        options: this.dataService.getOptions(),
        selection: {
          key: 'id',
          value: 'area'
        },
        validators: [...FormValidators.get('required')],
        hint: 'Required',
        appearance: 'outline',
        flex: 80,
      }),
      new ChipSelectorQuestion<string>({
        key: 'optionChip',
        label: 'Multiple Chips',
        placeholder: 'Chuup Chip Chip',
        value: object ? object.optionChip : undefined,
        options$: this.dataService.getOptionsObservable(),
        selection: {
          key: 'id',
          value: 'area'
        },
        validators: [...FormValidators.get('required')],
        hint: 'Required',
        appearance: 'standard',
        flex: 100,
      }),
      new AutoCompleteQuestion<string>({
        key: 'optionAutoC',
        label: 'Auto Complete',
        placeholder: 'Aaaauuuto... . . .',
        value: object ? object.optionAutoC : undefined,
        options$: this.dataService.getOptionsObservable(),
        selection: {
          key: 'id',
          value: 'area'
        },
        validators: [...FormValidators.get('required')],
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
        flex: 100,
      }),
    ];
    return questions;
  }
}
