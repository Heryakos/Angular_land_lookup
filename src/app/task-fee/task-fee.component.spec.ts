import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFeeComponent } from './task-fee.component';

describe('TaskFeeComponent', () => {
  let component: TaskFeeComponent;
  let fixture: ComponentFixture<TaskFeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskFeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
