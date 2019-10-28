import { QuestionBase } from './question-base';
import { Observable, of } from 'rxjs';

export class AutoCompleteQuestion extends QuestionBase<string> {
    controlType = 'autoComplete';
    options: any[] = [];
    options$: Observable<any[]>;

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
        this.options$ = options['options$'] || of([]);
    }
}