import { Injectable } from '@angular/core';
import { QuestionBase } from '../helper-classes/question-base';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Injectable()
export class QuestionControlService {

  constructor() { }

  toFormGroup(questions: QuestionBase<any>[]) {
    let group: any = {};

    questions.forEach(question => {
      group[question.key] = question.validators ? new FormControl(question.value || '', question.validators)
        : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}
