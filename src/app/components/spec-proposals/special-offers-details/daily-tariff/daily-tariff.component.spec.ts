import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTariffComponent } from './daily-tariff.component';

describe('DailyTariffComponent', () => {
  let component: DailyTariffComponent;
  let fixture: ComponentFixture<DailyTariffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyTariffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyTariffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
