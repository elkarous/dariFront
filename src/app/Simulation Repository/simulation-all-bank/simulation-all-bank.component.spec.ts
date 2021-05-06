import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationAllBankComponent } from './simulation-all-bank.component';

describe('SimulationAllBankComponent', () => {
  let component: SimulationAllBankComponent;
  let fixture: ComponentFixture<SimulationAllBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulationAllBankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationAllBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
