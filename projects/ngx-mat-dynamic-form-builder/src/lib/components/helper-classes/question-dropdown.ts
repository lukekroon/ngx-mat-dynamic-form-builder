import { SelectQuestion } from './question-select';

export class DropdownQuestion<T> extends SelectQuestion<T> {
  controlType = 'dropdown';

  constructor(options: {} = {}) {
    super(options);
  }
}
