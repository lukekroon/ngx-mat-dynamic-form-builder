import { TestBed } from '@angular/core/testing';

import { QuestionFormServiceService } from './question-form-service.service';

describe('QuestionFormServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionFormServiceService = TestBed.get(QuestionFormServiceService);
    expect(service).toBeTruthy();
  });
});
