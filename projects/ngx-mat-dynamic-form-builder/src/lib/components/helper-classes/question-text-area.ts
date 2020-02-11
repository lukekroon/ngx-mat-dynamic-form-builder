import { QuestionBase } from './question-base';

export class TextAreaQuestion<T> extends QuestionBase<T> {
    controlType = 'textarea';
    type: string;
    maxRows: number;
    minRows: number;
    autoSize: boolean;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
        this.maxRows = options['maxRows'] || 5;
        this.minRows = options['minRows'] || 2;
        this.autoSize = options['autoSize'] || true;
    }
}

