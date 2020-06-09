import { QuestionBase } from './question-base';
import { Observable, of, BehaviorSubject } from 'rxjs';

/**
 * Base class for any drop down of multiple select
 */
export class SelectQuestion<T> extends QuestionBase<T> {

    options: any[];
    options$: Observable<any[]> | BehaviorSubject<any[]> | any; // Options to select from
    selection: { // out of the options to select from
        key: string; // This key will be emitted when selected or compared against for default values
        value: string; // The key to display in the selection
    };
    selectionFilter: { // When the data needs to be filtered from another question result
        controlKey: string; // The other question key
        filterKey: string; // The key to filter on
        options$: (value: any) => Observable<any[]>; // Filter data function
    };
    defaultValue: boolean;
    // If other questions rely on the value of this question, this must be false
    emitObject: boolean; // If this is true, the form will emit the selected object and not selection.key

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
        this.options$ = options['options$'];
        this.selection = options['selection'];
        this.defaultValue = options['defaultValue'] != undefined ? options['defaultValue'] : false;
        this.selectionFilter = options['selectionFilter'];
        this.emitObject = options['emitObject'];
    }
}