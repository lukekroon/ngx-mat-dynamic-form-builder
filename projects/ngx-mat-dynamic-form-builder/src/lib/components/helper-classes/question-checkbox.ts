import { Question } from './question-base';

export class CheckboxQuestion extends Question<boolean> {
    controlType = 'checkbox';

    checked: true | false;
    color: 'primary' | 'accent' | 'warn';
    labelPosition: 'before' | 'after';

    constructor(options: {} = {}) {
        super(options);
        this.checked = options['value'] || options['value'] === true ? true : false;
        this.value = this.checked;
        this.color = options['color'] || 'primary';
        this.labelPosition = options['labelPosition'] || 'after';
    }
}
