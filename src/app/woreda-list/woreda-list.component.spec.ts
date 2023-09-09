import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoredaListComponent } from './woreda-list.component';

describe('WoredaListComponent', () => {
  let component: WoredaListComponent;
  let fixture: ComponentFixture<WoredaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoredaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WoredaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
