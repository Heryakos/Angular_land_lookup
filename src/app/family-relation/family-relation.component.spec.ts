import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyRelationComponent } from './family-relation.component';

describe('FamilyRelationComponent', () => {
  let component: FamilyRelationComponent;
  let fixture: ComponentFixture<FamilyRelationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyRelationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyRelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
