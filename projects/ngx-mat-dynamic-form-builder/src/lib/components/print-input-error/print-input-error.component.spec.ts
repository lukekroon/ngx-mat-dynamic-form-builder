import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintInputErrorComponent } from './print-input-error.component';

describe('PrintInputErrorComponent', () => {
  let component: PrintInputErrorComponent;
  let fixture: ComponentFixture<PrintInputErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintInputErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintInputErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
