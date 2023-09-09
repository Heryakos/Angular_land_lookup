import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoredaGroupComponent } from './woreda-group.component';

describe('WoredaGroupComponent', () => {
  let component: WoredaGroupComponent;
  let fixture: ComponentFixture<WoredaGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoredaGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WoredaGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
