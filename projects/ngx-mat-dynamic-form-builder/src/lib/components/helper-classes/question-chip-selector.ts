import { QuestionBase } from './question-base';
import { Observable, of } from 'rxjs';

export class ChipSelectorQuestion extends QuestionBase<string> {
    controlType = 'chipSelector';
    options: any[] = [];
    options$: Observable<any[]>;

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
        this.options$ = options['options$'] || of([]);
    }
}
