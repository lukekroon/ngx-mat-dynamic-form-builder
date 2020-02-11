import { SelectQuestion } from './question-select';

export class AutoCompleteQuestion<T> extends SelectQuestion<T> {
    controlType = 'autoComplete';
    autoClear: boolean;
    constructor(options: {} = {}) {
        super(options);
        this.autoClear = options['autoClear'] || false;
    }
}