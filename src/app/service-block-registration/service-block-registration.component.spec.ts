import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBlockRegistrationComponent } from './service-block-registration.component';

describe('ServiceBlockRegistrationComponent', () => {
  let component: ServiceBlockRegistrationComponent;
  let fixture: ComponentFixture<ServiceBlockRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceBlockRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceBlockRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
