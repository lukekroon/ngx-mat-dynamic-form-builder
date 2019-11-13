import { QuestionBase } from './question-base';
import { FormGroup, FormControl } from '@angular/forms';

export class DateTimeQuestion extends QuestionBase<Date> {
    controlType = 'date-time';
    type: string;

    dateControl: FormControl;
    hourControl: FormControl;
    minuteControl: FormControl;

    constructor(options: {} = {}) {
        super(options);
        if (options['value']) {
            this.dateControl = new FormControl(options['value']);
            this.hourControl = new FormControl(this.dateControl.value.getHours());
            this.minuteControl = new FormControl(this.dateControl.value.getMinutes());
        } else {
            this.dateControl = new FormControl();
            this.hourControl = new FormControl();
            this.minuteControl = new FormControl();
        }
        this.hourControl.valueChanges.subscribe(hour => {
            if (hour && this.dateControl.value) {
                this.dateControl.value.setHours(hour);
            }
        })
        this.minuteControl.valueChanges.subscribe(min => {
            if (min && this.dateControl.value) {
                this.dateControl.value.setMinutes(min);
            }
        })
    }
}