import { QuestionBase } from './question-base';
import { Observable, of } from 'rxjs';

export class DropdownQuestion extends QuestionBase<string> {
  controlType = 'dropdown';
  options: { key: string, value: string }[] = [];
  options$: Observable<{ key: string, value: string }[]>;

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
    this.options$ = options['options$'] || of([]);
  }
}
