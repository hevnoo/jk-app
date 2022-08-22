import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegativeReportComponent } from './negative-report.component';

describe('NegativeReportComponent', () => {
  let component: NegativeReportComponent;
  let fixture: ComponentFixture<NegativeReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NegativeReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NegativeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
