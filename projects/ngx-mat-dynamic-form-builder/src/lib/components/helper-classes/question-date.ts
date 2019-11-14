import { QuestionBase } from './question-base';
import { FormControl } from '@angular/forms';

export class DateQuestion extends QuestionBase<Date> {
    controlType = 'date';
    type: string;

    dateControl: FormControl;

    constructor(options: {} = {}) {
        super(options);
        this.dateControl = new FormControl();
        if (options['value']) {
            this.dateControl.setValue(options['value']);
        }
    }
}