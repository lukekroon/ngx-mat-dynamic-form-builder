import { TestBed } from '@angular/core/testing';

import { NgxMatDynamicFormBuilderService } from './ngx-mat-dynamic-form-builder.service';

describe('NgxMatDynamicFormBuilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxMatDynamicFormBuilderService = TestBed.get(NgxMatDynamicFormBuilderService);
    expect(service).toBeTruthy();
  });
});
