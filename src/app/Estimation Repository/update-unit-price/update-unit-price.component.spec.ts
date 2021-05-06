import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUnitPriceComponent } from './update-unit-price.component';

describe('UpdateUnitPriceComponent', () => {
  let component: UpdateUnitPriceComponent;
  let fixture: ComponentFixture<UpdateUnitPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUnitPriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUnitPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
