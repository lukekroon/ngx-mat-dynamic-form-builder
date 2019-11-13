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
      optionObservableKey: 'njr28j82je2i',
      optionArrayKey: '23r23rffg',
      optionChip: ['njr28j82je2i', '23r23rffg'],
      optionAutoC: 'sghsdrh434',
      startDate: new Date()
    });
  }

  onNoClick(): void {
    console.log('Close');
  }
}
