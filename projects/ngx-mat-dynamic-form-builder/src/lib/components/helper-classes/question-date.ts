import { QuestionBase } from './question-base';
import { FormControl } from '@angular/forms';

export class DateQuestion extends QuestionBase<Date> {
    controlType = 'date';

    dateControl: FormControl;

    maxDate: Date;
    minDate: Date;

    constructor(options: {} = {}) {
        super(options);
        this.dateControl = new FormControl();
        this.maxDate = options['maxDate'];
        this.minDate = options['minDate'];
        if (options['value']) {
            this.dateControl.setValue(options['value']);
        }
    }
}