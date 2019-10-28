import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipSelectorComponent } from './chip-selector.component';

describe('ChipSelectorComponent', () => {
  let component: ChipSelectorComponent;
  let fixture: ComponentFixture<ChipSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChipSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
