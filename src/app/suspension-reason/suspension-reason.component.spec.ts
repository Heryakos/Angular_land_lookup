import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspensionReasonComponent } from './suspension-reason.component';

describe('SuspensionReasonComponent', () => {
  let component: SuspensionReasonComponent;
  let fixture: ComponentFixture<SuspensionReasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuspensionReasonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspensionReasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
