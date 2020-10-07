import { Question, QuestionBase } from './question-base';

export class FileUploadQuestion extends QuestionBase<File> {
    controlType = 'file-upload';

    color: 'primary' | 'accent' | 'warn';
    buttonType: 'button' | 'icon';

    constructor(options: {} = {}) {
        super(options);
        this.color = options['color'] || 'primary';
        this.buttonType = options['buttonType'] || 'icon';
    }
}