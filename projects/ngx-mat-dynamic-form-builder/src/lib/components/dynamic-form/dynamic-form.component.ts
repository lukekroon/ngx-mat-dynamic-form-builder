import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuestionBase } from '../helper-classes/question-base';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from '../services/question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [QuestionControlService]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  @Input() buttonText: string;
  @Output() formResult: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;

  _buttonText: string;

  constructor(private qcs: QuestionControlService) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
    this._buttonText = this.buttonText || 'Save';
  }

  onSubmit() {
    this.formResult.emit(this.form.value);
  }
}
