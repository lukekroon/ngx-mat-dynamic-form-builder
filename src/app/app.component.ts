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

  constructor(private qfs: QuestionFormServiceService) { }

  submitForm(form: any): void {
    console.log(form);
  }

  ngOnInit(): void {
    this.questions = this.qfs.questions();
  }

  onNoClick(): void {
    console.log('Close');
  }
}
