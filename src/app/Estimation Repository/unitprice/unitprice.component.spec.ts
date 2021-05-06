import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitpriceComponent } from './unitprice.component';

describe('UnitpriceComponent', () => {
  let component: UnitpriceComponent;
  let fixture: ComponentFixture<UnitpriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitpriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
