import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyUseComponent } from './property-use.component';

describe('PropertyUseComponent', () => {
  let component: PropertyUseComponent;
  let fixture: ComponentFixture<PropertyUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyUseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
