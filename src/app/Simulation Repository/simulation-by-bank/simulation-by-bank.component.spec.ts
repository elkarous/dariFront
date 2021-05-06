import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationByBankComponent } from './simulation-by-bank.component';

describe('SimulationByBankComponent', () => {
  let component: SimulationByBankComponent;
  let fixture: ComponentFixture<SimulationByBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulationByBankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationByBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
