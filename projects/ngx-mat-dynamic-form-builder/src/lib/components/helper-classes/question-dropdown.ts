import { SelectQuestion } from './question-select';

export class DropdownQuestion<T> extends SelectQuestion<T> {
  controlType = 'dropdown';
  multiple: boolean;

  constructor(options: {} = {}) {
    super(options);
    this.multiple = options['multiple'];
    if (this.multiple && super.value && !Array.isArray(super.value)) {
      super.value = [super.value] as any;
    } else if (this.multiple && !super.value) {
      super.value = [] as any;
    }
  }
}
