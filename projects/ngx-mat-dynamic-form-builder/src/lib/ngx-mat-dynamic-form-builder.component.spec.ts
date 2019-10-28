import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatDynamicFormBuilderComponent } from './ngx-mat-dynamic-form-builder.component';

describe('NgxMatDynamicFormBuilderComponent', () => {
  let component: NgxMatDynamicFormBuilderComponent;
  let fixture: ComponentFixture<NgxMatDynamicFormBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMatDynamicFormBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMatDynamicFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
