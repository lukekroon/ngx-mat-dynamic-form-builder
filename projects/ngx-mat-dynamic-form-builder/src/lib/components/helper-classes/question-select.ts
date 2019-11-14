import { QuestionBase } from './question-base';
import { Observable, of, BehaviorSubject } from 'rxjs';

/**
 * Base class for any drop down of multiple select
 */
export class SelectQuestion<T> extends QuestionBase<T> {

    options: any[];
    options$: Observable<any[]> | BehaviorSubject<any[]> | any;
    selection: {
        key: string;
        value: string;
    };
    selectionFilter: {
        controlKey: string;
        filterKey: string;
        options$: (value: any) => Observable<any[]>;
    };

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
        this.options$ = options['options$'];
        this.selection = options['selection'];
        this.selectionFilter = options['selectionFilter'];
    }
}