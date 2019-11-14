import { QuestionBase } from './question-base';

export class Spacer extends QuestionBase<undefined> {

    controlType = 'spacer';
    flex: number;

    constructor(options: {} = {}) {
        super(options);
        this.flex = options['flex'] || 100;
    }
}