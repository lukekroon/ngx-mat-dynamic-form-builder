import { Component, Input, OnInit } from '@angular/core';
import { QuestionBase } from '../helper-classes/question-base';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.css']
})
export class DynamicFormQuestionComponent implements OnInit {

  // @Input() question: QuestionBase<any>;
  @Input() question: any;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }

  constructor() {
  }

  ngOnInit() {
  }

  setMutlipleValues(event: any): void {
    this.form.controls[this.question.key].setValue(event.map(val => val[this.question.selection.key]));
  }

  setSingleValue(event: any): void {
    this.form.controls[this.question.key].setValue(event[this.question.selection.key]);
  }
}
