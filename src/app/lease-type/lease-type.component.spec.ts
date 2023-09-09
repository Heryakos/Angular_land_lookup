import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaseTypeComponent } from './lease-type.component';

describe('LeaseTypeComponent', () => {
  let component: LeaseTypeComponent;
  let fixture: ComponentFixture<LeaseTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaseTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaseTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
