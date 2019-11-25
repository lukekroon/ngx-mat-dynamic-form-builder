import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { QuestionBase } from '../helper-classes/question-base';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from '../services/question-control.service';
import { Subscription } from 'rxjs';
import { SelectQuestion } from '../helper-classes/question-select';
import { TextboxQuestion } from '../helper-classes/question-textbox';

@Component({
  selector: 'ngx-mat-dynamic-form',
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
  filterSubscriptions: Subscription[];

  constructor(private qcs: QuestionControlService) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
    // TODO: Sometimes if the form is valid from the beginning it does not emit in subscribe.
    if (this.form.valid) {
      this.emitForm();
    }
    this._buttonText = this.buttonText || 'Save';

    this.prepareConditionalControls();

    this.prepareFilteredOptions();

    this.form.statusChanges.subscribe(status => {
      if (status === 'VALID') {
        this.emitForm();
      } else {
        this.formResult.emit(null)
      };
    })

  }

  private emitForm(): void {
    let validForm = this.form.getRawValue();
    this.questions.forEach((q: TextboxQuestion<any>) => {
      if (q.type && q.type === 'number') {
        if (validForm[q.key])
          validForm[q.key] = Number(validForm[q.key]);
      }
    })
    this.formResult.emit(validForm)
  }

  prepareConditionalControls(): void {
    this.changeSubscriptions = [];
    // Listen for changes on other controlls
    this.questions.forEach(q => {
      if (q.conditional) {
        // Subscribe to changes
        const targetControl = this.form.controls[q.conditional.controlKey];
        this.changeSubscriptions.push(targetControl.valueChanges.subscribe(value => {
          if (Array.isArray(value)) {
            value.includes(q.conditional.value) ? q.show = true : q.show = false;
          } else {
            q.conditional.value === value ? q.show = true : q.show = false;
          }
        }));
        // If values are set check them now
        if (Array.isArray(targetControl.value)) {
          targetControl.value.includes(q.conditional.value) ? q.show = true : q.show = false;
        } else if (targetControl.value && targetControl.value === q.conditional.value) {
          q.show = true;
        }
      }
    });
  }

  prepareFilteredOptions(): void {
    this.filterSubscriptions = [];
    this.questions.forEach((q: SelectQuestion<any>) => {
      if (q.selectionFilter) {
        const targetControl = this.form.controls[q.selectionFilter.controlKey];
        // If the target value changes, subscribe to load new selections
        this.filterSubscriptions.push(targetControl.valueChanges.subscribe(value => {
          q.selectionFilter.options$(value).subscribe(res => {
            q.options$.next(res)
          })
        }));
        // if target is set, then load them immediately
        if (targetControl.value) {
          q.selectionFilter.options$(targetControl.value).subscribe(res => {
            q.options$.next(res)
          })
        }
      }
    });
  }

  ngOnDestroy(): void {
    if (this.changeSubscriptions) {
      this.changeSubscriptions.forEach(s => {
        s.unsubscribe;
      })
    }
    if (this.filterSubscriptions) {
      this.filterSubscriptions.forEach(s => {
        s.unsubscribe;
      })
    }
  }
}
