import { SelectQuestion } from './question-select';

export class ChipSelectorQuestion<T> extends SelectQuestion<T> {
    controlType = 'chipSelector';

    constructor(options: {} = {}) {
        super(options);
      }
}
