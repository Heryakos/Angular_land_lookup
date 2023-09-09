import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleDeedTransferComponent } from './title-deed-transfer.component';

describe('TitleDeedTransferComponent', () => {
  let component: TitleDeedTransferComponent;
  let fixture: ComponentFixture<TitleDeedTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleDeedTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleDeedTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
