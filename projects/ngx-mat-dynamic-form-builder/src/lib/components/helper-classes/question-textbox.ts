import { QuestionBase } from './question-base';

export class TextboxQuestion<T> extends QuestionBase<T> {
  controlType = 'textbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}

