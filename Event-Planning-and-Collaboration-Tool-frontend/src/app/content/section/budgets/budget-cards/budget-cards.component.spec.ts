import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetCardsComponent } from './budget-cards.component';

describe('BudgetCardsComponent', () => {
  let component: BudgetCardsComponent;
  let fixture: ComponentFixture<BudgetCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BudgetCardsComponent]
    });
    fixture = TestBed.createComponent(BudgetCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
