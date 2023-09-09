import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementFeeComponent } from './measurement-fee.component';

describe('MeasurementFeeComponent', () => {
  let component: MeasurementFeeComponent;
  let fixture: ComponentFixture<MeasurementFeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeasurementFeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurementFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
