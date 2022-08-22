import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositiveReportComponent } from './positive-report.component';

describe('PositiveReportComponent', () => {
  let component: PositiveReportComponent;
  let fixture: ComponentFixture<PositiveReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositiveReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositiveReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
