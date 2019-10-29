import { QuestionBase } from './question-base';
import { Observable, of } from 'rxjs';
import { SelectQuestion } from './question-select';

export class DropdownQuestion<T> extends SelectQuestion<T> {
  controlType = 'dropdown';

  constructor(options: {} = {}) {
    super(options);
  }
}
