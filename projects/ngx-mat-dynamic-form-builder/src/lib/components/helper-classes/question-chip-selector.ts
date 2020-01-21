import { SelectQuestion } from './question-select';

export class ChipSelectorQuestion<T> extends SelectQuestion<T> {
  controlType = 'chipSelector';

  customChip: boolean;

  constructor(options: {} = {}) {
    super(options);
    this.customChip = options['customChip'];
  }
}
