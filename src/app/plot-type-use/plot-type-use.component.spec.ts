import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotTypeUseComponent } from './plot-type-use.component';

describe('PlotTypeUseComponent', () => {
  let component: PlotTypeUseComponent;
  let fixture: ComponentFixture<PlotTypeUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlotTypeUseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotTypeUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
