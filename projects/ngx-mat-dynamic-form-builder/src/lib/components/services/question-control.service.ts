import { Injectable } from '@angular/core';
import { QuestionBase } from '../helper-classes/question-base';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Injectable()
export class QuestionControlService {

  constructor() { }

  toFormGroup(questions: QuestionBase<any>[]) {
    let group: any = {};

    questions.some(question => {
      if (question.controlType === 'spacer') {
        return;
      }
      group[question.key] = question.validators ? new FormControl({ value: question.value || '', disabled: question.disabled }, question.validators)
        : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}
