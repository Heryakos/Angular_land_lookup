import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaseOwnedStatusComponent } from './lease-owned-status.component';

describe('LeaseOwnedStatusComponent', () => {
  let component: LeaseOwnedStatusComponent;
  let fixture: ComponentFixture<LeaseOwnedStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaseOwnedStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaseOwnedStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
