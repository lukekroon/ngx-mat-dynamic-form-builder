import { Injectable } from '@angular/core';
import { QuestionBase, DropdownQuestion, TextboxQuestion } from 'ngx-mat-dynamic-form-builder';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionFormServiceService {

  constructor(private dataService: DataService) { }

  questions(object?: any): QuestionBase<any>[] {
    let questions: QuestionBase<any>[] = [
      new TextboxQuestion({
        key: 'number',
        label: 'Number',
        value: object ? object.number : undefined,
        required: true,
        type: 'number',
        order: 1
      }),
      new DropdownQuestion({
        key: 'optionObservableKey',
        label: 'Observable',
        value: object ? object.optionObservableKey : undefined,
        options$: this.dataService.getOptionsObservable(),
        required: true,
        order: 2
      }),
      new DropdownQuestion({
        key: 'optionArrayKey',
        label: 'Array',
        value: object ? object.optionArrayKey : undefined,
        options: this.dataService.getOptions(),
        required: true,
        order: 3
      }),
    ];
    return questions.sort((a, b) => a.order - b.order);
  }
}
