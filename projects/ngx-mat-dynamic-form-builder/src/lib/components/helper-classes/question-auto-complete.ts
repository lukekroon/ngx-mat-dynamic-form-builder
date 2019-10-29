import { SelectQuestion } from './question-select';

export class AutoCompleteQuestion<T> extends SelectQuestion<T> {
    controlType = 'autoComplete';

    constructor(options: {} = {}) {
        super(options);
    }
}