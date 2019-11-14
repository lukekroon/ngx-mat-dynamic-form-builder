import { Component, OnInit } from '@angular/core';
import { QuestionFormServiceService } from './services/question-form-service.service';

@Component({
  selector: 'mat-ta-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'matDynamicFormBuilder';

  questions: any;
  questionsEdit: any;

  constructor(private qfs: QuestionFormServiceService) { }

  submitForm(form: any): void {
    console.log(form);
  }

  ngOnInit(): void {
    this.questions = this.qfs.questions();
    this.questionsEdit = this.qfs.questions({
      number: 2256,
      optionObservableKey: '1',
      optionArrayKey: '2',
      optionChip: ['3', '4'],
      optionAutoC: '1',
      startDate: new Date()
    });
  }

  onNoClick(): void {
    console.log('Close');
  }
}
