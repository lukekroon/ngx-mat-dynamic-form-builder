import { QuestionBase } from './question-base';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export class DateTimeQuestion extends QuestionBase<Date> {
    controlType = 'date-time';
    type: string;

    dateControl: FormControl;
    hourControl: FormControl;
    minuteControl: FormControl;

    constructor(options: {} = {}) {
        super(options);
        this.dateControl = new FormControl();
        this.hourControl = new FormControl(undefined, [Validators.min(0), Validators.max(23)]);
        this.minuteControl = new FormControl(undefined, [Validators.min(0), Validators.max(59)]);
        if (options['value']) {
            this.dateControl.setValue(options['value']);
            this.hourControl.setValue(this.dateControl.value.getHours());
            this.minuteControl.setValue(this.dateControl.value.getMinutes());
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