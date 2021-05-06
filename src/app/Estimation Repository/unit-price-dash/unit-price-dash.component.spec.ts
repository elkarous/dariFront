import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitPriceDashComponent } from './unit-price-dash.component';

describe('UnitPriceDashComponent', () => {
  let component: UnitPriceDashComponent;
  let fixture: ComponentFixture<UnitPriceDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitPriceDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitPriceDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
