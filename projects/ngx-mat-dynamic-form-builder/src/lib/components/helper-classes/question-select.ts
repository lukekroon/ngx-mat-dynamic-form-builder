import { QuestionBase } from './question-base';
import { Observable, of } from 'rxjs';

/**
 * Base class for any drop down of multiple select
 */
export class SelectQuestion<T> extends QuestionBase<T> {
    
    options: any[];
    options$: Observable<any[]>;
    selection: {
        key: string;
        value: string;
    };

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
        this.options$ = options['options$'];
        this.selection = options['selection'];
    }
}