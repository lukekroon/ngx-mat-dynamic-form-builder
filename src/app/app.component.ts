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

  newForm: any;
  editForm: any;

  constructor(private qfs: QuestionFormServiceService) { }

  saveFormNew(form: any): void {
    this.newForm = form;
  }

  saveFormEdit(form: any): void {
    this.editForm = form;
  }

  submitEdit(): void {
    console.log(this.editForm);
  }

  submitNew(): void {
    console.log(this.newForm);
  }

  ngOnInit(): void {
    this.questions = this.qfs.questions();
    this.questionsEdit = this.qfs.questions({
      qty: 5,
      price: 2256,
      regionId: 1,
      cityId: 2,
      categoryId: [2, 4],
      retailId: 1,
      startDate: new Date(),
      endDate: new Date(),
    });
  }

  onNoClick(): void {
    console.log('Close');
  }
}
