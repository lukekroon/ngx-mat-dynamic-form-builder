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
      price: 2256,
      regionId: '1',
      cityId: '2',
      categoryId: ['2', '4'],
      retailId: '1',
      startDate: new Date()
    });
  }

  onNoClick(): void {
    console.log('Close');
  }
}
