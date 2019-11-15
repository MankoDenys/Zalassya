import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyTariffComponent } from './hourly-tariff.component';

describe('HourlyTariffComponent', () => {
  let component: HourlyTariffComponent;
  let fixture: ComponentFixture<HourlyTariffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HourlyTariffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HourlyTariffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
