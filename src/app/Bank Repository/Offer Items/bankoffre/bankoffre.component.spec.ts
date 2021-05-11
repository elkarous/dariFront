import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankoffreComponent } from './bankoffre.component';

describe('BankoffreComponent', () => {
  let component: BankoffreComponent;
  let fixture: ComponentFixture<BankoffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankoffreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankoffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
