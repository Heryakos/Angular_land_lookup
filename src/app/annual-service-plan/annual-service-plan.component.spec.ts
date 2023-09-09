import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualServicePlanComponent } from './annual-service-plan.component';

describe('AnnualServicePlanComponent', () => {
  let component: AnnualServicePlanComponent;
  let fixture: ComponentFixture<AnnualServicePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnualServicePlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualServicePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
