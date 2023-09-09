import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTaskFeeComponent } from './service-task-fee.component';

describe('ServiceTaskFeeComponent', () => {
  let component: ServiceTaskFeeComponent;
  let fixture: ComponentFixture<ServiceTaskFeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceTaskFeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceTaskFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
