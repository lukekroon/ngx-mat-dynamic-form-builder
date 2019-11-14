import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { QuestionBase } from '../helper-classes/question-base';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from '../services/question-control.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [QuestionControlService]
})
export class DynamicFormComponent implements OnInit, OnDestroy {

  @Input() questions: QuestionBase<any>[] = [];
  @Input() buttonText: string;
  @Output() formResult: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;

  _buttonText: string;

  changeSubscriptions: Subscription[];

  constructor(private qcs: QuestionControlService) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
    this._buttonText = this.buttonText || 'Save';

    this.changeSubscriptions = [];
    // Listen for changes on other controlls
    this.questions.forEach(q => {
      if (q.conditional) {
        // Subscribe to changes
        const targetControl = this.form.controls[q.conditional.controlKey];
        this.changeSubscriptions.push(targetControl.valueChanges.subscribe(value => {
          q.conditional.value === value ? q.show = true : q.show = false;
        }));
        // If values are set check them now
        if (targetControl.value && targetControl.value === q.conditional.value) {
          q.show = true;
        }
      }
    })
  }

  onSubmit() {
    this.formResult.emit(this.form.value);
  }

  ngOnDestroy(): void {
    if (this.changeSubscriptions) {
      this.changeSubscriptions.forEach(s => {
        s.unsubscribe;
      })
    }
  }
}
