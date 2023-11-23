import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STransactionSalesTypeComponent } from './s-transaction-sales-type.component';

describe('STransactionSalesTypeComponent', () => {
  let component: STransactionSalesTypeComponent;
  let fixture: ComponentFixture<STransactionSalesTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STransactionSalesTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(STransactionSalesTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
