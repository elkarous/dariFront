import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankUpateComponent } from './bank-upate.component';

describe('BankUpateComponent', () => {
  let component: BankUpateComponent;
  let fixture: ComponentFixture<BankUpateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankUpateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankUpateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
