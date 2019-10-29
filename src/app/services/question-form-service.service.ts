import { Injectable } from '@angular/core';
import { QuestionBase, DropdownQuestion, TextboxQuestion, FormValidators, ChipSelectorQuestion } from 'ngx-mat-dynamic-form-builder';
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
        label: 'Number',
        value: object ? object.number : undefined,
        validators: [...FormValidators.get('required'), ...FormValidators.get('positiveInteger')],
        type: 'number',
        hint: 'Positive integer',
        flex: 50,
        order: 1
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
        flex: 50,
        order: 2
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
        flex: 80,
        order: 3
      }),
      new ChipSelectorQuestion<string>({
        key: 'optionChip',
        label: 'Multiple Chips',
        value: object ? object.optionChip : undefined,
        options$: this.dataService.getOptionsObservable(),
        selection: {
          key: 'id',
          value: 'area'
        },
        validators: [...FormValidators.get('required')],
        hint: 'Required',
        flex: 100,
        order: 4
      }),
    ];
    return questions.sort((a, b) => a.order - b.order);
  }
}
